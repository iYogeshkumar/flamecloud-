import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
} from "@chakra-ui/react";
import Subcategory from "./Subcategory";

const MainCategory = ({ catData, setactionData }) => {
  return (
    <Box>
      <Accordion defaultIndex={[0]} allowMultiple>
        {catData.map((item) => {
          return (
            <AccordionItem key={item.id} backgroundColor={"#F1F5F9"}>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    display={"flex"}
                    alignItems="center"
                  >
                    <Image src="/dragIcon.svg" />
                    <Box ml="4px"> {item.categoryName}</Box>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} backgroundColor="#FFFFFF">
                <Subcategory
                  key={item.id}
                  subCatData={item.subCategories}
                  actionData={catData}
                  setactionData={setactionData}
                />
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default MainCategory;
