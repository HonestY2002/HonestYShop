import { useState } from "react";
import "./App.css";
import Navigate from "./components/Navigate/Navigate";
import Catalog from "./components/Catalog/Catalog";
import LogoSection from "./components/LogoSection/LogoSection";
import RulesList from "./components/Rules/RulesList";
import Bans from "./components/Bans/Bans";
import Statistics from "./components/Statistics/Statistics";

function App() {
  const [activeTab, setActiveTab] = useState("main");

  return (
    <>
      <LogoSection />
      {activeTab === "main" && (
        <Catalog
          active={activeTab}
          onChange={(current) => setActiveTab(current)}
        />
      )}
      {activeTab === "rules" && (
        <RulesList
          active={activeTab}
          onChange={(current) => setActiveTab(current)}
        />
      )}
      {activeTab === "statistics" && (
        <Statistics
          active={activeTab}
          onChange={(current) => setActiveTab(current)}
        />
      )}
      {activeTab === "bans" && (
        <Bans
          active={activeTab}
          onChange={(current) => setActiveTab(current)}
        />
      )}
      <Navigate
        active={activeTab}
        onChange={(current) => setActiveTab(current)}
      />
    </>
  );
}

export default App;
