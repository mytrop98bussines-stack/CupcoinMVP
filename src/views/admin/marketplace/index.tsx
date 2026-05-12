import React from 'react';

// Chakra imports
import { Box, Button, Flex, Grid, Link, Text, useColorModeValue, SimpleGrid } from '@chakra-ui/react';

// Custom components
import Banner from 'views/admin/marketplace/components/Banner';
import TableTopCreators from 'views/admin/marketplace/components/TableTopCreators';
import HistoryItem from 'views/admin/marketplace/components/HistoryItem';
import NFT from 'components/card/NFT';
import Card from 'components/card/Card';

// Assets (He mantenido los nombres de los assets para que no te dé error de compilación, 
// pero los trataremos como fotos de perfil o logos de bancos)
import Nft1 from 'assets/img/nfts/Nft1.png';
import Nft2 from 'assets/img/nfts/Nft2.png';
import Nft3 from 'assets/img/nfts/Nft3.png';
import Nft4 from 'assets/img/nfts/Nft4.png';
import Nft5 from 'assets/img/nfts/Nft5.png';
import Nft6 from 'assets/img/nfts/Nft6.png';
import tableDataTopCreators from 'views/admin/marketplace/variables/tableDataTopCreators'; 

export default function Marketplace() {
	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorBrand = useColorModeValue('brand.500', 'white');

	return (
		<Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
			{/* Main Fields */}
			<Grid
				mb='20px'
				gridTemplateColumns={{ xl: 'repeat(3, 1fr)', '2xl': '1fr 0.46fr' }}
				gap={{ base: '20px', xl: '20px' }}
				display={{ base: 'block', xl: 'grid' }}>
				<Flex flexDirection='column' gridArea={{ xl: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}>
					{/* Banner informativo sobre el P2P */}
					<Banner />
					<Flex direction='column'>
						<Flex
							mt='45px'
							mb='20px'
							justifyContent='space-between'
							direction={{ base: 'column', md: 'row' }}
							align={{ base: 'start', md: 'center' }}>
							<Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
								Ofertas de Venta (USDT)
							</Text>
							<Flex
								align='center'
								me='20px'
								ms={{ base: '24px', md: '0px' }}
								mt={{ base: '20px', md: '0px' }}>
								<Link
									color={textColorBrand}
									fontWeight='500'
									me={{ base: '34px', md: '44px' }}
									href='#transf'>
									Transfermóvil
								</Link>
								<Link
									color={textColorBrand}
									fontWeight='500'
									me={{ base: '34px', md: '44px' }}
									href='#enzona'>
									EnZona
								</Link>
								<Link
									color={textColorBrand}
									fontWeight='500'
									me={{ base: '34px', md: '44px' }}
									href='#mlc'>
									MLC
								</Link>
							</Flex>
						</Flex>
						<SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
							<NFT
								name='Venta de 100 USDT'
								author='Por: @usuario_habana'
								image={Nft1}
								currentbid='325 CUP / USDT'
								download='#'
							/>
							<NFT
								name='Venta de 50 USDT'
								author='Por: @p2p_cuba_express'
								image={Nft2}
								currentbid='320 CUP / USDT'
								download='#'
							/>
							<NFT
								name='Venta de 200 USDT'
								author='Por: @crypto_vendedor'
								image={Nft3}
								currentbid='322 CUP / USDT'
								download='#'
							/>
						</SimpleGrid>
						<Text mt='45px' mb='36px' color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
							Ofertas de Compra (CUP)
						</Text>
						<SimpleGrid columns={{ base: 1, md: 3 }} gap='20px' mb={{ base: '20px', xl: '0px' }}>
							<NFT
								name='Compro 300 USDT'
								author='Por: @comprador_fiel'
								image={Nft4}
								currentbid='315 CUP / USDT'
								download='#'
							/>
							<NFT
								name='Compro 15 USDT'
								author='Por: @pyme_market'
								image={Nft5}
								currentbid='318 CUP / USDT'
								download='#'
							/>
							<NFT
								name='Compro 1000 USDT'
								author='Por: @whale_cuba'
								image={Nft6}
								currentbid='310 CUP / USDT'
								download='#'
							/>
						</SimpleGrid>
					</Flex>
				</Flex>
				<Flex flexDirection='column' gridArea={{ xl: '1 / 3 / 2 / 4', '2xl': '1 / 2 / 2 / 3' }}>
					<Card px='0px' mb='20px'>
						{/* Aquí aparecerán los comerciantes con mejor reputación en la isla */}
						<TableTopCreators tableData={tableDataTopCreators}  />
					</Card>
					<Card p='0px'>
						<Flex
							align={{ sm: 'flex-start', lg: 'center' }}
							justify='space-between'
							w='100%'
							px='22px'
							py='18px'>
							<Text color={textColor} fontSize='xl' fontWeight='600'>
								Actividad Reciente
							</Text>
							<Button variant='action'>Ver todo</Button>
						</Flex>

						<HistoryItem
							name='Compra Completada'
							author='Por: @comprador_fiel'
							date='hace 30s'
							image={Nft5}
							price='315 CUP'
						/>
						<HistoryItem
							name='Venta Exitosa'
							author='Por: @usuario_habana'
							date='hace 58s'
							image={Nft1}
							price='325 CUP'
						/>
						<HistoryItem
							name='Pago Recibido'
							author='Por: @crypto_vendedor'
							date='hace 2m'
							image={Nft2}
							price='322 CUP'
						/>
					</Card>
				</Flex>
			</Grid>
		</Box>
	);
}
