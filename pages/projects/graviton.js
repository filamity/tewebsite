import { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import BreadcrumbGlobal from "../../components/Breadcrumb";
import Card from "../../components/Card";
import styles from "../../styles/pages/Graviton.module.css";

const Graviton = () => {
  return (
    <div>
      <div className={styles.graviton}>
        <BreadcrumbGlobal />
        <section className="buffer-20"></section>
        <Card className={styles.wrap}>
          <h1 className="title">Graviton</h1>
          <div className={styles.gravitonwrap}>
            {/* stuff goes here */}
            {/* canvas etc. */}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Graviton;
