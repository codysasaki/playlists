import React from "react";
import { Box, Icon, HStack, VStack, Text, Spacer, Center} from "native-base";
import { AntDesign } from '@expo/vector-icons'; 

        const PlaylistHeader = () =>{
            return(
            <Box  borderBottomWidth="1" borderColor="primary.500" bg="secondary.900"  pl="4" pr="5" py="2" width="100%" >
            <HStack space={3} justifyContent="space-between">
              <Icon as ={AntDesign} size="2xl" name="plussquareo" color="white" />
              <Center>
              <VStack>
                <Text fontSize="3xl" color="primary.100" bold>
                  Add Playlist
                </Text>
              </VStack>
              </Center>
              <Spacer />
            </HStack>
          </Box>
            )
          }

          export default PlaylistHeader;