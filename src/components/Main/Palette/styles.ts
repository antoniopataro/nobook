import styled from "styled-components";

const PaletteStyles = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;

  z-index: 1;

  width: 375px;
  height: fit-content;

  gap: 12px;
  padding: 12px;

  border-radius: 4px;

  box-shadow: 0px 0px 256px 64px rgba(0, 0, 0, 0.25);

  cursor: default;

  background-color: var(--bg);

  .colors {
    width: 100%;

    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));

      gap: 4px;

      list-style: none;

      li {
        display: grid;
        place-items: center;

        width: 40px;
        height: 40px;

        cursor: pointer;

        border-radius: 8px;

        background-color: transparent;

        transition: 0.25s ease;
        transition-property: background-color;

        :hover {
          background-color: #d9d9d9;
        }
      }
    }
  }

  .custom-wrapper {
    display: flex;
    flex-direction: row;

    width: 100%;
    height: fit-content;

    align-items: center;
    justify-content: space-between;

    .custom-color {
      display: flex;
      flex-direction: row;

      width: fit-content;
      height: fit-content;

      align-items: center;

      gap: 8px;
      padding: 8px;

      border-radius: 4px;

      background-color: #d9d9d9;

      form {
        display: flex;
        flex-direction: row;

        width: 100%;
        height: fit-content;

        align-items: center;

        gap: 8px;
        padding: 0;

        span {
          display: grid;
          place-items: center;
        }

        input {
          width: 60px;
          height: fit-content;

          outline: none;
          border: none;

          font-family: "Inter var", sans-serif;
          font-size: clamp(12px, 1.65vw, 14px);

          color: #404040;
          background-color: transparent;
        }
      }
    }
  }
`;

export default PaletteStyles;
