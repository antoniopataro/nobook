import styled from "styled-components";

const NotebookTitleStyles = styled.header`
  display: flex;
  flex-direction: column;

  width: fit-content;

  gap: 10px;

  opacity: 0;
  animation: slideDown20 0.5s ease forwards 0.25s;

  .title {
    display: flex;
    flex-direction: row;

    width: 100%;

    align-items: center;

    gap: 10px;

    .editable-title {
      padding: 4px 8px;

      outline: none;
      border: none;

      border-radius: 4px;

      background-color: transparent;

      word-break: break-all;

      transition: 0.15s ease;
      transition-property: background-color;

      :empty:before {
        content: attr(data-placeholder);
        color: var(--fg);

        cursor: text;
      }

      :hover {
        background-color: var(--fg);
      }
    }

    span {
      display: grid;
      place-items: center;
    }
  }

  ul {
    display: flex;
    flex-direction: row;

    width: fit-content;

    align-items: center;

    gap: 10px;

    li {
      width: fit-content;

      list-style: none;

      padding: 6px 12px;

      border-radius: 4px;

      font-size: 12px;
      font-weight: 500;

      color: #808080;
      background-color: var(--fg);
    }
  }
`;

export default NotebookTitleStyles;
