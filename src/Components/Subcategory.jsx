import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Button,
  Image,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import Pointer from "./Pointer";
import Modalpart from "./Modalpart";
import { v4 as uuidv4 } from "uuid";

const Subcategory = ({ subCatData, actionData, setactionData }) => {
  const [currentSubCat, setCurrentSubCat] = useState();
  const [pointerPopup, setPointerPopup] = useState(false);
  uuidv4();
  const addPointer = (value) => {
    currentSubCat.pointers.push({ id: uuidv4(), pointerName: value });
    setactionData([...actionData]);
    setPointerPopup(false);
    setCurrentSubCat(null);
  };
  return (
    <Box>
      <Accordion allowMultiple>
        {subCatData.map((subCat) => (
          <AccordionItem key={subCat.id} backgroundColor="#FFFFFF">
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                    <Box
                      flex="1"
                      textAlign="left"
                      marginLeft={"15px"}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <Image src="/dragIcon.svg" />
                      <Box ml="4px"> {subCat.subCategoryName}</Box>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Pointer
                    key={subCat.id}
                    pointerData={subCat.pointers}
                    actionData={actionData}
                    setactionData={setactionData}
                  />
                  <Button
                    colorScheme="messenger"
                    variant="outline"
                    margin={"0 10px"}
                    onClick={() => {
                      setCurrentSubCat(subCat);
                      setPointerPopup(true);
                    }}
                  >
                    <AddIcon fontSize="12px" mr={"5px"} />
                    Add Pointer
                  </Button>
                  <Modalpart
                    isOpen={pointerPopup}
                    onClose={() => setPointerPopup(false)}
                    handleCreate={addPointer}
                    title="Pointer Name"
                    placeholder={"Name Pointer"}
                  />
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default Subcategory;
