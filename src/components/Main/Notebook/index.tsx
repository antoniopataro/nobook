import React, { useRef, useContext, useEffect, useCallback } from "react";

import Toolbar from "../Toolbar";
import NotebookTitle from "../NotebookTitle";

import { Notebooks } from "../../../contexts/NotebooksProvider";

import { useNavigate, useLocation } from "react-router-dom";

import NotebookStyles from "./styles";

function Notebook() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { notebooks, updateNotebookTitle, updateNotebookHtmlContentAndTags, updateNotebookToolbar, deleteNotebook } =
    useContext(Notebooks);

  const notebook = notebooks.filter((notebook) => notebook.slug === pathname)[0];

  useEffect(() => {
    const notebookIds = notebooks.map((notebook) => notebook.id);

    if (!notebookIds.includes(notebook?.id)) {
      if (notebookIds.length === 0) {
        navigate("/nobook/");
        return;
      }

      navigate(`/nobook/${notebookIds[0]}`);
    }
  }, [pathname, notebooks]);

  const titleRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  const handleUpdateNotebookTitle = () => {
    const title = titleRef.current?.textContent;

    if (!title) return;

    updateNotebookTitle(title, notebook?.id);
  };

  const handleUpdateNotebookHtmlContentAndTags = () => {
    const htmlContent = editorRef.current?.innerHTML!;
    const htmlChildNodes = editorRef.current?.childNodes;

    var currentTags: string[] = [];

    htmlChildNodes?.forEach((node) => {
      if (node.nodeName === "TAG") {
        currentTags.push(node.textContent!);
      }
    });

    updateNotebookHtmlContentAndTags(htmlContent, currentTags, notebook?.id);
  };

  const handleDeleteNotebook = () => {
    deleteNotebook(notebook?.id);

    if (notebooks.length === 1) {
      navigate("/nobook/");
      return;
    }

    navigate(-1);
  };

  const handleRefresh = (e: BeforeUnloadEvent) => {
    e.preventDefault();

    editorRef.current?.blur();
    titleRef.current?.blur();
  };

  const handlePaste = useCallback(
    (e: any) => {
      e.preventDefault();

      const editingNotebook = editorRef.current === document.activeElement;

      if (!editingNotebook) return;

      const text = e.clipboardData?.getData("text/plain");

      const selectedRange = window.getSelection()?.getRangeAt(0);

      if (!selectedRange || !text) return;

      try {
        new URL(text);

        document.execCommand(
          "insertHTML",
          false,
          `<div contentEditable="false" style="display: inline-block"><a href=${text} target="_blank">${text}</a></div>`,
        );

        const selection = document.getSelection();
        const existingNode = selection?.anchorNode?.parentNode?.parentNode;

        existingNode?.parentNode?.insertBefore(document.createTextNode(" "), existingNode.nextSibling);

        const range = document.createRange();
        selection?.removeAllRanges();
        range.selectNodeContents(existingNode?.nextSibling!);
        range.collapse(false);
        selection?.addRange(range);

        return;
      } catch (e) {
        document.execCommand("insertText", false, text);
      }
    },
    [notebook, editorRef],
  );

  const handleKeyDown = useCallback(
    (e: any) => {
      const key = e.key.toLowerCase();
      const ctrl = e.ctrlKey;

      const selection = document.getSelection();
      const editingNotebook = editorRef.current === document.activeElement;

      if (!editingNotebook) return;

      if (key === "#") {
        e.preventDefault();

        const tag = document.createElement("tag");
        tag.appendChild(document.createTextNode("#"));

        document.execCommand("insertHTML", false, tag.outerHTML);
      }

      if (key === " " && selection?.anchorNode?.parentNode?.nodeName === "TAG") {
        e.preventDefault();

        const existingNode = selection.anchorNode.parentNode;

        existingNode.parentNode?.insertBefore(document.createTextNode(" "), existingNode.nextSibling);

        const range = document.createRange();
        selection?.removeAllRanges();
        range.selectNodeContents(existingNode.nextSibling!);
        range.collapse(false);
        selection?.addRange(range);
      }

      if (key === "enter") {
        e.preventDefault();

        document.execCommand("insertHTML", false, "<br/><br/>");
      }
    },
    [editorRef],
  );

  useEffect(() => {
    window.addEventListener("beforeunload", handleRefresh, { capture: true });
    window.addEventListener("paste", handlePaste);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("beforeunload", handleRefresh, { capture: true });
      window.removeEventListener("paste", handlePaste);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <NotebookStyles notebookColor={notebook?.color}>
      <Toolbar
        notebook={notebook}
        updateNotebookToolbar={updateNotebookToolbar}
        editorRef={editorRef}
        handleDeleteNotebook={handleDeleteNotebook}
      />
      <NotebookTitle handleUpdateNotebookTitle={handleUpdateNotebookTitle} titleRef={titleRef} notebook={notebook} />
      <div
        ref={editorRef}
        className="editor"
        contentEditable
        data-placeholder="Type here..."
        dangerouslySetInnerHTML={notebook?.htmlContent ? { __html: notebook?.htmlContent } : { __html: "" }}
        onBlur={handleUpdateNotebookHtmlContentAndTags}
      />
    </NotebookStyles>
  );
}

export default Notebook;
