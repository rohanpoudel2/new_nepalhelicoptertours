import styles from "./infobar.module.scss";

const Infobar = ({ data }) => {
  return (
    <div className={styles.infobar}>
      <div className={styles.items}>
        <div className={styles.item}>
          <i className="fa-solid fa-location-dot"></i>
          {data?.destination}
        </div>
        <div className={styles.item}>
          <i className="fa-solid fa-gauge"></i>
          {data?.max_altitute}
        </div>
        <div className={styles.item}>
          <i className="fa-solid fa-map-location-dot"></i>
          {data?.departure_from_}
        </div>
      </div>
      <button className={styles.button}>
        Book <br />Now<br />
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  )
}

export default Infobar