	// Reemplaza desde aquí hasta el final de createLinks
	const createLinks = (routes: RoutesType[]) => {
		return routes.map((route: RoutesType, index: number) => {
			if (route.layout === '/admin' || route.layout === '/auth' || route.layout === '/rtl') {
				return (
					<NavLink key={index} to={route.layout + route.path}>
						{route.icon ? (
							<Box>
								<HStack
									spacing={activeRoute(route.path.toLowerCase()) ? '22px' : '26px'}
									py='5px'
									ps='10px'>
									<Flex w='100%' alignItems='center' justifyContent='center'>
										<Box
											color={activeRoute(route.path.toLowerCase()) ? activeIcon : textColor}
											me='18px'>
											{/* CORRECCIÓN: Envolvemos el icono para limpiar los tipos de React 19 */}
											<Icon as={route.icon as any} width='20px' height='20px' />
										</Box>
										<Text
											me='auto'
											color={activeRoute(route.path.toLowerCase()) ? activeColor : textColor}
											fontWeight={activeRoute(route.path.toLowerCase()) ? 'bold' : 'normal'}>
											{route.name}
										</Text>
									</Flex>
									<Box
										h='36px'
										w='4px'
										bg={activeRoute(route.path.toLowerCase()) ? brandColor : 'transparent'}
										borderRadius='5px'
									/>
								</HStack>
							</Box>
						) : (
							<Box>
								<HStack
									spacing={activeRoute(route.path.toLowerCase()) ? '22px' : '26px'}
									py='5px'
									ps='10px'>
									<Text
										me='auto'
										color={activeRoute(route.path.toLowerCase()) ? activeColor : inactiveColor}
										fontWeight={activeRoute(route.path.toLowerCase()) ? 'bold' : 'normal'}>
										{route.name}
									</Text>
									<Box h='36px' w='4px' bg='brand.400' borderRadius='5px' />
								</HStack>
							</Box>
						)}
					</NavLink>
				);
			}
		});
	};
