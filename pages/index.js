import { useState } from "react";
import styles from "../styles/pages/Home.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "../components/Card";
import Members from "../components/Members";
import Link from "next/link";

const Home = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <div className={styles.herocard}>
        <img
          src="/images/enigma_boldwhite.svg"
          className={styles.bgsvg}
          alt="Team Enigma"
        />
        <div className={styles.teamenigma}>
          <strong>
            We&apos;re
            <br />
            Team
            <br />
            Enigma
            <br />
          </strong>
          <p className={styles.introtext}>
            We&apos;re a team of computer science enthusiasts from Harrow
            School.
          </p>
          <div className={styles.signupcard}>
            If you&apos;re interested in joining us, you can{" "}
            <Link href="https://urls.teamenigma.ml/mailinglist" passHref>
              <span className="a">sign up here</span>
            </Link>
            !
          </div>
          {/* <Card variant="green-7">
            <Form>
              <Form.Group>
                <Form.Label>Join the mailing list</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <section className="buffer-10"></section>
              <Button variant="green-5" type="submit">
                Submit
              </Button>
            </Form>
          </Card> */}
        </div>
        <div className={styles.herodemopc}>
          <Members />
        </div>
      </div>
      <div className={styles.herodemomobile}>
        <Members />
      </div>
      <div className={styles.cardgrid}>
        <div className={styles.gridcard}>
          <Link href="/projects" passHref>
            <span className={`${styles.gridcardtitle} a`}>Our Projects</span>
          </Link>
          <p>
            Learn about our latest projects, with links to their respective
            sites.
          </p>
        </div>
        <div className={styles.gridcard}>
          <Link href="/contact" passHref>
            <span className={`${styles.gridcardtitle} a`}>Contact</span>
          </Link>
          <p>
            If you&apos;d like to leave a suggestion or message, you can contact
            us here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
