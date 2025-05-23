function Navigate({ active, onChange }) {
  return (
    <div>
      <button isActive={active === "main"} onClick={() => onChange("main")}>
        Магазин
      </button>
      <button
        isActive={active === "statistics"}
        onClick={() => onChange("statistics")}
      >
        Статистика
      </button>
      <button isActive={active === "rules"} onClick={() => onChange("rules")}>
        Правила
      </button>
      <button isActive={active === "bans"} onClick={() => onChange("bans")}>
        Баны
      </button>
    </div>
  );
}

export default Navigate;
