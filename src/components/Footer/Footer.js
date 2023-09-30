import { Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../images/Freshcon LOGO.png";
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top" style={{backgroundColor: '#FFF3EC'}}>
      <div className={`col-md-4 col-sm-12 d-flex flex-column align-items-start ${styles.container}`}>
        <a
          href="#nav"
          className="my-5 mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 d-flex justify-content-center"
        >
          <Image src={logo} width={"70%"} />
        </a>
        <Text mt={5} style={{fontFamily: "'Varela Round', sans-serif"}} className={styles.text}>
          The frozen shredded coconut is packed fresh and is kept frozen. It is
          packaged with care to ensure freshness and prevent freezer burn. Each
          package is labelled with clear instructions for proper storage and
          preparation, facilitating ease of use.It is stowed in two SKUs of
          100gm and 200gm packs.
        </Text>
      </div>
    </footer>
  );
}
