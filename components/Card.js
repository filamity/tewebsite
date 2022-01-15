import styles from "../styles/components/Card.module.css";

const Card = ({ children, variant = "green-5" }) => {
  return (
    <div className={styles.card} data-variant={variant}>
      {children}
    </div>
  );
};

export default Card;
