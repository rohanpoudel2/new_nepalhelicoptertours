import TripForm from "../tripform/TripForm";
import styles from "./tripinfo.module.scss";
import Divider from "@/ui/divider/Divider";

const TripInfo = ({ data }) => {
  return (
    <div className={styles.tripInfo}>
      <h1 style={{ fontSize: "28px" }} className={styles.title}>
        {data?.title}
        <Divider width="80px" />
      </h1>
      <div className={styles.details}>
        <span className={styles.detail}>
          <span className={styles.head}>Duration:</span>
          {data?.duration}
        </span>
        <span className={styles.detail}>
          <span className={styles.head}>Items to Bring:</span>
          {data?.items_to_bring}
        </span>
        <span className={styles.detail}>
          <span className={styles.head}>Route:</span>
          {data?.route}
        </span>
      </div>
      <div className={styles.cost}>
        <span className={styles.price}>
          {data?.price}
        </span>
        <span className={styles.disclamer}>
          *inclusive per person (Group Joining)
        </span>
      </div>
      <h2 className={styles.title}>
        Book Now
        <Divider width="80px" />
      </h2>
      <TripForm title={data?.title} />
    </div>
  )
}

export default TripInfo