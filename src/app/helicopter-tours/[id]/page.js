import SwiperHero from "@/components/swiperHero/SwiperHero";
import styles from "./page.module.scss";
import Infobar from "@/components/infobar/Infobar";
import TripInfo from "@/components/tripInfo/TripInfo";
import { notFound } from "next/navigation";
import { GetElement } from "@/utils/element";

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

  const match = res?.excerpt.rendered.match(pattern);

  if (match && match.length > 1) {
    let extractedText = match[1];
    if (extractedText.length > 150) {
      extractedText = extractedText.substring(0, 150);
    }

    return {
      title: res?.title.rendered,
      description: extractedText,
      alternates: {
        canonical: `/helicopter-tours/${res?.id}`
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

const HelicopterTour = async ({ params }) => {

  const { id } = params;
  const data = await getData(id);

  return (
    <div className={styles.tour}>
      <SwiperHero
        images={data?.acf.hero_images}
      />
      <div className={styles.details}>
        <div className={styles.left}>
          <Infobar data={data?.acf} />
          <div dangerouslySetInnerHTML={{ __html: data?.content.rendered }} className={styles.content} />
        </div>
        <div className={styles.right}>
          <TripInfo data={data?.acf} />
        </div>
      </div>
    </div>
  )
}

export default HelicopterTour