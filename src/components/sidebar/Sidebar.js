import Link from "next/link";
import styles from "./sidebar.module.scss";
import { GetPage } from "@/utils/page";


async function getData() {
  const res = await GetPage("sidebar");
  if (!res) {
    throw new Error("Failed to fetch Custom Package Data");
  }
  return JSON.parse(res);
}

const Sidebar = async () => {

  const data = await getData();

  return (
    <div className={styles.sidebar}>
      {
        data[0]?.acf.sidebar.map((data, index) => (
          <Link href={data?.link} key={index}>
            <div className={styles.item}>
              {data?.text}
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Sidebar