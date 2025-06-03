import React from 'react';
import { dataStats } from './DataStats';

function UserStatistics() {
  return (
    <div>
      <h2>Статистика пользователей</h2>
      <table>
        <thead>
          <tr>
            <th>Имя пользователя</th>
            <th>Коэффициент убийств/смертей (KD)</th>
            <th>Убийства</th>
            <th>Смерти</th>
            <th>Урон нанесён</th>
            <th>Полученный урон</th>
            <th>Урон по себе</th>
            <th>Раны</th>
            <th>Реанимации</th>
            <th>Выстрелы</th>
            <th>Попадания</th>
            <th>Точность</th>
          </tr>
        </thead>
        <tbody>
          {dataStats.map((user, index) => (
            <tr key={index}>
              <td>{user.user}</td>
              <td>{user.kd}</td>
              <td>{user.kills}</td>
              <td>{user.deaths}</td>
              <td>{user.damageDealt}</td>
              <td>{user.damageReceived}</td>
              <td>{user.damageSelf}</td>
              <td>{user.wounds}</td>
              <td>{user.reanimations}</td>
              <td>{user.shotsFired}</td>
              <td>{user.hits}</td>
              <td>{user.accuracy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserStatistics;
