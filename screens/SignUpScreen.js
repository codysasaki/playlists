import React, { useState, useEffect } from "react";
import {
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  LogBox,
} from "react-native";
import {
  Box,
  Heading,
  Link,
  HStack,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  KeyboardAvoidingView,
  useToast,
} from "native-base";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { getDatabase, ref, set } from "firebase/database";

//due to using Firebase RTDB
//LogBox.ignoreLogs(['Setting a timer for a long period of time']);

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const toast = useToast();

  const handleClick = () => setShow(!show);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: "HomeScreen" }],
        });
      }
    });

    return unsubscribe;
  }, []);
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        var user = {
          playlists: "",
          uid: userCredential.user.uid,
          email: userCredential.user.email,
        };
        // ...
        writeUserData(user);
        toast.show({
          description: "Successful Account Creation",
        });
      })
      .catch((error) => {
        toast.show({
          description: "Error Message for Account Creation",
        });
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  function writeUserData(user) {
    const db = getDatabase();
    set(ref(db, "users/" + user.uid), {
      playlists: user.playlists,
      email: user.email,
    });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Center w="100%" h="100%" bg="secondary.900">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading
              pt="30"
              size="4xl"
              textAlign="center"
              fontWeight="300"
              color="primary.400"
            >
              PlayLists
            </Heading>
            <VStack space={3} mt="5" pb="7">
              <FormControl>
                <Input
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                  size="2xl"
                  w="100%"
                  placeholder="Email..."
                />
              </FormControl>
              <FormControl>
                <Input
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                  size="2xl"
                  w="100%"
                  type={show ? "text" : "password"}
                  InputRightElement={
                    <Button
                      size="xs"
                      rounded="none"
                      w="1/6"
                      h="full"
                      onPress={handleClick}
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  }
                  placeholder="Password..."
                />
              </FormControl>
              <Button mt="2" onPress={handleSignUp}>
                Sign Up
              </Button>
              <HStack mt="4" justifyContent="center">
                <Link
                  onPress={() => navigation.navigate("LoginScreen")}
                  _text={{
                    color: "primary.100",
                    fontWeight: "medium",
                    fontSize: "sm",
                  }}
                >
                  Go To Login
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
