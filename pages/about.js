import { useState } from "react";
import BreadcrumbGlobal from "../components/Breadcrumb";
import Card from "../components/Card";
import styles from "../styles/pages/About.module.css";
import Editor from "@monaco-editor/react";

const About = () => {
  const [html, setHtml] = useState(
    `<div class="wrap">\n  <h2>About [Your Name]</h2>\n  <p>[Some text about yourself...]</p>\n  <img src="http://tny.im/r1A" height="150">\n</div>\n\n<style>\n  .wrap {\n    background: #4d9795;\n    padding: 30px;\n    height: 300px;\n    text-align: center;\n  }\n</style>\n`
  );

  return (
    <div>
      <div className={styles.about}>
        <BreadcrumbGlobal />
        <section className="buffer-20"></section>
        <Card className={styles.wrap}>
          <h1 className="title">About</h1>
          <p>
            Introducing our team - and you! You can edit the HTML code below to
            make the intro card your very own.
          </p>
          <div className={styles.herogrid}>
            <div className={styles.playground}>
              <div className={styles.output}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
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
            </div>
            {/* <div className={styles.member}>
              <div className={styles.cardcontent}>
                <h2>David Xu</h2>
              </div>
            </div> */}
            <div className={styles.member} data-member="vincent">
              <div className={styles.cardcontent}>
                <h2>Vincent Song</h2>
                <div>
                  Vincent is the founder of Team Enigma and easily charmed by
                  everything AI. He hopes the team will help spread the
                  technology and get more people to develop and grow with each
                  other.
                </div>
              </div>
            </div>
            <div className={styles.member} data-member="dylan">
              <div className={styles.cardcontent}>
                <h2>Dylan Kainth</h2>
                <div>
                  Hi, I&apos;m Dylan. I&apos;m a 16-year-old tech enthusiast
                  from London, UK; In my free time, I enjoy robotics,
                  microelectronics, engineering and I love anything to do with
                  the internet.
                </div>
              </div>
            </div>
            <div className={styles.member} data-member="george">
              <div className={styles.cardcontent}>
                <h2>George Chan</h2>
                <div>
                  Hey - I&apos;m George, 16 and a tech hobbyist who loves web
                  development. When I&apos;m not coding, I&apos;m probably
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
