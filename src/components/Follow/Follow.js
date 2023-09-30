import React from "react";
import styles from "./Follow.module.css";
import { Text, Image } from "@chakra-ui/react";
import line from "../../images/followLine.png";
import coconutTree from "../../images/followImg.png";
import coconut from "../../images/coconut.png";
import followCircle from "../../images/followCircle.png";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Follow() {
  return (
    <div className={`${styles.followContainer} pt-5`}>
      <div>
        <Text
          style={{ fontFamily: "'Dancing Script', cursive" }}
          color={"white"}
          fontSize={"1.6rem"}
          mb={0}
          ml={40}
          textAlign={"center"}
          className={styles.mainText}
        >
          Take a Break from Breaking Coconuts! <br /> Stalk us & you might hit
          treasure!
        </Text>
        <Image
          pl={40}
          src={line}
          alt="line"
          style={{ margin: "1rem auto" }}
          className={styles.line}
        />
      </div>
      <Image
        src={coconutTree}
        alt="line"
        style={{ margin: "5rem auto" }}
        className={styles.coconutImg}
      />
      <div className={`container`}>
        <div className="row">
          <div
            className={`col-sm-12 col-lg-6 order-2 order-lg-1 d-flex- justify-content-center  ${styles.container}`}
          ></div>
          <div
            className={`col-sm-12 col-lg-6 order-1 order-lg-2 text-white d-flex flex-column align-items-center justify-content-center my-5 ${styles.textContainer}`}
          >
            <div className={styles.text}>Follow us on Instagram</div>
            <div
              className={`container d-flex justify-content-center align-items-center ${styles.text2}`}
            >
              <AiOutlineInstagram style={{ margin: "0 5px" }} /> freshconindia
            </div>
            <Image
              src={followCircle}
              alt="circle"
              className={styles.followCircle}
            />
            <Image src={coconut} alt="coconut" className={styles.coconut} />
          </div>
        </div>
      </div>
    </div>
  );
}
