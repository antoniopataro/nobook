import Sidebar from "../../components/Main/Sidebar";
import Notebook from "../../components/Main/Notebook";

import MainStyles from "./styles";

function Main() {
  return (
    <MainStyles>
      <Sidebar />
      <Notebook />
    </MainStyles>
  );
}

export default Main;
