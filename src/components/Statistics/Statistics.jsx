import React, { useState } from "react";
import UserStatistics from "../UserStatsTable/UserStatistics";

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
          <UserStatistics />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
