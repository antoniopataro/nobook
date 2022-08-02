import styled from "styled-components";

const SidebarStyles = styled.aside`
  display: flex;
  flex-direction: column;

  width: 30vw;
  height: 100vh;

  align-items: left;

  gap: 16px;
  padding: 60px;

  background-color: var(--fg);

  ul {
    display: flex;
    flex-direction: column;

    width: 100%;
  }

  button {
    display: flex;
    flex-direction: row;

    width: fit-content;

    align-items: center;

    gap: 12px;
    padding: 8px 16px;

    outline: none;
    border: none;

    border-radius: 4px;

    cursor: pointer;

    font-family: "Inter var", sans-serif;
    font-size: 14px;
    font-weight: 500;

    color: #808080;
    background-color: transparent;

    transition: 0.25s ease;
    transition-property: background-color;

    opacity: 0;
    animation: slideDown20 0.5s ease forwards 0.25s;

    :hover {
      background-color: #d9d9d9;
    }
  }
`;

export default SidebarStyles;
