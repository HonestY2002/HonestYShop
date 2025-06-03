import Button from "../Botton/Button";
import classes from "./Navigate.module.css"

function Navigate({ active, onChange }) {
  const buttons = [
    { id: "main", label: "Магазин" },
    { id: "statistics", label: "Статистика" },
    { id: "rules", label: "Правила" },
    { id: "bans", label: "Баны" },
  ];

  return (
    <div className={classes.navigate}>
      {buttons.map(({ id, label }) => (
        <Button key={id} isActive={active === id} onClick={() => onChange(id)}>
          {label}
        </Button>
      ))}
    </div>
  );
}

export default Navigate;
