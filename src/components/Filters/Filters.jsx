import classes from "./Filters.module.css";

function Filters({ onFilterChange }) {
  return (
    <div className={classes.filtersSection}>
      <button className={classes.filters} onClick={() => onFilterChange("all")}>
        Все
      </button>
      <button className={classes.filters} onClick={() => onFilterChange("gun")}>
        Ресурсы
      </button>
      <button
        className={classes.filters}
        onClick={() => onFilterChange("comps")}
      >
        Строение
      </button>
      <button className={classes.filters} onClick={() => onFilterChange("all")}>
        Инструменты
      </button>
      <button className={classes.filters} onClick={() => onFilterChange("gun")}>
        Одежда
      </button>
      <button
        className={classes.filters}
        onClick={() => onFilterChange("comps")}
      >
        Компоненты
      </button>
      <button className={classes.filters} onClick={() => onFilterChange("all")}>
        Оружие
      </button>
      <button className={classes.filters} onClick={() => onFilterChange("gun")}>
        Боеприпасы
      </button>
      <button
        className={classes.filters}
        onClick={() => onFilterChange("comps")}
      >
        Прочее
      </button>
    </div>
  );
}

export default Filters;
