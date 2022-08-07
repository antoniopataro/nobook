import styled from "styled-components";

interface SidebarItemStylesProps {
  activeNotebook: boolean;
}

const SidebarItemStyles = styled.li<SidebarItemStylesProps>`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;

  gap: 12px;
  align-items: left;

  padding: 20px 10px;

  border-bottom: 2px solid;
  border-color: ${(props) => (props.activeNotebook ? "#404040" : "#d9d9d9")};

  cursor: pointer;

  color: #808080;
  background-color: var(--fg);

  transition: 0.25s ease;
  transition-property: border-color;

  opacity: 0;
  animation: slideDown20 0.5s ease forwards 0.25s;

  :hover {
    border-color: #404040;

    .top h2 {
      color: #404040;
    }
  }

  .top {
    display: flex;
    flex-direction: row;

    width: 100%;

    align-items: center;

    gap: 10px;

    span {
      display: grid;
      place-items: center;
    }

    h2 {
      color: ${(props) => (props.activeNotebook ? "#404040" : "#808080")};

      :empty:before {
        content: attr(data-placeholder);
        color: #808080;
      }
    }
  }

  .bottom {
    display: flex;
    flex-direction: row;

    width: 100%;

    align-items: center;
  }
`;

export default SidebarItemStyles;
