import React from "react";
import styles from "./Product.module.css";
import { Box, Image, Text, HStack } from "@chakra-ui/react";
import productCoconutTree from "../../images/productCoconutTree.png";

export default function Products() {
  return (
    <Box py={'3rem'} bg={"#D8BAA0"} style={{fontFamily: "'Varela Round', sans-serif"}}>
      <Image
        src={productCoconutTree}
        alt=""
        className={styles.productsCoconutTree}
      />
      <Text textAlign={'center'} px={'14rem'} fontWeight={500} mt={'4rem'}>
        Frozen Shredded Coconut is our flagship product and is currently
        thriving in the market. However, we aspire to takeover the frozen food
        market and have these items in line which shall join the brand wagon
        soon :
      </Text>
      <HStack justifyContent={'center'} my={10}>
        <button className={`${styles.button}`}>Precooked Kabuli chana</button>
        <button className={`${styles.button}`}>Precooked Rajma</button>
        <button className={`${styles.button}`}>Ginger Garlic Cubes</button>
        <button className={`${styles.button}`}>Smoothies</button>
      </HStack>
      <Text textAlign={'center'} px={'10rem'} fontWeight={500}>
        and a few more!
      </Text>
    </Box>
  );
}
