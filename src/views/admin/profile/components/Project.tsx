// Chakra imports
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import { MdCreditCard } from "react-icons/md";

export default function Project(props: {
  title: string;
  ranking: string;
  [x: string]: any;
}) {
  const { title, ranking, ...rest } = props;
  // Colores
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const brandColor = "#422AFB";
  const bgCard = useColorModeValue("white", "navy.700");

  return (
    <Card bg={bgCard} {...rest} p='15px' mb='15px'>
      <Flex align='center'>
        {/* Icono de Tarjeta Estilo Minimalista */}
        <Box
          h='45px'
          w='45px'
          display='flex'
          alignItems='center'
          justifyContent='center'
          borderRadius='12px'
          bg='linear-gradient(135deg, #422AFB 0%, #1B0E75 100%)'
          me='16px'>
          <Icon as={MdCreditCard} color='white' h='24px' w='24px' />
        </Box>
        <Flex direction='column'>
          <Text color={textColorPrimary} fontWeight='bold' fontSize='md'>
            {title}
          </Text>
          <Text color='secondaryGray.600' fontSize='sm' fontWeight='400'>
            {ranking}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
