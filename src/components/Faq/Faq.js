import React from "react";
import styles from "./Faq.module.css";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

export default function Faq() {
  return (
    <div className={`${styles.faqContainer} py-5 text-center`}>
      <Text fontSize={"1.7rem"} py={10}>
        Freqently Asked Questions
      </Text>
      <Container>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton className={`${styles.accordionButton} my-2`}>
                <Box as="span" flex="1" textAlign="left">
                  How should I thaw Freshcon shredded coconut?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton className={`${styles.accordionButton} my-2`}>
                <Box as="span" flex="1" textAlign="left">
                  Can I use frozen shredded coconut directly in my recipes
                  without thawing?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton className={`${styles.accordionButton} my-2`}>
                <Box as="span" flex="1" textAlign="left">
                  How long can I store the Freshcon shredded coconut in the
                  freezer?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton className={`${styles.accordionButton} my-2`}>
                <Box as="span" flex="1" textAlign="left">
                  Can I use Freshcon shredded coconut in both sweet and savoury
                  recipes?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className={`${styles.accordionItem} my-2`}>
            <h2>
              <AccordionButton
                className={`${styles.accordionButton} my-2`}
                // bg={"rgba(33, 153, 83, 0.2)"}
              >
                <Box as="span" flex="1" textAlign="left">
                  Are there any tips for preventing clumping or moisture-related
                  issues with frozen shredded coconut?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </div>
  );
}
