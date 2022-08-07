import AccountSettings from "../../components/Settings/AccountSettings";
import About from "../../components/Settings/About";
import Appearance from "../../components/Settings/Appearance";
import Sidebar from "../../components/Settings/Sidebar";

import { useLocation, useNavigate } from "react-router-dom";

import SettingsStyles from "./styles";

function Settings() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const path = pathname.split("/")[3];

  const handleSettings = () => {
    switch (path) {
      case "account-settings":
        return <AccountSettings />;
      case "about":
        return <About />;
      case "appearance":
        return <Appearance />;
      default:
        return;
    }
  };

  return (
    <SettingsStyles>
      <button onClick={() => navigate("/nobook/")}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.98924 6L11.9638 0.241104C12.0472 0.145399 11.9771 0 11.8482 0H10.336C10.2469 0 10.1616 0.0386502 10.1029 0.104908L6 4.85521L1.89714 0.104908C1.84028 0.0386502 1.755 0 1.66404 0H0.151759C0.022893 0 -0.0472254 0.145399 0.0361585 0.241104L5.01076 6L0.0361585 11.7589C0.0174797 11.7802 0.00549658 11.8063 0.00163129 11.8341C-0.00223399 11.8618 0.00218092 11.8901 0.0143523 11.9154C0.0265238 11.9408 0.0459405 11.9623 0.0702967 11.9773C0.094653 11.9923 0.122926 12.0002 0.151759 12H1.66404C1.75311 12 1.83839 11.9613 1.89714 11.8951L6 7.14478L10.1029 11.8951C10.1597 11.9613 10.245 12 10.336 12H11.8482C11.9771 12 12.0472 11.8546 11.9638 11.7589L6.98924 6Z"
            fill="#404040"
          />
        </svg>
      </button>
      <Sidebar />
      <div className="settings">{handleSettings()}</div>
    </SettingsStyles>
  );
}

export default Settings;
