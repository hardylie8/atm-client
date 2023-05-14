import "./App.css";
import MainHistory from "./Component/History/MainHistory";
import MainMenu from "./Component/MainMenu/MainMenu";

import Transfer from "./Component/Transfer/mainTransfer";
import Withdraw from "./Component/Withdraw/Withdraw";
import TopUp from "./Component/TopUp/TopUp";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };
  return (
    <div style={styles}>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainMenu />} />
          <Route path="transfer" element={<Transfer />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="topup" element={<TopUp />} />
          <Route path="history" element={<MainHistory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
