// chakra imports
import { Box, Flex, Stack } from '@chakra-ui/react';
// Custom components
import Brand from 'components/sidebar/components/Brand';
import Links from 'components/sidebar/components/Links';
// Eliminamos SidebarCard si no lo vas a usar para no ocupar espacio en pantalla móvil
// import SidebarCard from 'components/sidebar/components/SidebarCard';

// FUNCTIONS

function SidebarContent(props: { routes: RoutesType[] }) {
	const { routes } = props;
	// SIDEBAR
	return (
		<Flex direction='column' height='100%' pt='25px' borderRadius='30px'>
			<Brand />
			<Stack direction='column' mt='8px' mb='auto'>
				<Box ps='20px' pe={{ lg: '16px', '2xl': '16px' }}>
					<Links routes={routes} />
				</Box>
			</Stack>

			{/* He comentado la SidebarCard para darte más espacio para los links del P2P */}
			{/* 
			<Box ps='20px' pe={{ lg: '16px', '2xl': '20px' }} mt='60px' mb='40px' borderRadius='30px'>
				<SidebarCard />
			</Box> 
			*/}
		</Flex>
	);
}

export default SidebarContent;
