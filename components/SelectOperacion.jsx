import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function SelectOperacion({ value, onChange }) {
  const operaciones = {
    inmuebles_operaciones: [
      {
        id: "1",
        operacion: "Venta",
      },
      {
        id: "2",
        operacion: "Renta",
      },
      {
        id: "3",
        operacion: "Preventa",
      },
      {
        id: "4",
        operacion: "Venta y/o Renta",
      },
    ],
  };

  const [inmueblesOperacionesData, setInmueblesOperacionesData] =
    useState(operaciones);
  const [selectOperacion, setSelectedOperacion] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (value) {
      const operacion = inmueblesOperacionesData?.inmuebles_operaciones?.find(
        (op) => op.id === value
      );
      setSelectedOperacion(operacion ? operacion.operacion : "");
    } else {
      setSelectedOperacion("");
    }
  }, [value]);

  return (
    <Box w={{ base: "full", lg: "max-content" }}>
      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <MenuButton
          as={Button}
          rightIcon={isOpen ? <FaChevronUp /> : <FaChevronDown />}
          onClick={() => setIsOpen(!isOpen)}
          border="2px"
          borderColor="gray.300"
          bg="white"
          color="black"
          rounded="lg"
          fontSize="sm"
          fontFamily="gilmerBold"
          fontWeight="bold"
          _hover={{ bg: "gray.50" }}
          _active={{ bg: "gray.100" }}
          w="full"
        >
          <p className="font-gilmerBold">
            {" "}
            {selectOperacion ? selectOperacion : "Tipo de Operación"}
          </p>
        </MenuButton>
        <MenuList
          fontSize="sm"
          shadow="md"
          rounded="lg"
          maxW={{ md: "230px" }}
          w="full"
          zIndex={50}
        >
          {inmueblesOperacionesData?.inmuebles_operaciones?.map((operacion) => (
            <MenuItem
              key={operacion.id}
              onClick={() => {
                onChange(operacion.id);
                setIsOpen(false);
              }}
              _hover={{
                bg: "gray.50",
                fontWeight: "bold",
                color: "red.500",
              }}
              fontFamily="gilmerBold"
              fontWeight="bold"
            >
              {operacion.operacion}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}
