import React, { useState } from "react";
import MainCategory from "./MainCategory";
import { Box, Button, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { BsPeople } from "react-icons/bs";
import Modalpart from "./Modalpart";
import { v4 as uuidv4 } from "uuid";
import ManageAccess from "./ManageAccess";

const ActionPlan = () => {
  const [displayData, setdisplayData] = useState(false);
  const [manage, setmanage] = useState(false);

  const [actionData, setactionData] = useState([
    {
      id: 1,
      categoryName: "Marketing",
      subCategories: [
        {
          id: 1,
          subCategoryName: "Wordpress",
          pointers: [
            { id: 1, pointerName: "Pointer1" },
            { id: 2, pointerName: "Pointer2" },
          ],
        },
        { id: 2, subCategoryName: "Google Drive", pointers: [] },
      ],
    },
    {
      id: 2,
      categoryName: "Design",
      subCategories: [
        { id: 1, subCategoryName: "Wordpress", pointers: [] },
        { id: 2, subCategoryName: "Google Drive", pointers: [] },
      ],
    },
    {
      id: 3,
      categoryName: "Sales",
      subCategories: [
        { id: 1, subCategoryName: "Wordpress", pointers: [] },
        { id: 2, subCategoryName: "Google Drive", pointers: [] },
      ],
    },
  ]);

  const addMaincategory = (value) => {
    const dataplans = actionData.map((plan) => {
      plan.subCategories.push({
        id: uuidv4(),
        subCategoryName: value,
        pointers: [],
      });
      return plan;
    });
    setactionData([...dataplans]);
    setdisplayData(false);
  };
  return (
    <Box p="5%">
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        marginBottom="28px"
      >
        <Text textAlign={"left"} fontSize="32px" fontWeight={"700"}>
          Action Plans
        </Text>
        <Box>
          <Button
            colorScheme="messenger"
            variant="outline"
            marginRight={"10px"}
            onClick={() => {
              setmanage(true);
            }}
          >
            <Icon as={BsPeople} w="5" h="5" mr={"5px"} /> Manage Access
          </Button>
          <Button colorScheme="messenger" onClick={() => setdisplayData(true)}>
            <AddIcon fontSize="12px" mr={"5px"} /> New Plan
          </Button>
          <Modalpart
            isOpen={displayData}
            onClose={() => setdisplayData(false)}
            handleCreate={addMaincategory}
            title="Plan Name"
            placeholder={"Name Your Plan"}
          />
        </Box>
      </Box>
      <MainCategory
        key={actionData.id}
        catData={actionData}
        setactionData={setactionData}
      />
      <ManageAccess
        isOpen={manage}
        onClose={() => setmanage(false)}
        title="SOP Access"
        placeholder={"Select Members"}
      />
    </Box>
  );
};

export default ActionPlan;
