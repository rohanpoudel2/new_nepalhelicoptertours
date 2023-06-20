import Image from "next/image";
import styles from "./tour.module.scss";
import Link from "next/link";

const Tour = ({ data }) => {
  return (
    <div className={styles.tour}>
      <Image
        src={data?.acf.hero_images[0].hero_image.sizes.medium_large}
        alt="Tour Image"
        width={500}
        height={500}
        className={styles.image}
      />
      <h2 className={styles.title}>
        {data?.acf.title}
      </h2>
      <div className={styles.price}>
        <span>
          <i className="fa-solid fa-tag"></i>
          Price
        </span>
        {data?.acf.price}
      </div>
      <div className={styles.flightDetails}>
        <span className={styles.flightTime}>
          🕦 Approx {data?.acf.duration} flight time
        </span>
        <span className={styles.flightTime}>
          🗻 Max {data?.acf.max_altitute} Altitute from Sea Level
        </span>
      </div>
      <Link href={`/helicopter-tours/${data?.id}`}>
        <button className={styles.button}>
          More Details
        </button>
      </Link>
    </div>
  )
}

export default Tour