import React from 'react';
import { useTable } from 'react-table';

function UserStatsTable({ dataStats }) {
  // Определение колонок
  const columns = React.useMemo(
    () => [
      {
        Header: 'Пользователь',
        accessor: 'user',
      },
      {
        Header: 'КД',
        accessor: 'kd',
      },
      {
        Header: 'Убийства',
        accessor: 'kills',
      },
      {
        Header: 'Смертей',
        accessor: 'deaths',
      },
      {
        Header: 'Нанесённый урон',
        accessor: 'damageDealt',
      },
      {
        Header: 'Самоубийство',
        accessor: 'damageReceived',
      },
      {
        Header: 'Ранений',
        accessor: 'damageSelf',
      },
      {
        Header: 'Реанимаций',
        accessor: 'wounds',
      },
      {
        Header: 'Ранений',
        accessor: 'reanimations',
      },
      {
        Header: 'Выстрелов',
        accessor: 'shotsFired',
      },
      {
        Header: 'Попаданий',
        accessor: 'hits',
      },
      {
        Header: 'Точность',
        accessor: 'accuracy',
      },
    ],
    []
  );

  // Использование хука useTable
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: dataStats });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default UserStatsTable;
