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

export default function DropdownHabitaciones({ value, onChange }) {
  const inmueble_habitaciones = {
    error: false,
    mensaje: "Lista de tipos de habitaciones de inmuebles registradas",
    habitaciones: [
      {
        id: "1",
        habitaciones: "1 Habitación",
      },
      {
        id: "2",
        habitaciones: "2 Habitaciones",
      },
      {
        id: "3",
        habitaciones: "3 ó más Habitaciones",
      },
    ],
  };

  const [selectedHabitaciones, setSelectedHabitaciones] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [inmueblesHabitacionesData, setInmueblesHabitacionesData] = useState(
    inmueble_habitaciones
  );

  useEffect(() => {
    if (value) {
      const habitacion = inmueblesHabitacionesData.habitaciones.find(
        (hab) => hab.id === value
      );
      setSelectedHabitaciones(habitacion ? habitacion.habitaciones : "");
    } else {
      setSelectedHabitaciones("");
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
          minW="180px"
          onClick={() => setIsOpen(!isOpen)}
          rightIcon={isOpen ? <FaChevronUp /> : <FaChevronDown />}
        >
          <span className="text-black font-gilmerBold">
            {selectedHabitaciones ? selectedHabitaciones : "Habitaciones"}
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
          {inmueblesHabitacionesData?.habitaciones?.map((habitacion) => (
            <MenuItem
              key={habitacion.id}
              onClick={() => {
                onChange(habitacion.id);
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
              {habitacion.habitaciones}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}
