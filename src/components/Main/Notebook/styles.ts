import styled from "styled-components";

const NotebookStyles = styled.main`
  display: flex;
  flex-direction: column;

  width: 70vw;
  height: 100vh;

  align-items: left;

  gap: 30px;
  padding: 60px;

  background-color: var(--bg);

  .editor {
    width: 100%;
    height: 100%;

    outline: none;
    border: none;

    overflow: scroll;

    cursor: text;

    font-size: 16px;
    font-weight: 500;
    color: #404040;

    opacity: 0;
    animation: slideDown20 0.5s ease forwards 0.5s;

    :empty:before {
      content: attr(data-placeholder);
      color: #d9d9d9;
    }

    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    a {
      cursor: pointer;

      pointer-events: auto;
    }
  }
`;

export default NotebookStyles;
