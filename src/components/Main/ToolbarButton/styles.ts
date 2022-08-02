import styled from "styled-components";

interface ToolbarButtonStylesProps {
  active: boolean;
}

const ToolbarButtonStyles = styled.button<ToolbarButtonStylesProps>`
  display: grid;
  place-items: center;

  width: 30px;
  height: 30px;

  outline: none;
  border: none;

  cursor: pointer;

  border-radius: 4px;

  background-color: ${(props) => (props.active ? "var(--fg)" : "transparent")};

  :hover {
    svg {
      fill: #404040;
    }

    background-color: var(--fg);

    transition: 0.15s ease;
    transition-property: background-color;
  }

  svg {
    fill: ${(props) => (props.active ? "#404040" : "var(--fg)")};

    pointer-events: none;

    transition: 0.15s ease;
    transition-property: fill;
  }
`;

export default ToolbarButtonStyles;
