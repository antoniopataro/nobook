import Sidebar from "../../components/Main/Sidebar";
import Notebook from "../../components/Main/Notebook";
import Palette from "../../components/Main/Palette";

import MainStyles from "./styles";

function Main() {
  return (
    <MainStyles>
      <Sidebar />
      <Notebook />
      {/* <Palette /> */}
    </MainStyles>
  );
}

export default Main;
