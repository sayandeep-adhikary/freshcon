import React from "react";
import styles from "./FreshProducts.module.css";
import { Text, Image, HStack, Flex } from "@chakra-ui/react";
import treeLeaves from "../../images/2ndsectioncoconutimage.png";
import brokenCoconut from "../../images/brokenCoconut.png";
import imageText from "../../images/imageText.png";
import fresh from "../../images/fresh.png";
import nopreservative from "../../images/nopreservatives.png";
import carbon from "../../images/carbon.png";
import snow from "../../images/snow.png";
import vegan from "../../images/vegan.png";
import lifeinsurance from "../../images/lifeinsurance.png";

export default function FreshProducts() {
  return (
    <div className={`container ${styles.container} mt-5`}>
      <Image
        objectFit="cover"
        src={treeLeaves}
        alt="coconut tree"
        className={styles.CoconutTreeImg}
      />
      <div className="row">
        <div className="col-12">
          <Text fontSize={"2rem"} maxW={"41rem"}>
            Fresh products in frozen form to save time & make cooking convenient
            and easy.
          </Text>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-lg-6 order-sm-1">
              <div
                className={`d-flex justify-content-center ${styles.productContainer}`}
              >
                <Text fontSize={"1.2rem"} className={styles.comment}>
                  The C in Cooking stand for Convenience with{" "}
                  <span className={styles.freshcon}>Freshcon</span>
                </Text>
                <Text fontSize={"1.2rem"} className={`my-5`}>
                  Enjoy Real Coconuts without hassle!
                </Text>
                <Flex flexDirection={'column'} alignItems={'space-between'} justifyContent={'center'}>
                <HStack gap={20} mb={10} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={3}>
                    <Image src={fresh} alt="fresh" />
                    <Text mb={0}>100% Natural</Text>
                  </Flex>
                  <Flex alignItems={"center"} gap={3}>
                    <Image src={nopreservative} alt="fresh" />
                    <Text mb={0} mr={10}>No Added <br />Preservatives</Text>
                  </Flex>
                </HStack>
                <HStack gap={20} mb={10} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={3}>
                    <Image src={carbon} alt="fresh" />
                    <Text mb={0}>
                      Rich in Dietary <br /> Fibers & Nutrients
                    </Text>
                  </Flex>
                  <Flex alignItems={"center"} gap={3}>
                    <Image src={snow} alt="fresh" />
                    <Text mb={0}>Frozen when Fresh</Text>
                  </Flex>
                </HStack>
                <HStack gap={20} mb={10} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={3}>
                    <Image src={vegan} alt="fresh" mx={2}/>
                    <Text mb={0}>Vegan & Gluten Free</Text>
                  </Flex>
                  <Flex alignItems={"center"} gap={3}>
                    <Image src={lifeinsurance} alt="fresh" />
                    <Text mb={0} mr={4}>Longer Shelf Life</Text>
                  </Flex>
                </HStack>
                </Flex>
              </div>
            </div>
            <div className="col-12 col-lg-6 order-sm-2 my-4">
              <Image
                objectFit="cover"
                src={brokenCoconut}
                alt="brokenCoconut"
                className={styles.brokenCoconut}
                // style={{ zIndex: 0, scale: "1.2" }}
                // pos={"absolute"}
              />
              <Image
                objectFit="cover"
                src={imageText}
                alt="brokenCoconut"
                className={styles.imageText}
                style={{ zIndex: 201 }}
                width={'50%'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
