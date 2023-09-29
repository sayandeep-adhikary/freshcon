import React from "react";
import styles from "./hero.module.css";
import Navbar from "../Navbar/Navbar";
import treeLeaves from "../../images/treeLeaves.png";
import heroImage from "../../images/heroImage.png";
import {
  // SimpleGrid,
  // GridItem,
  Text,
  // Heading,
  // VStack,
  Image,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <div className={`${styles.heroContainer}`}>
      <Navbar />
      <Image
        objectFit="cover"
        src={treeLeaves}
        alt="coconut tree"
        className={styles.heroCoconutImg}
      />
      <div className={`container ${styles.heroHeaderContainer}`}>
        <div className="row">
          <div
            className={`col-12 col-lg-6 order-sm-1 text-white ${styles.heroHeadingText} d-flex justify-content-center`}
          >
            <Text fontSize={"3rem"}>Amplify the taste of your dishes!</Text>
            <Text fontSize={"1.5rem"}>Garnish | Bake | Grind | Cook</Text>
          </div>
          <div className="col-12 col-lg-6 order-sm-2 px-0">
            <img
              src={heroImage}
              alt="main product"
              className={`img-fluid ${styles.heroImage}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
