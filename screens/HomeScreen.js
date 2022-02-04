import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  FlatList,
  HStack,
  VStack,
  Text,
  Spacer,
  Pressable,
} from "native-base";
import { LogBox } from "react-native";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

import PlaylistHeader from "../components/PlaylistHeader";

LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
const HomeScreen = ({ navigation }) => {
  const [playlistList, setPlaylistList] = useState("");
  const db = getDatabase();
  const auth = getAuth();
  const userId = auth.currentUser.uid;

  useEffect(() => {
    getPlaylist();
    return () => {
      setPlaylistList({});
    };
  }, []);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigation.replace("LoginScreen");
      }
    });

    return unsubscribe;
  }, []);

  const getPlaylist = () => {
    const playlistListRef = ref(db, "/users/" + userId + "/playlists/");
    onValue(playlistListRef, (snapshot) => {
      const playlists = snapshot.val();
      const playlistList = [];
      for (let id in playlists) {
        playlistList.push({ id, ...playlists[id] });
      }
      setPlaylistList(playlistList);
    });
  };

  const renderItem = ({ item }, navigation) => {
    return (
      <Box borderBottomWidth="1" borderColor="primary.500" pl="4" pr="5" py="2">
        <Pressable
          onPress={() =>
            navigation.navigate("DetailsScreen", {
              data: item,
            })
          }
        >
          <HStack space={3} justifyContent="space-between">
            <Image
              bg="primary.100"
              source={{
                uri: item.image,
              }}
              alt="Playlist Image"
              size="sm"
            />
            <VStack>
              <Text color="primary.100" bold>
                {item.title === "" ? "Untitled Playlist" : item.title}
              </Text>
              <Text color="primary.200">
                {item.totalsongs + (item.totalsongs === 1 ? " Song" : " Songs")}
              </Text>
            </VStack>
            <Spacer />
            <Text fontSize="xs" color="primary.200" alignSelf="flex-start">
              {item.length}
            </Text>
          </HStack>
        </Pressable>
      </Box>
    );
  };

  return (
    <Box w="100%" h="100%" bg="secondary.900">
      <FlatList
        ListHeaderComponent={
          <Pressable onPress={() => navigation.navigate("FormScreen")}>
            <PlaylistHeader />
          </Pressable>
        }
        bounces="false"
        data={playlistList}
        renderItem={(item) => renderItem(item, navigation)}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default HomeScreen;
