import Sidebar from "@/components/sidebar/Sidebar";
import styles from "./page.module.scss";
import SwiperHero from "@/components/swiperHero/SwiperHero";
import Divider from "@/ui/divider/Divider";
import { GetElement } from "@/utils/getCustomElement";
import { notFound } from "next/navigation";
import Link from "next/link";

async function getData(id) {
  const res = await GetElement(id);

  if (JSON.parse(res).code) {
    return notFound();
  }

  return JSON.parse(res);
}

export async function generateMetadata({ params }) {
  const id = params.id;

  let res = await GetElement(id);

  res = JSON.parse(res);

  if (res.code) {
    return notFound();
  }

  const pattern = /<p>(.*?)<\/p>/;

  const match = res?.content.rendered.match(pattern);

  if (match && match.length > 1) {
    let extractedText = match[1];
    if (extractedText.length > 150) {
      extractedText = extractedText.substring(0, 150);
    }

    return {
      title: res?.title.rendered,
      description: extractedText,
      alternates: {
        canonical: `/custom-helicopter-package/${res?.id}`
      },
      openGraph: {
        title: res?.title.rendered,
        description: extractedText,
        url: `${process.env.SITE_URL}/articles`,
        type: "website",
        images: [res?.acf.hero_images[0].hero_image.sizes.medium_large]
      }
    }

  }
}

const CustomHeli = async ({ params }) => {

  const { id } = params;
  const data = await getData(id);

  return (
    <div className={styles.customHeli}>
      <SwiperHero
        images={data?.acf.hero_images}
      />
      <div className={styles.topbar}>
        <h2 className={styles.title}>
          {data?.title.rendered}
          <Divider width="80px" />
        </h2>
        <Link href="https://wa.link/1nohk5" target="_blank">
          <button className={styles.button}>
            Get Rates in NPR
          </button>
        </Link>
      </div>
      <div className={styles.details}>
        <div className={styles.left}>
          <div dangerouslySetInnerHTML={{ __html: data?.content.rendered }} className={styles.desc} />
        </div>
        <div className={styles.right}>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default CustomHeli