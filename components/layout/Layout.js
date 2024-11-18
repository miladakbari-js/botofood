import Link from "next/link"
import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <div className={styles.left}>
            <Link href="/">BotoFood</Link>
        </div>
        <div className={styles.right}>
            <Link href="/menu">Menu</Link>
            <Link href="/categories">Categories</Link>
        </div>
    </header>
    <div className={styles.container}>{children}</div>
    <footer className={styles.footer}>
        <p>Developed by Milad Akbari &copy;</p>
        <a href="https://www.linkedin.com/in/milad-akbari-developer/" target="_blank" rel="noreferrer">Go to linkedin</a>
    </footer>
    </>
  )
}

export default Layout