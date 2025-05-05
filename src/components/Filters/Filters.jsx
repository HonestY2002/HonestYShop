import classes from "./Filters.module.css";

function Filters({ onFilterChange }) {
  return (
    <div className={classes.filtersSection}>
      <button className={classes.filters} onClick={() => onFilterChange("all")}>
        Все
      </button>
      <button className={classes.filters} onClick={() => onFilterChange("resurce")}>
        Ресурсы
      </button>
      <button
        className={classes.filters}
        onClick={() => onFilterChange("build")}
      >
        Строение
      </button>
      <button className={classes.filters} onClick={() => onFilterChange("tools")}>
        Инструменты
      </button>
      <button className={classes.filters} onClick={() => onFilterChange("armor")}>
        Одежда
      </button>
      <button
        className={classes.filters}
        onClick={() => onFilterChange("comps")}
      >
        Компоненты
      </button>
      <button className={classes.filters} onClick={() => onFilterChange("gun")}>
        Оружие
      </button>
      <button className={classes.filters} onClick={() => onFilterChange("ammo")}>
        Боеприпасы
      </button>
      <button
        className={classes.filters}
        onClick={() => onFilterChange("other")}
      >
        Прочее
      </button>
    </div>
  );
}

export default Filters;
