import React from "react";
import { Box, HStack, VStack, Text, Center, Image } from "native-base";

const DetailsHeader = ({ data }) => {
  return (
    <Box
      borderBottomWidth="1"
      borderColor="primary.500"
      bg="secondary.900"
      pl="4"
      pr="5"
      py="2"
      width="100%"
    >
      <Center>
        <HStack justifyContent="space-between">
          <VStack alignItems="center">
            <Image
              size="2xl"
              source={{
                uri: data.image,
              }}
              alt="Playlist Image"
              bg="primary.100"
            />
            <Text fontSize="2xl" color="primary.100" bold>
              {data.title === "" ? "Untitled Playlist" : data.title}
            </Text>
            <Text fontSize="lg" color="primary.200" bold>
              {data.description}
            </Text>
          </VStack>
        </HStack>
      </Center>
    </Box>
  );
};

export default DetailsHeader;
