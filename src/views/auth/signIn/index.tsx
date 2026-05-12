import React from "react";
import { useHistory } from "react-router-dom";
// Chakra imports
import { Box, Button, Flex, Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import DefaultAuth from "layouts/auth/Default";
import { FcGoogle } from "react-icons/fc";

// Firebase integration
import { auth, googleProvider } from "../../../firebase";
import { signInWithPopup } from "firebase/auth";

function SignIn() {
  const history = useHistory();
  const textColor = useColorModeValue("navy.700", "white");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue({ bg: "gray.200" }, { bg: "whiteAlpha.300" });

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) {
        console.log("Usuario logueado:", result.user);
        // Redirección inmediata al perfil tras éxito
        history.push("/admin/profile");
      }
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  return (
    <DefaultAuth illustrationBackground={""} image={""}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w='100%'
        mx={{ base: "auto", lg: "0px" }}
        me='auto'
        h='100%'
        alignItems='start'
        justifyContent='center'
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection='column'>
        <Box me='auto'>
          <Heading color={textColor} fontSize='36px' mb='10px'>
            Entrar a CUPcoin
          </Heading>
          <Text mb='36px' ms='4px' color='secondaryGray.600' fontWeight='400' fontSize='md'>
            Usa tu cuenta de Google para gestionar tus pagos P2P.
          </Text>
        </Box>
        <Button
          fontSize='sm'
          me='0px'
          mb='26px'
          py='15px'
          h='50px'
          borderRadius='16px'
          bg={googleBg}
          color={googleText}
          fontWeight='500'
          _hover={googleHover}
          _active={{ bg: "secondaryGray.300" }}
          _focus={{ bg: "secondaryGray.300" }}
          onClick={handleGoogleSignIn}
          w='100%'>
          <Icon as={FcGoogle} w='20px' h='20px' me='10px' />
          Iniciar sesión con Google
        </Button>
      </Flex>
    </DefaultAuth>
  );
}

export default SignIn;
