import { useState } from "react";
import styles from "../styles/components/Members.module.css";
import Carousel from "react-bootstrap/Carousel";
import { ArrowRightShort } from "react-bootstrap-icons";
import Link from "next/link";

const Members = () => {
  const [index, setIndex] = useState(0);
  const names = [
    { first: "David", last: "Xu" },
    { first: "Vincent", last: "Song" },
    { first: "Dylan", last: "Kainth" },
    { first: "George", last: "Chan" },
    { first: "Aakash", last: "Aggarwal" },
    { first: "Jake", last: "Brockwell" },
  ];
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.members}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        fade
        interval={9000}
        indicators={false}
      >
        {names.map((name) => (
          <Carousel.Item key={name.last}>
            <div className={`${styles.carouselitem} noselect`}>
              <Link href="/about" passHref>
                <span className={`${styles.link} a`}>
                  Learn
                  <br />
                  More
                  <ArrowRightShort size={75} />
                </span>
              </Link>
              <div className={styles.firstname}>{name.first}</div>
              <div className={styles.lastname}>{name.last}</div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Members;
