import React, { useEffect } from "react";
import {
  Box,
  Image,
  HStack,
  VStack,
  Text,
  Spacer,
  FlatList,
  Button,
  Center,
} from "native-base";

import DetailsHeader from "../components/DetailsHeader";

const DetailsScreen = ({ navigation, route }) => {
  const songs = route.params.data.songs;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() =>
            navigation.navigate("FormScreen", {
              data: route.params.data,
            })
          }
          color="#00cc00"
        >
          Edit
        </Button>
      ),
    });
  }, []);

  return (
    <Box w="100%" h="100%" bg="secondary.900">
      <DetailsHeader data={route.params.data} />
      <FlatList
        data={songs}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            borderColor="primary.500"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space="2xl" justifyContent="space-between">
              <Text fontSize="lg" color="primary.100" bold>
                {item.title}
              </Text>
              <Spacer />
              <Text fontSize="sm" color="primary.200" alignSelf="flex-start">
                {item.length}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default DetailsScreen;
