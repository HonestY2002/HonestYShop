import { useState } from "react";
import "./App.css";
import Navigate from "./components/Navigate/Navigate";
import Catalog from "./components/Catalog/Catalog";
import LogoSection from "./components/LogoSection/LogoSection";
import Rules from "./components/Rules/Rules";

function App() {
  const [activeTab, setActiveTab] = useState("main");

  return (
    <>
      <main>
        <LogoSection />
        {activeTab === "main" && (
          <Catalog
            active={activeTab}
            onChange={(current) => setActiveTab(current)}
          />
        )}
        <Navigate
          active={activeTab}
          onChange={(current) => setActiveTab(current)}
        />
        {activeTab === "rules" && (
          <Rules
            active={activeTab}
            onChange={(current) => setActiveTab(current)}
          />
        )}
      </main>
    </>
  );
}

export default App;
