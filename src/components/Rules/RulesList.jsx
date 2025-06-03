import React from "react";
import RuleSection from "./RuleSection";
import { rules } from "./Rules";

function RulesList() {
  return (
    <div>
      {rules.map((section, key) => (
        <RuleSection
          key={key}
          title={section.title}
          content={section.content}
        />
      ))}
    </div>
  );
}

export default RulesList;
