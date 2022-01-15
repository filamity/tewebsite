import styles from "../styles/components/Logo.module.css";

const Logo = ({ size = 30, background = "", style = {} }) => {
  return (
    <div className={styles.logo} style={{ background: background }}>
      <img
        src="/images/enigma_boldwhite.svg"
        width={size}
        height={size}
        className="d-inline-block align-top"
        alt="Enigma"
        style={style}
      />
    </div>
  );
};

export default Logo;
