import styles from "./videohero.module.scss";
import { Permanent_Marker } from 'next/font/google'

const permanent_market = Permanent_Marker({ subsets: ["latin"], weight: "400" });

const VideoHero = ({ title, subtitle, src, poster }) => {
  return (
    <div className={styles.hero}>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={styles.details}>
        <h1 className={`${styles.title} ${permanent_market.className}`}>
          {title}
        </h1>
        <h2 className={styles.subtitle}>
          {subtitle}
        </h2>
      </div>
    </div>
  )
}

export default VideoHero