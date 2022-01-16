import { useState, useEffect } from "react";
import BreadcrumbGlobal from "../components/Breadcrumb";
import Card from "../components/Card";
import styles from "../styles/pages/About.module.css";
import Editor from "@monaco-editor/react";
import Button from "react-bootstrap/Button";

const About = () => {
  const [html, setHtml] = useState("");
  const [showEditor, setShowEditor] = useState(true);
  const [message, setMessage] = useState("Save changes");

  const saveToLocalStorage = () => {
    localStorage.setItem("html", html);
    setMessage("Saved!");
    setTimeout(() => setMessage("Save changes"), 2000);
  };

  useEffect(() => {
    if (localStorage.getItem("html")) {
      setHtml(localStorage.getItem("html"));
    } else {
      setHtml(
        `<div class="wrap">\n  <h2>About [Your Name]</h2>\n  <p>[Some text about yourself...]</p>\n  <img src="http://tny.im/r1A" height="150">\n</div>\n\n<style>\n  .wrap {\n    background: #4d9795;\n    padding: 30px;\n    height: 300px;\n    text-align: center;\n  }\n</style>\n`
      );
    }
  }, []);

  return (
    <div>
      <div className={styles.about}>
        <BreadcrumbGlobal />
        <section className="buffer-20"></section>
        <Card className={styles.wrap}>
          <h1 className="title">About</h1>
          <p>
            Introducing our team - and you! You can use the HTML editor below to
            make the intro card your very own. Save your progress so you can
            come back to it later.
          </p>
          <Button
            variant="green-7"
            onClick={() => setShowEditor((prev) => !prev)}
          >
            {showEditor ? "Hide" : "Show"} HTML editor
          </Button>
          <span className="inlinebuffer-10"></span>
          <Button variant="green-7" onClick={saveToLocalStorage}>
            {message}
          </Button>
          <section className="buffer-20"></section>
          <div className={styles.herogrid}>
            <div className={styles.playground} data-show={showEditor}>
              <div className={styles.output} data-show={showEditor}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
              {showEditor && (
                <div className={`${styles.input} editor`}>
                  <Editor
                    language="html"
                    theme="vs-dark"
                    value={html}
                    onChange={(newValue, e) => setHtml(newValue)}
                    options={{
                      wordWrap: "on",
                      scrollBeyondLastLine: false,
                      padding: {
                        bottom: 10,
                        top: 10,
                      },
                      minimap: {
                        enabled: true,
                      },
                    }}
                  />
                </div>
              )}
            </div>
            <div className={styles.member} data-member="vincent">
              <div className={styles.cardcontent}>
                <div className={styles.cardfirstname}>Vincent</div>
                <div className={styles.cardlastname}>Song</div>
                <div className={styles.cardtextcontent}>
                  <b>Vincent Song</b> is the founder of Team Enigma and easily
                  charmed by everything AI. He hopes the team will help spread
                  the technology and get more people to develop and grow with
                  each other.
                </div>
              </div>
            </div>
            <div className={styles.member} data-member="david">
              <div className={styles.cardcontent}>
                <div className={styles.cardfirstname}>David</div>
                <div className={styles.cardlastname}>Xu</div>
                <div className={styles.cardtextcontent}>
                  <b>David Xu</b> is a computer hardware enthusiast, with
                  projects ranging from building and designing the 2020 Titan PC
                  to CMOS SPICE simulations using LTSPICE. He co-founded the
                  projects division for Team Enigma.
                </div>
              </div>
            </div>
            <div className={styles.member} data-member="dylan">
              <div className={styles.cardcontent}>
                <div className={styles.cardfirstname}>Dylan</div>
                <div className={styles.cardlastname}>Kainth</div>
                <div className={styles.cardtextcontent}>
                  <b>Dylan Kainth</b> is a 16-year-old tech enthusiast from
                  London, UK; In his free time, he enjoys robotics,
                  microelectronics and engineering, and he loves anything to do
                  with the Internet.
                </div>
              </div>
            </div>
            <div className={styles.member} data-member="george">
              <div className={styles.cardcontent}>
                <div className={styles.cardfirstname}>George</div>
                <div className={styles.cardlastname}>Chan</div>
                <div className={styles.cardtextcontent}>
                  <b>George Chan</b> is 16 and is a tech hobbyist who loves web
                  development. When he&apos;s not coding, He&apos;s probably
                  learning a new hobby or looking for a new project to work on.
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
