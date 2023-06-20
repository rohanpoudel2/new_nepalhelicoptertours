"use client"
import styles from "./swiperhero.module.scss";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Skeleton } from "@mui/material";

import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image";
import { useState } from "react";

const SwiperHero = ({ images }) => {

  const [image, setImage] = useState(true);

  return (
    <div className={styles.swiperHero}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        style={{
          "--swiper-navigation-color": "orangered",
          "--swiper-pagination-color": "orangered"
        }}
      >
        {images.map((data, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ width: "100%", height: "100%" }}>
              <Image
                src={data.hero_image.url}
                alt="Hero Image"
                className={styles.image}
                width={1920}
                height={1080}
                onLoad={() => setImage(false)}
              />
              {
                image ?
                  <Skeleton animation="wave" variant="rectangular" width={1920} height={1080} sx={{ position: "absolute", top: "0", left: "0" }} />
                  :
                  ""
              }
            </Box>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SwiperHero