import React, { useState } from 'react';
import { Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Box, Text, Heading, VStack, FormControl, Button, Input, Link, HStack, Center, NativeBaseProvider, theme } from "native-base";
import AddSongs from '../modals/AddSongs';

const FormScreen =({navigation}) => {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };
  
    return (

        <Center w="100%" h="100%" bg= "primary.900">
            <Box safeArea p="2" py="8" w="90%" maxW="290" >
            <Button onPress={pickImage} >Pick an image from camera roll</Button>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }}></Image>}
                <VStack space={3} mt="5">
                <FormControl>
                    <Input variant="unstyled" textAlign="center" size = "2xl" w="100%" maxW="300px" placeholder="Playlist Name"/>
                </FormControl>
                <FormControl>
                    <Input size="2xl" variant="unstyled" textAlign="left" size = "2xl" w="100%" maxW="300px" placeholder="Description" multiline={true}/>
                </FormControl>
                <AddSongs/>
                <Button mt="2" colorScheme='primary' onPress={()=> navigation.navigate('HomeScreen')}>
                    Create Playlist
                </Button>
                </VStack>
            </Box>
        </Center>

    );
}

export default FormScreen;