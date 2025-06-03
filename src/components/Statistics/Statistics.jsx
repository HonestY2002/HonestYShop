import React, { useState } from "react";
import UserStatsTable from "../UserStatsTable/UserStatsTable";

function Statistics() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div>
        <div>Сервера</div>
        <div>Фильтры статистики</div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div>
          <UserStatsTable />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
