import React, { useState, useEffect,  } from 'react';
import { Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, KeyboardAvoidingView, useToast} from "native-base";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const LoginScreen =({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false);

    const toast= useToast();

    const handleClick = () => setShow(!show);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.replace("HomeScreen")
          }
        })
    
        return unsubscribe
      }, [])

    const handleSignIn = () =>{
   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    toast.show({
      description: "Successful Login"
    })
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    toast.show({
      description: "Error Message for Login"
    })
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    };

    return (
     <KeyboardAvoidingView behavior = {Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Center w="100%" h="100%" bg= "secondary.900">
            <Box safeArea p="2" py="8" w="90%" maxW="290" >
                <Heading pt="30" size="4xl" textAlign="center" fontWeight="300" color="primary.400">
                PlayLists
                </Heading>
                <VStack space={3} mt="5">
                <FormControl>
                    <Input onChangeText={text => setEmail(text)} value ={email} size = "2xl" w="100%" maxW="300px" placeholder="Email..."/>
                </FormControl>
                <FormControl>
                    <Input onChangeText={text => setPassword(text)} value={password} size = "2xl" w="100%" maxW="300px" type={show ? "text" : "password"} 
                    InputRightElement={<Button size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
                    {show ? "Hide" : "Show"}
                    </Button>} placeholder="Password..."
                    />
                    <Link _text={{
                    fontSize: "xs",
                    fontWeight: "500",
                    color: "primary.100",
                }} alignSelf="flex-end" pt="2" mt="1">
                    Forgot Password?(placeholder)
                    </Link>
                </FormControl>
                <Button mt="2" colorScheme='primary' onPress={handleSignIn}>
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
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export default LoginScreen;
