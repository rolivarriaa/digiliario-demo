import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  HStack,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function DropdownPrecios({
  precioMin,
  precioMax,
  onChangePrecioMin,
  onChangePrecioMax,
  moneda,
  onChangeMoneda,
}) {
  const [selectPrecio, setSelectedPrecio] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMoneda, setSelectedMoneda] = useState(moneda || "MXN");

  const formatCurrency = (value) => {
    if (!value) return "";
    return new Intl.NumberFormat("es-MX").format(value);
  };

  const handleMinChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    if (!isNaN(value) || value === "") {
      onChangePrecioMin(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    if (!isNaN(value) || value === "") {
      onChangePrecioMax(value);
    }
  };

  const handleMonedaChange = (value) => {
    setSelectedMoneda(value);
    if (onChangeMoneda) {
      onChangeMoneda(value);
    }
  };

  // Actualizar el texto del botón cuando hay valores personalizados
  useEffect(() => {
    if (precioMin || precioMax) {
      const symbol = selectedMoneda === "USD" ? "USD" : "MXN";
      const minFormatted = precioMin
        ? `${formatCurrency(precioMin)} ${symbol}`
        : "";
      const maxFormatted = precioMax
        ? `${formatCurrency(precioMax)} ${symbol}`
        : "";

      if (minFormatted && maxFormatted) {
        setSelectedPrecio(`Desde $${minFormatted}  - Hasta $${maxFormatted}`);
      } else if (minFormatted) {
        setSelectedPrecio(`Desde $${minFormatted}`);
      } else if (maxFormatted) {
        setSelectedPrecio(`Hasta $${maxFormatted}`);
      }
    } else {
      setSelectedPrecio("");
    }
  }, [precioMin, precioMax, selectedMoneda]);

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
          minW={{ base: "full", md: "200px" }}
          onClick={() => setIsOpen(!isOpen)}
          rightIcon={isOpen ? <FaChevronUp /> : <FaChevronDown />}
        >
          <span className="text-black font-gilmerBold">
            {selectPrecio ? selectPrecio : "Presupuesto (Precio)"}
          </span>
        </MenuButton>
        <MenuList
          fontSize="sm"
          shadow="md"
          rounded="lg"
          maxW={{ md: "330px" }}
          w="full"
          zIndex={50}
        >
          {/* Radio Group para tipo de moneda */}

          {/* Inputs de precio personalizado */}
          <Box px={4}>
            <Text
              fontSize="sm"
              fontWeight="bold"
              mb={3}
              fontFamily="gilmerBold"
            >
              Precio personalizado
            </Text>
            <VStack spacing={3} align="stretch">
              <InputGroup size="sm">
                <InputLeftElement pointerEvents="none" color="gray.500">
                  {selectedMoneda === "USD" ? "$" : "$"}
                </InputLeftElement>
                <Input
                  placeholder="Precio mínimo"
                  value={formatCurrency(precioMin)}
                  onChange={handleMinChange}
                  rounded={"md"}
                  height={"36px"}
                  type="text"
                  fontSize="sm"
                  fontFamily="gilmerBold"
                  fontWeight="bold"
                />
              </InputGroup>
              <InputGroup size="sm">
                <InputLeftElement pointerEvents="none" color="gray.500">
                  {selectedMoneda === "USD" ? "$" : "$"}
                </InputLeftElement>
                <Input
                  placeholder="Precio máximo"
                  value={formatCurrency(precioMax)}
                  onChange={handleMaxChange}
                  rounded={"md"}
                  height={"36px"}
                  type="text"
                  fontSize="sm"
                  fontFamily="gilmerBold"
                  fontWeight="bold"
                />
              </InputGroup>
            </VStack>
          </Box>

          <Box px={4} pt={4} pb={2}>
            <Text
              fontSize="sm"
              fontWeight="bold"
              mb={2}
              fontFamily="gilmerBold"
            >
              Tipo de moneda
            </Text>
            <RadioGroup value={selectedMoneda} onChange={handleMonedaChange}>
              <HStack spacing={4}>
                <Radio value="MXN" colorScheme="red">
                  <p className="text-sm font-gilmerBold">MXN</p>
                </Radio>
                <Radio value="USD" colorScheme="red">
                  <p className="text-sm font-gilmerBold">USD</p>
                </Radio>
              </HStack>
            </RadioGroup>
          </Box>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default DropdownPrecios;
