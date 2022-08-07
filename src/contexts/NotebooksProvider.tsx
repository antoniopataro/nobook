import React, { useState, useEffect, createContext } from "react";

import { v4 as uuidv4 } from "uuid";

export interface ToolbarProps {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strikethrough: boolean;
}

export interface NotebookProps {
  color: string;
  htmlContent: string;
  id: string;
  lastUpdated: Date;
  title: string;
  slug: string;
  tags: string[];
  toolbar: ToolbarProps;
}

interface NotebooksProps {
  notebooks: NotebookProps[];
  createNotebook: () => void;
  updateNotebookTitle: (title: string, id: string) => void;
  updateNotebookHtmlContentAndTags: (htmlContent: string, tags: string[], id: string) => void;
  updateNotebookToolbar: (toolbar: ToolbarProps, id: string) => void;
  deleteNotebook: (id: string) => void;
}

export const Notebooks = createContext({} as NotebooksProps);

interface NotebooksProviderProps {
  children: React.ReactNode;
}

const currentDate = new Date();

const randomId = uuidv4();

const initialNotebook: NotebookProps[] = [
  {
    color: "008FD0",
    htmlContent: "",
    id: randomId,
    lastUpdated: currentDate,
    title: "",
    slug: `/${randomId}`,
    tags: [],
    toolbar: {
      bold: false,
      italic: false,
      underline: false,
      strikethrough: false,
    },
  },
];

function NotebooksProvider({ children }: NotebooksProviderProps) {
  const [notebooks, setNotebooks] = useState<NotebookProps[]>([]);

  const createNotebook = () => {
    const randomId = uuidv4();

    const newNotebook: NotebookProps = {
      color: "008FD0",
      htmlContent: "",
      id: randomId,
      lastUpdated: currentDate,
      title: "",
      slug: `/${randomId}`,
      tags: [],
      toolbar: {
        bold: false,
        italic: false,
        underline: false,
        strikethrough: false,
      },
    };

    setNotebooks([...notebooks, newNotebook]);
    localStorage.setItem("userNotebooks", JSON.stringify([...notebooks, newNotebook]));
  };

  const updateNotebookTitle = (title: string, id: string) => {
    const newNotebooks = notebooks.map((notebook) => {
      if (notebook.id === id) {
        return { ...notebook, title: title };
      }
      return notebook;
    });

    setNotebooks(newNotebooks);
    localStorage.setItem("userNotebooks", JSON.stringify(newNotebooks));
  };

  const updateNotebookHtmlContentAndTags = (htmlContent: string, tags: string[], id: string) => {
    const newNotebooks = notebooks.map((notebook) => {
      if (notebook.id === id) {
        return { ...notebook, htmlContent: htmlContent, tags: tags };
      }
      return notebook;
    });

    setNotebooks(newNotebooks);
    localStorage.setItem("userNotebooks", JSON.stringify(newNotebooks));
  };

  const updateNotebookToolbar = (toolbar: ToolbarProps, id: string) => {
    const newNotebooks = notebooks.map((notebook) => {
      if (notebook.id === id) {
        return { ...notebook, toolbar: toolbar };
      }
      return notebook;
    });

    setNotebooks(newNotebooks);
    localStorage.setItem("userNotebooks", JSON.stringify(newNotebooks));
  };

  const deleteNotebook = (id: string) => {
    const newNotebooks = notebooks.filter((notebook) => {
      if (notebook.id === id) {
        return;
      }
      return notebook;
    });

    setNotebooks(newNotebooks);
    localStorage.setItem("userNotebooks", JSON.stringify(newNotebooks));
  };

  useEffect(() => {
    const storedNotebooks: NotebookProps[] = JSON.parse(
      localStorage.getItem("userNotebooks") || JSON.stringify(initialNotebook),
    );

    setNotebooks(storedNotebooks);
  }, []);

  return (
    <Notebooks.Provider
      value={{
        notebooks,
        createNotebook,
        updateNotebookTitle,
        updateNotebookHtmlContentAndTags,
        updateNotebookToolbar,
        deleteNotebook,
      }}
    >
      {children}
    </Notebooks.Provider>
  );
}

export default NotebooksProvider;
