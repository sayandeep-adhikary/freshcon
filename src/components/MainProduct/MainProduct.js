import React from "react";
import styles from "./MainProduct.module.css";
import { Text, Container, Image } from "@chakra-ui/react";
import mainProduct from "../../images/mainProduct.png";
import sand1 from "../../images/sand1.png";
// import { Image, Text } from "@chakra-ui/react";
// import sand2 from "../../images/sand2.png";
// import rectangleBackground from "../../images/Rectangle_bg.png";
import arrow1 from "../../images/Vector1.png";
import arrow2 from "../../images/Vector2.png";
import arrow3 from "../../images/Vector3.png";
import arrow4 from "../../images/Vector4.png";
import arrow5 from "../../images/Vector5.png";
import circle1 from "../../images/circle1.png";
import circle2 from "../../images/circle2.png";
import circle3 from "../../images/circle3.png";
import circle4 from "../../images/circle4.png";
import circle5 from "../../images/circle5.png";

export default function MainProduct() {
  return (
    <div className={styles.mainProductContainer}>
      <Text
        color={"white"}
        textAlign={"center"}
        className={`${styles.headingText}`}
      >
        Freshcon Shredded Coconut stands out with the these USPs:
      </Text>

      <Container>
        <Image
          src={mainProduct}
          alt="product"
          className={`${styles.productImg}`}
        />
      </Container>
      <Image src={sand1} alt="sand" className={styles.sand1} />
      {/* <div className="container">
        <div className="mainContent1">
          <div className={`${styles.content1}`}>
            <Image src={arrow3} alt="arrow" className={styles.arrow1} />
            <Image src={circle1} alt="circle" className={styles.circle1} />
            <Text
              textAlign="center"
              mb={0}
              color={"white"}
              className={styles.text1}
            >
              Convenient & <br /> Ready to Use
            </Text>
          </div>
        </div>
        <div className="mainContent2">
          <div className={`${styles.content2}`}>
            <Image src={arrow1} alt="arrow" className={styles.arrow2} />
            <Image src={circle2} alt="circle" className={styles.circle2} />
            <Text
              textAlign={"center"}
              mb={0}
              color={"white"}
              className={styles.text2}
            >
              No Additive Flavouring <br /> or Preservatives
            </Text>
          </div>
        </div>
        <div className="mainContent3">
          <div className={`${styles.content3}`}>
            <Image src={arrow2} alt="arrow" className={styles.arrow3} />
            <Image src={circle3} alt="circle" className={styles.circle3} />
            <Text
              textAlign={"center"}
              mb={0}
              color={"white"}
              className={styles.text3}
            >
              Safe & Hygienically <br /> Produced
            </Text>
          </div>
        </div>
        <div className="mainContent4">
          <div className={`${styles.content4}`}>
            <Image src={arrow4} alt="arrow" className={styles.arrow4} />
            <Image src={circle4} alt="circle" className={styles.circle4} />
            <Text
              textAlign={"center"}
              mb={0}
              color={"white"}
              className={styles.text4}
            >
              100% Natural Goodness of <br /> Coconut
            </Text>
          </div>
        </div>
        <div className="mainContent5">
          <div className={`${styles.content5}`}>
            <Image src={arrow5} alt="arrow" className={styles.arrow5} />
            <Image src={circle5} alt="circle" className={styles.circle5} />
            <Text
              textAlign={"center"}
              mb={0}
              color={"white"}
              className={styles.text5}
            >
              Year Round Consistent Quality
            </Text>
          </div>
        </div>
      </div> */}
    </div>
  );
}
