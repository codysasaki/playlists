import React from "react";
import {
  Button,
  Modal,
  Center,
  HStack,
  VStack,
  Text,
  Spacer,
  Pressable,
  FlatList,
  Heading,
  Box,
} from "native-base";
import { useState } from "react";

const AddSongs = (props) => {
  const [showModal, setShowModal] = useState(false);

  const renderItem = ({ item }, props) => {
    return (
      <Box
        borderBottomWidth="1"
        borderColor="primary.500"
        bg={item.selected ? "primary.800" : "secondary.800"}
        px="2"
        py="2"
      >
        <>
          {item.selected ? (
            <Pressable onPress={() => props(item)}>
              <HStack space={3} justifyContent="space-between">
                <VStack>
                  <Text color="primary.100" bold>
                    {item.title}
                  </Text>
                </VStack>
                <Spacer />
                <Text fontSize="xs" color="primary.200" alignSelf="flex-start">
                  {item.length}
                </Text>
              </HStack>
            </Pressable>
          ) : (
            <Pressable onPress={() => props(item)}>
              <HStack space={3} justifyContent="space-between">
                <VStack>
                  <Text color="primary.400" bold>
                    {item.title}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.length}
                </Text>
              </HStack>
            </Pressable>
          )}
        </>
      </Box>
    );
  };

  return (
    <Center>
      <Button onPress={() => setShowModal(true)}>Songs</Button>
      <Modal size="full" isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content bg="secondary.800" maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Songs</Modal.Header>
          <FlatList
            bounces="false"
            data={props.songList}
            renderItem={(item) => renderItem(item, props.pressfunc)}
            keyExtractor={(item) => item.id}
          />
          <Modal.Footer bg="secondary.700">
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                  props.func(props.songList);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default AddSongs;
