import React, { useState } from "react";

function RuleSection({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>{isOpen ? "▼" : "▶"}</span>
      </div>
      {isOpen && (
        <div>
          <ul>
            {content.map((rules, key) => (
              <li key={key}>{rules}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RuleSection;
