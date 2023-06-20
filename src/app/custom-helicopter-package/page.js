import PhotoHero from "@/components/photoHero/PhotoHero";
import styles from "./page.module.scss";
import FeaturedTour from "@/components/featuredTour/FeaturedTour";
import Title from "@/ui/title/Title";
import { GetPage } from "@/utils/page";

async function getData() {
  const res = await GetPage("custom-package");
  if (!res) {
    throw new Error("Failed to fetch Custom Package Data");
  }
  return JSON.parse(res);
}

async function getPackages() {
  try {
    const res = await fetch(`${process.env.WP_API}/custom_packages/?_embed`, { next: { revalidate: 10 } });
    const data = await res.json();
    const resdata = JSON.stringify(data);
    return JSON.parse(resdata);
  } catch (error) {
    return new Error(error);
  }
}

export const metadata = {
  title: "Nepal Helicopter Tours - Helicopter Weddings, Rescue ...",
  description: "Best Handpicked Helicopter Tours in Nepal. Suitable for individuals and families looking for an ultimate travel experience in Nepal.",
  alternates: {
    canonical: '/custom-helicopter-package',
  }
}

const CustomHelicopterPackage = async () => {

  let data = await getData();
  data = data[0];

  const packages = await getPackages();

  return (
    <div className={styles.customHome}>
      <PhotoHero
        image={data?.acf.hero_image.url}
      />
      <Title
        text={data?.acf.title}
      />
      <div className={styles.tours}>
        {packages.map((data, index) => (
          <FeaturedTour data={data} key={index} />
        ))}
      </div>
    </div>
  )
}

export default CustomHelicopterPackage