import { useNavigate, useLocation } from "react-router-dom";

import { NotebookProps } from "../../../contexts/NotebooksProvider";

import SidebarItemStyles from "./styles";

interface SidebarItemProps {
  notebook: NotebookProps;
}

function SidebarItem({ notebook }: SidebarItemProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const date = new Date(notebook.lastUpdated);

  const dayString = date.getDate().toString();
  const monthString = (date.getMonth() + 1).toString();

  const day = dayString.length === 1 ? "0" + dayString : dayString;
  const month = monthString.length === 1 ? "0" + monthString : monthString;

  return (
    <SidebarItemStyles activeNotebook={pathname === notebook.slug} onClick={() => navigate(`/nobook/${notebook.id}`)}>
      <div className="top">
        <span>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="10" height="10" rx="5" fill={`#${notebook.color}`} />
          </svg>
        </span>
        <h2 data-placeholder="New notebook...">{notebook.title}</h2>
      </div>
      <span className="bottom">{`${day}/${month.toString().length === 1 ? `0${month}` : month}`}</span>
    </SidebarItemStyles>
  );
}

export default SidebarItem;
