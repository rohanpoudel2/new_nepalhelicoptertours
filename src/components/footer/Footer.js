import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerText}>
        Created with ❤️ in Nepal
      </div>
      <div className={styles.footerItems}>
        <div className={styles.footerItem}>
          <Link href="https://www.youtube.com/@mactrek9153/videos" target="_blank">
            YouTube
          </Link>
        </div>
        <div className={styles.footerItem}>
          ©️ 2023 MacTrek
        </div>
      </div>
    </div>
  )
}

export default Footer