import React from "react";
import styles from "./MainProduct.module.css";
import { Image, Text } from "@chakra-ui/react";
import sand1 from "../../images/sand1.png";
import sand2 from "../../images/sand2.png";
import rectangleBackground from "../../images/Rectangle 21.png";
import mainProduct from "../../images/mainProduct.png";
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
      <Image src={rectangleBackground} alt="rectangle background" />
      <Image src={sand1} alt="sand" className={styles.sand1} />
      <Image src={sand2} alt="sand" className={styles.sand2} />
      <Image src={arrow1} alt="sand" className={styles.arrow1} />
      <Image src={arrow2} alt="sand" className={styles.arrow2} />
      <Image src={arrow3} alt="sand" className={styles.arrow3} />
      <Image src={arrow4} alt="sand" className={styles.arrow4} />
      <Image src={arrow5} alt="sand" className={styles.arrow5} />
      <Image src={circle1} alt="sand" className={styles.circle1} />
      <Image src={circle2} alt="sand" className={styles.circle2} />
      <Image src={circle3} alt="sand" className={styles.circle3} />
      <Image src={circle4} alt="sand" className={styles.circle4} />
      <Image src={circle5} alt="sand" className={styles.circle5} />
      <Image src={mainProduct} alt="product" className={styles.product} />
      <Text className={styles.text}>
        Freshcon Shredded Coconut stands out with the these USPs:
      </Text>
      <Text className={styles.text5}>Year Round <br /> Consistent Quality</Text>
      <Text className={styles.text2}>
        No Additive Flavouring <br /> or Preservatives
      </Text>
      <Text className={styles.text3}>Safe & Hygienically <br /> Produced </Text>
      <Text className={styles.text1}>Convenient & <br /> Ready to Use</Text>
      <Text className={styles.text4}>100% Natural Goodness <br /> of Coconut</Text>
    </div>
  );
}
