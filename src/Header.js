import styles from "./css/Header.module.css";
import logo from "./img/logo192.png";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="/">그룹소개</a>
        </li>
        <li>
          <a href="/">그룹소개</a>
        </li>
        <li>
          <a href="/">그룹소개</a>
        </li>
        <li>
          <a href="/">그룹소개</a>
        </li>
        <li>
          <a href="/">그룹소개</a>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topContainer}>
        <div className={styles.title}>
          <img alt="logo" src={logo} />
          <h1>Stargazer</h1>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
