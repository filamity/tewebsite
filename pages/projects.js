import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BreadcrumbGlobal from "../components/Breadcrumb";
import styles from "../styles/pages/Projects.module.css";
import axios from "axios";
import Card from "../components/Card";
import Link from "next/link";

const Projects = () => {
  const [surveyDone, setSurveyDone] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    "q6.1": "",
    "q6.2": "",
    "q7.1": "",
    "q7.2": "",
    "q7.3": "",
    "q7.4": "",
    "q7.5": "",
  });
  const PAGE_TOTAL = 4;

  useEffect(() => {
    setError("");
  }, [data]);

  const getLocationConstant = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (e) => {
          setData({
            ...data,
            "q6.1": e.coords.latitude,
            "q6.2": e.coords.longitude,
          });
        },
        (e) => {
          alert(`An error occured. Error: ${e.message} (${e.code})`);
        }
      );
    } else {
      alert("Your browser or device doesn't support Geolocation");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const keys = Object.keys(data);
    let isValid = true;
    for (let i = 0; i < keys.length; i++) {
      if (data[keys[i]] === "") {
        isValid = false;
        setError("Please answer all questions.");
        break;
      }
    }
    if (isValid) {
      setSurveyDone(true);
      clearInputs();

      // axios
      //   .post(
      //     "https://teamenigma-projecteco-webserver-1.dylankainth.repl.co/survey/success",
      //     {
      //       q1: "1",
      //       q2: "1",
      //       q3: "1",
      //       q4: "No",
      //       q5: "No",
      //       "q6.1": "51.567",
      //       "q6.2": "-0.341",
      //       "q7.1": "0",
      //       "q7.2": "7",
      //       "q7.3": "5",
      //       "q7.4": "1",
      //       "q7.5": "7",
      //     }
      //   )
      //   .then((res) => {
      //     console.log(res);
      //     clearInputs();
      //     setSurveyDone(true);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  };

  const clearInputs = () => {
    setData({
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      "q6.1": "",
      "q6.2": "",
      "q7.1": "",
      "q7.2": "",
      "q7.3": "",
      "q7.4": "",
      "q7.5": "",
    });
  };

  return (
    <div>
      <div className={styles.projects}>
        <BreadcrumbGlobal />
        <section className="buffer-20"></section>
        <Card className={styles.wrap}>
          <h1 className="title">Project Eco</h1>
          <div className={styles.herogrid}>
            <div>
              <p>
                Project ECO gives the community the power to sustain the
                environment and take action against its effects on mental
                well-being through our AI technology.
              </p>
              <p>
                During the development of this project, our team has found
                strong links between air quality and mental health.
              </p>
              <p>
                We aim to predict such changes in our environment and give users
                the ability and knowledge to reduce the effects of pollutants,
                ensuring a cleaner and healthier future for all of us.
              </p>
              <p>
                Visit the website{" "}
                <a className="a white" href="https://projecteco.ml/">
                  here
                </a>{" "}
                to learn more about the project.
              </p>
            </div>
            <div>
              <Link href="https://projecteco.ml/" passHref>
                <div className={styles.img} data-project="projecteco"></div>
              </Link>
            </div>
          </div>
        </Card>
        <section className="buffer-20"></section>
        <div className={styles.surveywrap}>
          {surveyDone ? (
            <div className={styles.survey}>
              <div className={styles.surveythankyou}>
                <div>
                  <h3>Thank you for taking the survey!</h3>
                  <p>
                    Your responses provide us with useful data for delivering
                    accurate predictions.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <Form className={styles.survey} onSubmit={handleSubmit}>
              <div className="disable-item noselect">
                Sorry, the survey is currently under maintenance.
              </div>
              {page === 1 && (
                <div className={styles.surveygroup}>
                  <div className={styles.surveycard}>
                    <Form.Group className={styles.surveyradio}>
                      <div>
                        <h3>How do you feel today?</h3>
                        {["1", "2", "3", "4", "5"].map((item) => (
                          <label key={item}>
                            <Form.Check
                              type="radio"
                              name="q1"
                              onChange={handleChange}
                              value={item}
                              checked={data.q1 === item}
                            />
                            {item}
                          </label>
                        ))}
                      </div>
                    </Form.Group>
                  </div>
                  <div className={styles.surveycard}>
                    <Form.Group className={styles.surveyradio}>
                      <div>
                        <h3>How well could you concentrate on your work?</h3>
                        {["1", "2", "3", "4", "5"].map((item) => (
                          <label key={item}>
                            <Form.Check
                              type="radio"
                              name="q2"
                              onChange={handleChange}
                              value={item}
                              checked={data.q2 === item}
                            />
                            {item}
                          </label>
                        ))}
                      </div>
                    </Form.Group>
                  </div>
                  <div className={styles.surveycard}>
                    <Form.Group className={styles.surveyradio}>
                      <div>
                        <h3>How stressful has your work been?</h3>
                        {["1", "2", "3", "4", "5"].map((item) => (
                          <label key={item}>
                            <Form.Check
                              type="radio"
                              name="q3"
                              onChange={handleChange}
                              value={item}
                              checked={data.q3 === item}
                            />
                            {item}
                          </label>
                        ))}
                      </div>
                    </Form.Group>
                  </div>
                </div>
              )}
              {page === 2 && (
                <div className={styles.surveygroup}>
                  <div className={styles.surveycard}>
                    <Form.Group className={styles.surveyradio}>
                      <div>
                        <h3>
                          Have you had any dizziness or headaches recently?
                        </h3>
                        {["Yes", "No"].map((item) => (
                          <label key={item}>
                            <Form.Check
                              type="radio"
                              name="q4"
                              onChange={handleChange}
                              value={item}
                              checked={data.q4 === item}
                            />
                            {item}
                          </label>
                        ))}
                      </div>
                    </Form.Group>
                  </div>
                  <div className={styles.surveycard}>
                    <Form.Group className={styles.surveyradio}>
                      <div>
                        <h3>Have you had any allergic responses today?</h3>
                        {["Yes", "No"].map((item) => (
                          <label key={item}>
                            <Form.Check
                              type="radio"
                              name="q5"
                              onChange={handleChange}
                              value={item}
                              checked={data.q5 === item}
                            />
                            {item}
                          </label>
                        ))}
                      </div>
                    </Form.Group>
                  </div>
                  <div className={styles.surveycard}>
                    <Form.Group className={styles.surveyinput}>
                      <div>
                        <h3>Where are you taking this survey?</h3>
                        <div className="displayflex">
                          <Form.Control
                            name="q6.1"
                            onChange={handleChange}
                            value={data["q6.1"]}
                            type="number"
                            placeholder="Latitude"
                          />
                          <span className="inlinebuffer-10"></span>
                          <Form.Control
                            name="q6.2"
                            onChange={handleChange}
                            value={data["q6.2"]}
                            type="number"
                            placeholder="Longitude"
                          />
                        </div>
                        <section className="buffer-10"></section>
                        <Button onClick={getLocationConstant} variant="green-7">
                          Use GPS
                        </Button>
                      </div>
                    </Form.Group>
                  </div>
                </div>
              )}
              {page === 3 && (
                <div className={styles.surveygroup}>
                  <div className={styles.surveycard}>
                    <Form.Group className={styles.surveyradio}>
                      <div>
                        <h3>How much physical activity have you done today?</h3>
                        {["0", "1", "2", "3", "4", "5"].map((item) => (
                          <label key={item}>
                            <Form.Check
                              type="radio"
                              name="q7.1"
                              onChange={handleChange}
                              value={item}
                              checked={data["q7.1"] === item}
                            />
                            {item}
                          </label>
                        ))}
                      </div>
                    </Form.Group>
                  </div>
                  <div className={styles.surveycard}>
                    <Form.Group className={styles.surveyinput}>
                      <div>
                        <h3>How many hours did you sleep?</h3>
                        <div className="displayflex">
                          <Form.Control
                            name="q7.2"
                            onChange={handleChange}
                            value={data["q7.2"]}
                            type="number"
                            placeholder="Hours"
                            max={24}
                            min={0}
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                  <div className={styles.surveycard}>
                    <Form.Group className={styles.surveyradio}>
                      <div>
                        <h3>How hungry are you right now?</h3>
                        {["1", "2", "3", "4", "5"].map((item) => (
                          <label key={item}>
                            <Form.Check
                              type="radio"
                              name="q7.3"
                              onChange={handleChange}
                              value={item}
                              checked={data["q7.3"] === item}
                            />
                            {item}
                          </label>
                        ))}
                      </div>
                    </Form.Group>
                  </div>
                </div>
              )}
              {page === 4 && (
                <div className={styles.surveygroup}>
                  <div className={styles.surveycard}>
                    <Form.Group className={styles.surveyradio}>
                      <div>
                        <h3>How heavy was your workload today?</h3>
                        {["1", "2", "3", "4", "5"].map((item) => (
                          <label key={item}>
                            <Form.Check
                              type="radio"
                              name="q7.4"
                              onChange={handleChange}
                              value={item}
                              checked={data["q7.4"] === item}
                            />
                            {item}
                          </label>
                        ))}
                      </div>
                    </Form.Group>
                  </div>
                  <div className={styles.surveycard}>
                    <Form.Group className={styles.surveyinput}>
                      <div>
                        <h3>How many hours have you spent outdoors?</h3>
                        <div className="displayflex">
                          <Form.Control
                            name="q7.5"
                            onChange={handleChange}
                            value={data["q7.5"]}
                            type="number"
                            placeholder="Hours"
                            max={24}
                            min={0}
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                  <div className={styles.surveycard}>
                    <div className={styles.surveysubmit}>
                      {error && (
                        <div className={styles.error}>
                          <p>{error}</p>
                        </div>
                      )}
                      <Button variant="green-7" type="submit">
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              <div className={styles.surveycontrols}>
                {page !== 1 && (
                  <Button
                    className={styles.prevbtn}
                    variant="green-5"
                    onClick={() => setPage((prev) => prev - 1)}
                  >
                    Prev
                  </Button>
                )}
                <div className={styles.pageno}>
                  Page {page} of {PAGE_TOTAL}
                </div>
                {page !== PAGE_TOTAL && (
                  <Button
                    className={styles.nextbtn}
                    variant="green-5"
                    onClick={() => setPage((prev) => prev + 1)}
                  >
                    Next
                  </Button>
                )}
              </div>
            </Form>
          )}
        </div>
        <section className="buffer-20"></section>
        <Card className={styles.wrap}>
          <h1 className="title">The Enigma Questions</h1>
          <div className={styles.herogrid}>
            <div>
              <p>A series of computational problems by Team Enigma.</p>
              <p>
                These questions are designed to challenge people to use their
                knowledge of data and algorithms to solve a problem.
              </p>
              <p>
                The questions are designed to be as challenging as possible, but
                not too hard once you&apos;ve got started.
              </p>
              <p>We hope you enjoy giving them a shot!</p>
              <p>
                Visit the website{" "}
                <a className="a white" href="https://questions.teamenigma.ml/">
                  here
                </a>{" "}
                to give the problems a try.
              </p>
            </div>
            <div>
              <Link href="https://questions.teamenigma.ml/" passHref>
                <div
                  className={styles.img}
                  data-project="enigmaquestions"
                ></div>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
