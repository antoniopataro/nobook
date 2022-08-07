import React, { useContext } from "react";

import SidebarItem from "../SidebarItem";

import { Notebooks } from "../../../contexts/NotebooksProvider";

import SidebarStyles from "./styles";

function Sidebar() {
  const { notebooks, createNotebook } = useContext(Notebooks);

  return (
    <SidebarStyles>
      <h3>nobook</h3>
      <ul>
        {notebooks.map((notebook) => (
          <SidebarItem key={notebook.id} notebook={notebook} />
        ))}
      </ul>
      <button onClick={createNotebook}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.94206 0H4.05801V4.05796H0V5.94202H4.05801V10H5.94206V5.94202H10V4.05796H5.94206V0Z"
            fill="#808080"
          />
        </svg>
        <span>New notebook...</span>
      </button>
    </SidebarStyles>
  );
}

export default Sidebar;
