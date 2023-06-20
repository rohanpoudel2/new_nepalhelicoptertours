import PhotoHero from "@/components/photoHero/PhotoHero";
import styles from "./page.module.scss";
import Title from "@/ui/title/Title";
import Tour from "@/components/tour/Tour";
import { GetPage } from "@/utils/page";

async function getData() {
  const res = await GetPage("helicopter-tours");
  if (!res) {
    throw new Error("Failed to fetch Helicopter Tours Page Data");
  }
  return JSON.parse(res);
}

async function getTours() {
  try {
    const res = await fetch(`${process.env.WP_API}/posts/?_embed`, { next: { revalidate: 10 } });
    const data = await res.json();
    const resdata = JSON.stringify(data);
    return JSON.parse(resdata);
  } catch (error) {
    return new Error(error);
  }
}

export const metadata = {
  title: "Nepal Helicopter Tours - Best Helicopter Tours in Nepal",
  description: "Best Handpicked Helicopter Tours in Nepal. Suitable for individuals and families looking for an ultimate travel experience in Nepal.",
  alternates: {
    canonical: '/helicopter-tours',
  }
}

const HelicopterTours = async () => {

  let data = await getData();
  data = data[0];

  const tours = await getTours();

  return (
    <div className={styles.helicoptertours}>
      <PhotoHero
        title={data?.acf.title}
        image={data?.acf.hero_image.url}
      />
      <Title
        text="EXPLORE OUR OFFERINGS"
      />
      <div className={styles.tours}>
        {tours.map((data, index) => (
          <Tour data={data} key={index} />
        ))}
      </div>
    </div>
  )
}

export default HelicopterTours