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

export default function SelectInmuebleTipo({ value, onChange }) {
  const inmuebles_tipos = {
    error: false,
    mensaje: "Lista de tipos de inmuebles registrados",
    inmuebles_tipos: [
      {
        id: "1",
        tipo: "Casa",
      },
      {
        id: "2",
        tipo: "Terreno Residencial",
      },
      {
        id: "3",
        tipo: "Terreno Comercial",
      },
      {
        id: "4",
        tipo: "Departamento",
      },
      {
        id: "5",
        tipo: "Desarrollo",
      },
      {
        id: "6",
        tipo: "Local Comercial",
      },
      {
        id: "7",
        tipo: "Nave Industrial",
      },
      {
        id: "8",
        tipo: "Terreno Agricola",
      },
    ],
  };

  const [selectedInmueble, setSelectedInmueble] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [inmueblesTiposData, setInmueblesTiposData] = useState(inmuebles_tipos);

  useEffect(() => {
    if (value) {
      const tipoInmueble = inmueblesTiposData?.inmuebles_tipos?.find(
        (tipo) => tipo.id === value
      );
      setSelectedInmueble(tipoInmueble ? tipoInmueble.tipo : "");
    } else {
      setSelectedInmueble("");
    }
  }, [value]);
  return (
    <Box w={{ base: "full", lg: "max-content" }}>
      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <MenuButton
          as={Button}
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
          onClick={() => setIsOpen(!isOpen)}
          rightIcon={isOpen ? <FaChevronUp /> : <FaChevronDown />}
        >
          <span className="text-black font-gilmerBold">
            {selectedInmueble ? selectedInmueble : "Tipo de Inmueble"}
          </span>
        </MenuButton>
        <MenuList
          fontSize="sm"
          shadow="md"
          rounded="lg"
          maxW={{ md: "230px" }}
          w="full"
          zIndex={50}
        >
          {inmueblesTiposData?.inmuebles_tipos?.map((tipo) => (
            <MenuItem
              key={tipo.id}
              // onClick={() => {
              //   setSelectedInmueble(tipo.tipo);
              //   setTipoInmuebleFilter({
              //     tipo: { id: tipo.id, name: tipo.tipo },
              //   });
              //   setIsOpen(false);
              // }}
              onClick={() => {
                onChange(tipo.id);
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
              {tipo.tipo}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}
