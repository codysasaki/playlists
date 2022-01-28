import React, { useRef} from 'react';
import { Box, Avatar, HStack, VStack, Text, Spacer, Pressable} from "native-base";
import {Animated} from 'react-native';

const HomeScreen =({navigation}) => {

    const data = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Aafreen Khan",
        timeStamp: "12:47 PM",
        recentText: "Good Day!",
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "Sujitha Mathur",
        timeStamp: "11:11 PM",
        recentText: "Cheer up, there!",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
      }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        fullName: "Anci Barroco",
        timeStamp: "6:22 PM",
        recentText: "Good Day!",
        avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
      }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Aniket Kumar",
        timeStamp: "8:56 PM",
        recentText: "All the best",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
      }, {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "12:47 PM",
        recentText: "I will call today.",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
      }, {
        id: "28694a5f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "12:47 PM",
        recentText: "I will call today.",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
      }, {
        id: "28694s4f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "12:47 PM",
        recentText: "I will call today.",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
      }, {
        id: "28694d3f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "12:47 PM",
        recentText: "I will call today.",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
      }, {
        id: "a8624a2f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "12:47 PM",
        recentText: "I will call today.",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
      }, {
        id: "28d94a1f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "12:47 PM",
        recentText: "I will call today.",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
      }, {
        id: "48624a2f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "12:47 PM",
        recentText: "I will call today.",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
      }, {
        id: "38d94a1f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "12:47 PM",
        recentText: "I will call today.",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
      }, {
        id: "28624a2f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "12:47 PM",
        recentText: "I will call today.",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
      }, {
        id: "18d94a1f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "12:47 PM",
        recentText: "I will call today.",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
      }];
      const {diffClamp} = Animated;
      const headerHeight = 60;
        const ref = useRef(null);
        const getCloser = (value, checkOne, checkTwo) =>
  Math.abs(value - checkOne) < Math.abs(value - checkTwo) ? checkOne : checkTwo;
        const scrollY = useRef(new Animated.Value(0));
        const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight);
      
        const translateY = scrollYClamped.interpolate({
          inputRange: [0, headerHeight],
          outputRange: [0, -(headerHeight)],
        });
      
        const translateYNumber = useRef();
      
        translateY.addListener(({value}) => {
          translateYNumber.current = value;
        });
      
        const handleScroll = Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {y: scrollY.current},
              },
            },
          ],
          {
            useNativeDriver: true,
          },
        );
    return (
        <Box w="100%" h="100%" bg="primary.900">
            <Animated.View style={{transform:[{translateY}],elevation:4,zIndex:100,position:'absolute', width:'100%', height:headerHeight, backgroundColor:'primary.900'}}>
            <Box  borderBottomWidth="1" borderColor="coolGray.200" bg="primary.900" position="absolute" pl="4" pr="5" py="2" width="100%" height={headerHeight}>
            <Pressable onPress={()=> navigation.navigate('FormScreen')}>
            <HStack space={3} justifyContent="space-between">
              <Avatar size="48px" bg="primary.100"/>
              <VStack>
                <Text opacity="1" color="primary.100" bold>
                  Add Playlist
                </Text>
              </VStack>
              <Spacer />
            </HStack>
            </Pressable>
          </Box>
            </Animated.View>
            

            
      <Animated.FlatList scrollEventThrottle={16}
        contentContainerStyle={{paddingTop: headerHeight}}
        onScroll={handleScroll}
        ref={ref}
        data={data} renderItem={
        (
    {
      item
    }) => 
        <Box borderBottomWidth="1" borderColor="coolGray.200" pl="4" pr="5" py="2">
            <Pressable onPress={() => console.log("I'm Pressed")}>
            <HStack space={3} justifyContent="space-between">
              <Avatar size="48px" source={{
          uri: item.avatarUrl
        }} />
              <VStack>
                <Text color="coolGray.800" bold>
                  {item.fullName}
                </Text>
                <Text color="coolGray.600">
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.timeStamp}
              </Text>
            </HStack>
            </Pressable>
          </Box>} keyExtractor={item => item.id} />
          
    </Box>
    
    );
}

export default HomeScreen;
