import styled from "styled-components";

const ToolbarStyles = styled.section`
  display: flex;
  flex-direction: row;

  width: 100%;

  align-items: center;
  justify-content: space-between;

  opacity: 0;
  animation: slideDown20 0.5s ease forwards;

  .left {
    display: flex;
    flex-direction: row;

    width: fit-content;

    align-items: center;

    gap: 10px;

    li {
      list-style: none;

      display: grid;
      place-items: center;

      width: 30px;
      height: 30px;
    }
  }

  .right {
    display: flex;
    flex-direction: row;

    width: fit-content;

    align-items: center;

    gap: 10px;

    li {
      list-style: none;

      display: grid;
      place-items: center;

      min-width: 30px;
      min-height: 30px;

      button {
        display: grid;
        place-items: center;

        width: 30px;
        height: 30px;

        outline: none;
        border: none;

        cursor: pointer;

        border-radius: 4px;

        background-color: transparent;

        :hover {
          svg {
            fill: #404040;
          }

          background-color: var(--fg);

          transition: 0.15s ease;
          transition-property: background-color;
        }

        svg {
          fill: #404040;

          pointer-events: none;

          transition: 0.15s ease;
          transition-property: fill;
        }
      }
    }
  }
`;

export default ToolbarStyles;
