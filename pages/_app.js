import "../styles/globals.css";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Team Enigma</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta
          name="keywords"
          content="web development, programming, ai, machine learning, team enigma, computer science"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
