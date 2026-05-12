import {
  Box,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Button,
  Text,
} from "@chakra-ui/react";
// Custom components
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import Card from "components/card/Card";
import {
  MdAttachMoney,
  MdShowChart,
  MdAccountBalanceWallet,
  MdSwapHoriz,
} from "react-icons/md";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Estadísticas de Mercado */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 3 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />}
            />
          }
          name='Precio USDT (P2P)'
          value='325.00 CUP'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={<Icon w='32px' h='32px' as={MdShowChart} color='green.500' />}
            />
          }
          name='Precio MLC'
          value='280.00 CUP'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #422AFB 0%, #1B0E75 100%)'
              icon={<Icon w='32px' h='32px' as={MdAccountBalanceWallet} color='white' />}
            />
          }
          name='Tu Saldo Aprox.'
          value='15,400.00 CUP'
        />
      </SimpleGrid>

      {/* Acciones Rápidas P2P */}
      <Card p='20px'>
        <Text color={textColor} fontSize='xl' fontWeight='700' mb='20px'>
          Operaciones Rápidas
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap='20px'>
          <Button
            leftIcon={<Icon as={MdSwapHoriz} />}
            variant='brand'
            py='25px'
            fontSize='lg'
            borderRadius='16px'>
            Comprar USDT
          </Button>
          <Button
            leftIcon={<Icon as={MdSwapHoriz} />}
            variant='outline'
            py='25px'
            fontSize='lg'
            borderRadius='16px'
            colorScheme='brand'>
            Vender USDT
          </Button>
        </SimpleGrid>
      </Card>      
      {/* Historial de Transacciones */}
      <Card mt='20px' p='20px'>
        <Text color={textColor} fontSize='xl' fontWeight='700' mb='20px'>
          Transacciones Recientes
        </Text>
        <Flex direction='column' w='100%'>
          <TransactionRow name='Compra USDT' date='Hoy, 10:30 AM' amount='- 3,250 CUP' status='Completado' />
          <TransactionRow name='Venta USDT' date='Ayer, 04:15 PM' amount='+ 6,500 CUP' status='Verificando' />
        </Flex>
      </Card>
    </Box>
  );
}
