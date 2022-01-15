import styles from "../styles/components/Footer.module.css";
import { Github } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <h3>Team Enigma</h3>
        <a className={styles.iconlink} href="https://github.com/Harrow-Enigma/">
          <Github size={40} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
