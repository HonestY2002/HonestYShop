import classes from "./LogoSection.module.css";

function LogoSection() {
  return (
    <header className={`${classes.logo}`}>
      <a className={classes.logobar} href="">
        Honesty shop
      </a>
      <button className={classes.logobar} href="">
        <span className={classes.button}> Вход через Steam</span>
      </button>
    </header>
  );
}

export default LogoSection;
