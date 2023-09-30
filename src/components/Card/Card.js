import React from "react";
import styles from "./Card.module.css";
import { Image, Text } from "@chakra-ui/react";
import sand from "../../images/sand2.png";
import factory from "../../images/factory.png";
import sustainable from "../../images/sustainable.png";
import EllipseImg from "../../images/EllipseImg.png";

export default function Card() {
  return (
    <div className={`${styles.cardContainer} py-5`}>
      <Image src={sand} className={styles.sandImg}></Image>
      <Text
        fontSize={"2rem"}
        color={"white"}
        className={styles.mainText}
        textAlign={"center"}
      >
        Source & Process
      </Text>
      <Text
        fontSize={"1rem"}
        color={"white"}
        className={styles.text1}
        textAlign={"center"}
        mb={0}
      >
        Finest Quality coconuts sourced from Kerala - the Land of Coconuts.
      </Text>
      <div className="container text-white">
        <div className="row mt-5">
          <div
            className={`col-sm-12 col-lg-6 d-flex align-items-center justify-content-center my-4 ${styles.container}`}
          >
            <Image src={factory} className={styles.factory} />
            <Image src={EllipseImg} className={styles.ellipse} width={100}/>
            <div
              className="card my-5"
              style={{
                width: "25rem",
                height: "25rem",
                borderRadius: "30px",
                backgroundColor: "#FFF3EC",
              }}
            >
              <div className={`card-body my-5 ${styles.cardBox}`}>
                <Text
                  textDecoration={"underline"}
                  color={"black"}
                  textAlign={"center"}
                >
                  Manufacturing
                </Text>
                <p className="card-text text-dark text-center">
                  Freshcon Shredded Coconut is produced in a Food Safety
                  certified Plant. The high-quality sourced coconuts are first
                  hygienically shredded through automated machines and then are
                  quickly frozen when fresh to retain the essential nutrients
                  present.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`col-sm-12 col-lg-6 d-flex align-items-center justify-content-center my-4 ${styles.container}`}
          >
            <Image src={sustainable} className={styles.sustainable} />
            <Image src={EllipseImg} className={styles.ellipse} width={100}/>
            <div
              className="card my-5"
              style={{
                width: "25rem",
                height: "25rem",
                borderRadius: "30px",
                backgroundColor: "#FFF3EC",
              }}
            >
              <div className={`card-body my-5 ${styles.cardBox}`}>
                <Text
                  textDecoration={"underline"}
                  color={"black"}
                  textAlign={"center"}
                >
                  Packaging
                </Text>
                <p className="card-text text-dark text-center">
                  The frozen shredded coconut is packed fresh and is kept
                  frozen. It is packaged with care to ensure freshness and
                  prevent freezer burn. Each package is labelled with clear
                  instructions for proper storage and preparation, facilitating
                  ease of use.It is stowed in two SKUs of 100gm and 200gm packs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
