import { useNavigate } from "react-router-dom";

import SidebarStyles from "./styles";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <SidebarStyles>
      <ul>
        <li onClick={() => navigate("/nobook/settings/account-settings")}>Account settings</li>
        <li onClick={() => navigate("/nobook/settings/about")}>About</li>
        <li onClick={() => navigate("/nobook/settings/appearance")}>Appearance</li>
      </ul>
    </SidebarStyles>
  );
}

export default Sidebar;
