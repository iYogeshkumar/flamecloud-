import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Heading,
} from "@chakra-ui/react";

const ManageAccess = ({
  title,
  onClose,
  handleCreate,
  isDelete,
  isOpen,
  placeholder,
}) => {
  const [accessdata, setaccessdata] = useState("");
  const handleChange = (event) => setaccessdata(event.target.data);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx={"8px"}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading as="h3" color="teal" size="sm">
              Sales
            </Heading>
            <Input
              mt={"5px"}
              data={accessdata}
              onChange={handleChange}
              placeholder={placeholder}
            />
            <Heading as="h3" color="teal" size="sm">
              Marketing
            </Heading>
            <Input
              mt={"5px"}
              data={accessdata}
              onChange={handleChange}
              placeholder={placeholder}
            />
            <Heading as="h3" size="sm" color="teal">
              Design
            </Heading>
            <Input
              mt={"5px"}
              data={accessdata}
              onChange={handleChange}
              placeholder={placeholder}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ManageAccess;
