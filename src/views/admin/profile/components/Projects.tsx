// Chakra imports
import { Text, useColorModeValue, Flex, Icon } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import Project from "views/admin/profile/components/Project";
// Assets
import { MdCreditCard, MdAdd } from "react-icons/md";
import banner from "assets/img/auth/banner.png";

export default function Projects() {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const brandColor = "#422AFB";

  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} p='20px'>
      <Flex justifyContent='space-between' alignItems='center' mb='20px'>
        <Text color={textColorPrimary} fontWeight='bold' fontSize='2xl'>
          Tarjetas Guardadas
        </Text>
        <Flex 
            align='center' 
            cursor='pointer' 
            color={brandColor} 
            fontWeight='700'>
          <Icon as={MdAdd} me='4px' />
          <Text fontSize='sm'>Añadir Tarjeta</Text>
        </Flex>
      </Flex>
      
      <Project
        boxShadow='0px 18px 40px rgba(112, 144, 176, 0.12)'
        image={banner}
        ranking='Tarjeta BANMET'
        link='#'
        title='9225 **** **** 1234'
      />
      <Project
        boxShadow='0px 18px 40px rgba(112, 144, 176, 0.12)'
        image={banner}
        ranking='Tarjeta BANDEC'
        link='#'
        title='9205 **** **** 5678'
      />
      <Project
        boxShadow='0px 18px 40px rgba(112, 144, 176, 0.12)'
        image={banner}
        ranking='Tarjeta BPA'
        link='#'
        title='9210 **** **** 9012'
      />
    </Card>
  );
}
