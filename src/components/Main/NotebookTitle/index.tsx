import NotebookTitleStyles from "./styles";

import { NotebookProps } from "../../../contexts/NotebooksProvider";

interface NotebookTitleProps {
  notebook: NotebookProps;
  titleRef: React.RefObject<HTMLDivElement>;
  handleUpdateNotebookTitle: () => void;
}

function NotebookTitle({ notebook, titleRef, handleUpdateNotebookTitle }: NotebookTitleProps) {
  return (
    <NotebookTitleStyles>
      <div className="title">
        <span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="15" height="15" rx="7.5" fill="#008FD0" />
          </svg>
        </span>
        <h1>
          <div
            ref={titleRef}
            contentEditable="plaintext-only"
            className="editable-title"
            data-placeholder="New notebook..."
            onBlur={handleUpdateNotebookTitle}
            suppressContentEditableWarning
          >
            {notebook?.title ? notebook?.title : ""}
          </div>
        </h1>
      </div>
      <ul>
        {notebook?.tags?.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </NotebookTitleStyles>
  );
}

export default NotebookTitle;
