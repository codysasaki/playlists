import React, { useState } from 'react';

import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, theme } from "native-base";
const LoginScreen =({navigation}) => {

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <Center w="100%" h="100%" bg= "primary.900">
            <Box safeArea p="2" py="8" w="90%" maxW="290" >
                <Heading pt="30" size="4xl" textAlign="center" fontWeight="300" color="primary.400">
                PlayLists
                </Heading>
                <VStack space={3} mt="5">
                <FormControl>
                    <Input size = "2xl" w="100%" maxW="300px" placeholder="Email..."/>
                </FormControl>
                <FormControl>
                    <Input size = "2xl" w="100%" maxW="300px" type={show ? "text" : "password"} 
                    InputRightElement={<Button size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
                    {show ? "Hide" : "Show"}
                    </Button>} placeholder="Password..."
                    />
                    <Link _text={{
                    fontSize: "xs",
                    fontWeight: "500",
                    color: "primary.100",
                }} alignSelf="flex-end" pt="2" mt="1">
                    Forgot Password?
                    </Link>
                </FormControl>
                <Button mt="2" colorScheme='primary' onPress={()=> navigation.navigate('HomeScreen')}>
                    Login
                </Button>
                <HStack mt="4" justifyContent="center">
                    <Link onPress={()=> navigation.navigate('SignUpScreen')} _text={{
                    color: "primary.100",
                    fontWeight: "medium",
                    fontSize: "sm"
                }} >
                    Sign Up
                    </Link>
                </HStack>
                </VStack>
            </Box>
        </Center>
    );
}

export default LoginScreen;
