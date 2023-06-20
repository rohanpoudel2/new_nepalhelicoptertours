"use client"
import Image from "next/image";
import styles from "./navbar.module.scss";
import Logo from "@/../public/images/logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (width > 768) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [width])

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            className={styles.image}
          />
        </Link>
      </div>
      <div className={styles.openbtn} onClick={() => setOpen(true)}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className={`${styles.navitems}`} style={open ? { display: "flex" } : { display: "none" }}>
        <div className={styles.closebtn} onClick={() => setOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <Link href="/" onClick={width > 768 ? "" : () => setOpen(false)}>
          <div className={styles.navitem}>
            Home
          </div>
        </Link>
        <Link href="/helicopter-tours" onClick={width > 768 ? "" : () => setOpen(false)}>
          <div className={styles.navitem}>
            Helicopter Tours
          </div>
        </Link>
        <Link href="/custom-helicopter-package" onClick={width > 768 ? "" : () => setOpen(false)}>
          <div className={styles.navitem}>
            Custom Packages
          </div>
        </Link>
        <Link href="https://wa.link/1nohk5" onClick={width > 768 ? "" : () => setOpen(false)} target="_blank">
          <div className={styles.navitem}>
            <i className="fa-brands fa-whatsapp"></i>
            Chat with Us
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar