import React, { useState } from 'react';

import { Box, Heading, VStack, FormControl, Input, Button, Center} from "native-base";

const SignUpScreen =({navigation}) => {

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <Center w="100%" h="100%" bg= "primary.900">
            <Box safeArea p="2" py="8" w="90%" maxW="290" >
                <Heading pt="30" size="4xl" textAlign="center" fontWeight="300" color="primary.400" >
                PlayLists
                </Heading>
                <VStack space={3} mt="5" pb="7">
                <FormControl>
                    <Input size = "2xl" w="100%" maxW="300px" placeholder="Email..."/>
                </FormControl>
                <FormControl>
                    <Input size = "2xl" w="100%" maxW="300px" type={show ? "text" : "password"} 
                    InputRightElement={<Button size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
                    {show ? "Hide" : "Show"}
                    </Button>} placeholder="Password..."
                    />
                </FormControl >
                <Button mt="2"  onPress={()=> navigation.navigate('LoginScreen')}>
                    Sign Up
                </Button>

                </VStack>
            </Box>
        </Center>
    );
}

export default SignUpScreen;