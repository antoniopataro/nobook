import ContextProvider from "./contexts/ContextProvider";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Settings from "./pages/Settings";
// import Settings from "./pages/Settings";

import "./App.css";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/nobook/" element={<Main />} />
          <Route path="/nobook/:notebookId" element={<Main />} />
          <Route path="/nobook/settings/:path" element={<Settings />} />
          {/* <Route path="/settings" element={<Settings/>}/> */}
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
