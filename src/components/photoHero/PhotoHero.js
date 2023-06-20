"use client"
import Image from "next/image";
import styles from "./photohero.module.scss";
import { Permanent_Marker } from 'next/font/google'
import { Box, Skeleton } from "@mui/material";
import { useState } from "react";

const permanent_market = Permanent_Marker({ subsets: ["latin"], weight: "400" });


const PhotoHero = ({ title, image }) => {

  const [imageLoad, setImageLoad] = useState(true);

  return (
    <div className={styles.hero}>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Image
          src={image}
          width={1280}
          height={720}
          alt="Hero Image"
          className={styles.image}
          onLoad={() => setImageLoad(false)}
        />
        <h1 className={`${styles.title} ${permanent_market.className}`}>
          {title}
        </h1>
        {
          imageLoad ?
            <Skeleton animation="wave" variant="rectangular" width={1280} height={720} sx={{ position: "absolute", top: "0", left: "0" }} />
            :
            ""
        }
      </Box>
    </div>
  )
}

export default PhotoHero