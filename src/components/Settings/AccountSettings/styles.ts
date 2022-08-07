import styled from "styled-components";

const AccountSettingsStyles = styled.main`
  display: flex;
  flex-direction: column;

  gap: 30px;

  color: #404040;

  h1 {
    opacity: 0;
    animation: slideDown20 0.5s ease forwards;
  }

  span {
    opacity: 0;
    animation: slideDown20 0.5s ease forwards 0.25s;
  }
`;

export default AccountSettingsStyles;
