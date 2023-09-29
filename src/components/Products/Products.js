import React from "react";
import styles from "./Products.module.css";
import { Box, Image, Text } from "@chakra-ui/react";
import productCoconutTree from "../../images/productCoconutTree.png";

export default function Products() {
  return (
    <Box
      py={"3rem"}
      bg={"#D8BAA0"}
      style={{ fontFamily: "'Varela Round', sans-serif" }}
    >
      <Image
        src={productCoconutTree}
        alt=""
        className={styles.productsCoconutTree}
      />
      <Text textAlign={"center"} px={9} fontWeight={500} mt={20} className={styles.productText}>
        Frozen Shredded Coconut is our flagship product and is currently
        thriving in the market. However, we aspire to takeover the frozen food
        market and have these items in line which shall join the brand wagon
        soon :
      </Text>
      <div className="container my-5">
        <div className="row">
          <div className="col col-sm-12 col-lg-3 my-2 text-center">
            <button className={`${styles.button}`}>
              Precooked Kabuli chana
            </button>
          </div>
          <div className="col col-sm-12 col-lg-3 my-2 text-center">
            <button className={`${styles.button}`}>Precooked Rajma</button>
          </div>
          <div className="col col-sm-12 col-lg-3 my-2 text-center">
            <button className={`${styles.button}`}>Ginger Garlic Cubes</button>
          </div>
          <div className="col col-sm-12 col-lg-3 my-2 text-center">
            <button className={`${styles.button}`}>Smoothies</button>
          </div>
        </div>
      </div>
      {/* <HStack justifyContent={"center"} my={10}></HStack> */}
      <Text textAlign={"center"} px={9} my={5} fontWeight={500}>
        and a few more!
      </Text>
    </Box>
  );
}
