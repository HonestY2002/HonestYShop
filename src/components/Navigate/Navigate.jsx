import classes from "./Navigate.module.css";

function Navigate() {
  return (
    <div>
      <nav className={classes.menu}>
        <a href="#!" className={classes.navbar}>
          Honesty rust
        </a>
        <button className={classes.button}>
          <span></span>
        </button>
        <ul className={classes.menu}>
          <li className={classes.navbar}>
            <a href="#!">
              <span>Новости</span>
            </a>
          </li>
          <li className={classes.navbar}>
            <a href="#!">
              <span>Товары</span>
            </a>
          </li>
          <li className={classes.navbar}>
            <a href="#!">
              <span>Серверы</span>
            </a>
          </li>
          <li className={classes.navbar}>
            <a href="#!">
              <span>Банлист</span>
            </a>
          </li>
          <li className={classes.navbar}>
            <a href="#!">
              <span>Контакты</span>
            </a>
          </li>
          <li className={classes.navbar}>
            <a href="#!">
              <span>Вход через Steam</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigate;
