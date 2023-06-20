import styles from './page.module.scss'
import VideoHero from '@/components/videoHero/VideoHero'
import FeaturedTour from '@/components/featuredTour/FeaturedTour'
import Newsletter from '@/components/newsletter/Newsletter'
import Link from 'next/link'
import Title from '@/ui/title/Title'
import { GetPage } from '@/utils/page'

async function getData() {
  const res = await GetPage("home");
  if (!res) {
    throw new Error("Failed to fetch Home Page Data");
  }
  return JSON.parse(res);
}

async function getFeatured(ids) {
  try {
    const includeParams = ids.map(id => `include[]=${id.featured_tour}`).join('&');
    const url = `${process.env.WP_API}/posts?${includeParams}`;
    const res = await fetch(url, { next: { revalidate: 10 } });
    const data = await res.json();
    return JSON.stringify(data);
  } catch (error) {
    return new Error(error);
  }
}

export const metadata = {
  title: "Nepal Helicopter Tours - Home",
  description: "Best Handpicked Helicopter Tours in Nepal. Suitable for individuals and families looking for an ultimate travel experience in Nepal.",
  alternates: {
    canonical: '/',
  }
}

export default async function Home() {

  let data = await getData();
  data = data[0]
  let featured = await getFeatured(data?.acf.featured_tours);
  featured = JSON.parse(featured);

  return (
    <div className={styles.home}>
      <VideoHero
        title={data?.acf.title}
        subtitle={data?.acf.sub_title}
        src={data?.acf.video}
        poster={data?.acf.video_poster.sizes.large}
      />
      <Title
        text={data?.acf.intro_title}
      />
      <div className={styles.featuredTours}>
        {
          featured.map((data, index) => (
            <FeaturedTour data={data} key={index} />
          ))
        }
      </div>
      <div className={styles.viewMore}>
        <Link href="/helicopter-tours">
          <button className={styles.button}>
            View More Helicopter Tours
          </button>
        </Link>
      </div>
      <Newsletter />
    </div>
  )
}
