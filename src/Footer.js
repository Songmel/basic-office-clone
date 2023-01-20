import styles from "./css/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span className={styles.address}>
          주소 : 경기도 남양주시 별내면 청학로 68번길 24 대표전화 : 6821-4159
        </span>
        <span className={styles.copyright}>
          Copyright @ Songmel. All rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
