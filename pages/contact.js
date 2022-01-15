import styles from "../styles/pages/Contact.module.css";
import BreadcrumbGlobal from "../components/Breadcrumb";
import Card from "../components/Card";
import CopyToClipboard from "../components/CopyToClipboard";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <div className={styles.contact}>
        <BreadcrumbGlobal />
        <section className="buffer-20"></section>
        <div className={styles.contactbody}>
          <Card variant="green-5">
            <h1 className="title">Contact Info</h1>
            <p>
              If you have any questions, feel free to contact us! We are always
              open to discussing new projects and ideas.
            </p>
            <div>
              <div className="line-height-1">Email</div>
              <a
                className={`${styles.link} a`}
                href="mailto:19SongY@harrowschool.org.uk"
              >
                19SongY@harrowschool.org.uk
              </a>
              <CopyToClipboard text="19SongY@harrowschool.org.uk" />
            </div>
            <section className="buffer-20"></section>
            <div className={styles.signupcard}>
              If you&apos;re interested in joining us, you can{" "}
              <Link href="https://urls.teamenigma.ml/mailinglist" passHref>
                <span className="a">sign up here</span>
              </Link>
              !
            </div>
            {/* <section className="buffer-20"></section>
            <div>
              <div className="line-height-1">Email</div>
              <a
                className={styles.link}
                href="mailto:17XuD@harrowschool.org.uk"
              >
                17XuD@harrowschool.org.uk
              </a>
              <CopyToClipboard text="17XuD@harrowschool.org.uk" />
            </div> */}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
