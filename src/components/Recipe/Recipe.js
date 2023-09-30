import React from "react";
import styles from "./Recipe.module.css";
import { Text } from "@chakra-ui/react";
import chutney from "../../images/chutney.png";
import laddoo from "../../images/laddoo.png";
import cooler from "../../images/cooler.png";
import { BsArrowRight } from "react-icons/bs";

export default function Recipe() {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.recipeContainer}`}>
        <Text
          fontSize={"2rem"}
          color={"black"}
          textAlign={"center"}
          pt={"3rem"}
          pb={"1rem"}
          mb={0}
        >
          Recipes
        </Text>
        <Text
          fontSize={"1.4rem"}
          color={"#158543"}
          textAlign={"center"}
          mb={0}
          px={"10px"}
        >
          Dig in to taste the real coconuts Cook the way you want! <br />
          <span style={{ textDecoration: "underline" }}>Blend</span> |{" "}
          <span style={{ textDecoration: "underline" }}>Garnish</span> |{" "}
          <span style={{ textDecoration: "underline" }}>Bake</span>
        </Text>
        <div className="container">
          <div className="row py-5">
            <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
              <div
                className="card my-5"
                style={{
                  width: "17rem",
                  height: "23rem",
                  borderRadius: "60px",
                  backgroundColor: "white",
                  border: "2px solid #ECC9B5",
                }}
              >
                <img src={chutney} class="card-img-top" alt="chutney"></img>
                <div
                  className={`card-body mt-5 ${styles.cardBox} d-flex flex-column align-items-center justify-content-end`}
                >
                  <Text color={"black"} textAlign={"center"} cursor={"pointer"}>
                    Coconut Chutney
                    <BsArrowRight style={{ margin: "5px auto" }} size={20} />
                  </Text>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
              <div
                className="card my-5"
                style={{
                  width: "17rem",
                  height: "23rem",
                  borderRadius: "60px",
                  backgroundColor: "white",
                  border: "2px solid #ECC9B5",
                }}
              >
                <img src={laddoo} class="card-img-top" alt="chutney"></img>
                <div
                  className={`card-body mt-5 ${styles.cardBox} d-flex flex-column align-items-center justify-content-end`}
                >
                  <Text color={"black"} textAlign={"center"} cursor={"pointer"}>
                    Coconut Laddoo
                    <BsArrowRight style={{ margin: "5px auto" }} size={20} />
                  </Text>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4 d-flex align-items-center justify-content-center">
              <div
                className="card my-5"
                style={{
                  width: "17rem",
                  height: "23rem",
                  borderRadius: "60px",
                  backgroundColor: "white",
                  border: "2px solid #ECC9B5",
                }}
              >
                <img src={cooler} class="card-img-top" alt="chutney"></img>
                <div
                  className={`card-body mt-5 ${styles.cardBox} d-flex flex-column align-items-center justify-content-end`}
                >
                  <Text color={"black"} textAlign={"center"} cursor={"pointer"}>
                    Frosty Coco Cooler
                    <BsArrowRight style={{ margin: "5px auto" }} size={20} />
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
