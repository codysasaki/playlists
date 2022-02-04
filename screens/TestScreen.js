import React, { useRef, useState, useEffect } from 'react';
import { Box, HStack, VStack, Text, Spacer, Pressable, FlatList, Heading} from "native-base";
import {Animated} from 'react-native';
import { auth } from '../firebase';
import { getDatabase, ref, onValue} from "firebase/database";

const TestScreen =({navigation}) => {
const [songList, setSongList] = useState();
useEffect(() => {
const db = getDatabase();
const songListRef = ref(db, "Songs");
onValue(songListRef, (snapshot) => {
  const songs = snapshot.val();
  const songList = []
  for(let id in songs){
      songList.push({id,...songs[id]});
  }
  console.log(songList);
  setSongList(songList);
});
}, []);

const renderItem = ({item}) =>{
    console.log(item.title);
    return(
    <Box borderBottomWidth="1" borderColor="coolGray.200" pl="4" pr="5" py="2">
            <Pressable onPress={() => console.log("I'm Pressed")}>
            <HStack space={3} justifyContent="space-between">
              <VStack>
                <Text color="coolGray.800" bold>
                  {item.title}
                </Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.length}
              </Text>
            </HStack>
            </Pressable>
          </Box>
    );
}

return(
    <Box w="100%" h="100%" bg="primary.900">
        <Heading fontSize="xl" p="4" pb="3">
        Songs
      </Heading>
    <FlatList 
    data={songList}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    />
    </Box>
)};
export default TestScreen;