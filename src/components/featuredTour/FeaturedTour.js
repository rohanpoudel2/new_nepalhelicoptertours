import Divider from "@/ui/divider/Divider";
import styles from "./featuredtour.module.scss";
import Image from "next/image";
import Link from "next/link";

const FeaturedTour = ({ data }) => {

  return (
    <div className={styles.featuredTour}>
      <div className={styles.left}>
        <Image
          src={data?.acf.hero_images[0].hero_image.sizes.medium_large}
          alt="Featured Image"
          width={1000}
          height={1000}
          className={styles.image}
        />
      </div>
      <div className={styles.right}>
        <h2 className={styles.title}>
          {data?.acf?.title || data?.title?.rendered}
          <Divider width="80px" />
        </h2>
        {
          data.excerpt ? <span className={styles.cost}>
            Tour Starts from <span className={styles.price}> {data?.acf.price}</span>
          </span> : ""
        }
        <div dangerouslySetInnerHTML={{ __html: data?.excerpt?.rendered || data?.content?.rendered }} className={styles.desc} />
        <Link href={data?.acf?.title ? `/helicopter-tours/${data?.id}` : `/custom-helicopter-package/${data?.id}`}>
          <button className={styles.button}>
            Book Now
          </button>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedTour