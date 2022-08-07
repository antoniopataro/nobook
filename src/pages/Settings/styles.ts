import styled from "styled-components";

const SettingsStyles = styled.main`
  display: flex;
  flex-direction: row;

  width: 100vw;
  min-height: 100vh;

  background-color: var(--bg);

  button {
    position: absolute;

    z-index: 1;

    top: 60px;
    right: 60px;

    display: grid;
    place-items: center;

    width: 30px;
    height: 30px;

    outline: none;
    border: none;

    padding: 5px;

    border-radius: 4px;

    cursor: pointer;

    background-color: transparent;

    transition: 0.15s ease;
    transition-property: background-color;

    :hover {
      background-color: #d9d9d9;
    }
  }

  .settings {
    display: flex;
    flex-direction: column;

    width: 70vw;
    height: 100vh;

    align-items: left;

    gap: 30px;
    padding: 60px;

    background-color: var(--bg);
  }
`;

export default SettingsStyles;
