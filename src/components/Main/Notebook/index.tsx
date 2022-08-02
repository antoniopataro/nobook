import React, { useState, useRef, useContext, useEffect } from "react";

import Toolbar from "../Toolbar";
import NotebookTitle from "../NotebookTitle";

import { Notebooks } from "../../../contexts/NotebooksProvider";

import { useNavigate, useLocation } from "react-router-dom";

import NotebookStyles from "./styles";

function Notebook() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const {
    notebooks,
    updateNotebookTitle,
    updateNotebookHtmlContent,
    updateNotebookTags,
    updateNotebookToolbar,
    deleteNotebook,
  } = useContext(Notebooks);

  const notebook = notebooks.filter((notebook) => notebook.slug === pathname)[0];

  useEffect(() => {
    const notebookIds = notebooks.map((notebook) => notebook.id);

    if (!notebookIds.includes(notebook?.id)) {
      if (notebookIds.length === 0) {
        navigate("/");
        return;
      }

      navigate(notebookIds[0]);
    }
  }, [pathname, notebooks]);

  const titleRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  const [tags, setTags] = useState<string[]>([]);

  const handleUpdateNotebookTitle = () => {
    const title = titleRef.current?.textContent;

    if (!title) return;

    updateNotebookTitle(title, notebook?.id);
  };

  const handleUpdateNotebookHtmlContent = () => {
    const htmlContent = editorRef.current?.innerHTML;

    if (!htmlContent) return;

    handleUpdateTags();
    updateNotebookHtmlContent(htmlContent, notebook?.id);
  };

  const handleUpdateTags = () => {
    const text = editorRef.current?.textContent;

    if (!text) return;

    const splittedText = text.split(" ");
    const splittedTextMiddleware = splittedText.map((word) => word.split("\n"));
    const cleanSplittedText = splittedTextMiddleware.reduce((prev, curr) => prev.concat(curr));

    const currentTags = cleanSplittedText.filter((word) => word[0] === "#");

    if (currentTags === tags) return;

    setTags(currentTags);
    updateNotebookTags(currentTags, notebook?.id);
  };

  const handleDeleteNotebook = () => {
    navigate(-1);
    deleteNotebook(notebook?.id);
  };

  return (
    <NotebookStyles>
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
        onBlur={handleUpdateNotebookHtmlContent}
      />
    </NotebookStyles>
  );
}

export default Notebook;
