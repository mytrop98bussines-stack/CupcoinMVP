import React from 'react';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { HSeparator } from 'components/separator/Separator';

export default function SidebarBrand() {
	// Color principal que se adapta al modo oscuro/claro
	let logoColor = useColorModeValue('navy.700', 'white');
	let coinColor = '#F7931A'; // El naranja característico de Bitcoin para la "C"

	return (
		<Flex align='center' direction='column'>
			<Flex align='center' gap='0px' mb='20px'>
				{/* Símbolo de la moneda: Una C robusta estilo Token */}
				<Box 
					display='flex' 
					alignItems='center' 
					justifyContent='center'
					border={`3px solid ${coinColor}`} 
					borderRadius='50%' 
					w='35px' 
					h='35px' 
					me='10px'>
					<Text
						fontSize='22px'
						fontWeight='900'
						lineHeight='1'
						color={coinColor}
						fontFamily='mono'>
						C
					</Text>
				</Box>

				{/* Texto CUPcoin limpio */}
				<Text
					fontSize='26px'
					fontWeight='800'
					color={logoColor}
					letterSpacing='-1px'>
					CUP
				</Text>
				<Text
					fontSize='26px'
					fontWeight='300'
					color={logoColor}>
					coin
				</Text>
			</Flex>
			<HSeparator mb='20px' />
		</Flex>
	);
}
