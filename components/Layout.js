import Nav from "./Nav"
import styles from "../styles/components/Layout.module.css"
import Footer from "./Footer"

const Layout = ({ children }) => {

  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout