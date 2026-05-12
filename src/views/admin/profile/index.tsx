/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
*/

// Chakra imports
import { Box, Grid } from '@chakra-ui/react';

// Custom components
import Banner from 'views/admin/profile/components/Banner';
import General from 'views/admin/profile/components/General';
import Notifications from 'views/admin/profile/components/Notifications';
import Projects from 'views/admin/profile/components/Projects';
import Storage from 'views/admin/profile/components/Storage';
import Upload from 'views/admin/profile/components/Upload';

// Assets
import banner from 'assets/img/auth/banner.png';
import avatar from 'assets/img/avatars/avatar4.png';

export default function Overview() {
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			{/* Main Fields */}
			<Grid
				templateColumns={{
					base: '1fr',
					lg: '1.34fr 1fr 1.62fr'
				}}
				templateRows={{
					base: 'repeat(3, 1fr)',
					lg: '1fr'
				}}
				gap={{ base: '20px', xl: '20px' }}>
				<Banner
					gridArea='1 / 1 / 2 / 2'
					banner={banner}
					avatar={avatar}
					name='Usuario CUPcoin'
					job='Comerciante Verificado'
					posts='125' // Esto representará transacciones completadas
					followers='4.9/5' // Esto representará la calificación P2P
					following='100%' // Esto representará la tasa de respuesta
				/>
				{/* Storage se convierte en el balance rápido de la Wallet */}
				<Storage gridArea={{ base: '2 / 1 / 3 / 2', lg: '1 / 2 / 2 / 3' }} used={450} total={1000} />
				{/* Upload puede servir para subir fotos de comprobantes de pago */}
				<Upload
					gridArea={{
						base: '3 / 1 / 4 / 2',
						lg: '1 / 3 / 2 / 4'
					}}
					minH={{ base: 'auto', lg: '420px', '2xl': '365px' }}
					pe='20px'
					pb={{ base: '100px', lg: '20px' }}
				/>
			</Grid>
			<Grid
				mb='20px'
				templateColumns={{
					base: '1fr',
					lg: 'repeat(2, 1fr)',
					'2xl': '1.34fr 1.62fr 1fr'
				}}
				templateRows={{
					base: '1fr',
					lg: 'repeat(2, 1fr)',
					'2xl': '1fr'
				}}
				gap={{ base: '20px', xl: '20px' }}>
				{/* Projects se convierte en la lista de Tarjetas Bancarias guardadas */}
				<Projects
					banner={banner}
					avatar={avatar}
					name='Tarjetas Guardadas'
				/>
				{/* General contendrá la información de contacto y límites de cuenta */}
				<General gridArea={{ base: '2 / 1 / 3 / 2', lg: '1 / 2 / 2 / 3' }} minH='365px' pe='20px' />
				{/* Notifications para alertas de precios y seguridad */}
				<Notifications
					used={25.6}
					total={50}
					gridArea={{
						base: '3 / 1 / 4 / 2',
						lg: '2 / 1 / 3 / 3',
						'2xl': '1 / 3 / 2 / 4'
					}}
				/>
			</Grid>
		</Box>
	);
}
