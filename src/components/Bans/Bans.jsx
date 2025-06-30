import { DataBans } from "./DataBans";

function Bans() {
  return (
    <div>
      <h2>Заблокированные пользователим</h2>
      <input
        type="text"
        placeholder="Поиск"
      />

      <table>
        <thead>
            <tr>
                <th>Начало</th>
                <th>Конец</th>
                <th>Пользователь</th>
                <th>Причина</th>
            </tr>
        </thead>
        {DataBans.map((user, index) =>(
            <tbody>
                <tr key={index}>
                    <td>{user.start}</td>
                    <td>{user.end}</td>
                    <td>{user.user}</td>
                    <td>{user.reason}</td>
                </tr>
            </tbody>
        ))}
      </table>
    </div>
  );
}

export default Bans;
