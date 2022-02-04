import React, { useState,useEffect } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Box, VStack, FormControl, Button, Input,Center, Image, ScrollView, useToast} from "native-base";
import AddSongs from '../modals/AddSongs';
import { getDatabase, ref, update, push, child, remove, onValue} from "firebase/database";
import { getAuth } from "firebase/auth";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
var selectedSongs = [];

const FormScreen =({navigation, route}) => {
    const [image, setImage] = useState(null);
    const [playlistName, setPlaylistName] = useState('');
    const [description, setDescription] = useState('');
    const [songList, setSongList] = useState('');

    const toast= useToast();
    const db = getDatabase();
    const auth = getAuth();
    const userId = auth.currentUser.uid;

    const pull_data = (data) => {
      selectedSongs = []
      for(let id in data){
        if(data[id].selected){
        selectedSongs.push(data[id]);
        }
    }
    }
    useEffect(() => {
    pull_data([]);
    const routeParamsExist = route.params;
    if(routeParamsExist){
    setImage(route.params.data.image);
    setDescription(route.params.data.description);
    setPlaylistName(route.params.data.title);
    pull_data(route.params.data.songs);
    navigation.setOptions({title:"Edit Playlist",
    headerRight: () => (
      <Button
        onPress={() => deletePlaylist()}
        color="#00cc00">Delete
      </Button>
  )});
    }
    const songListRef = ref(db, "Songs");
    onValue(songListRef, (snapshot) => {
      const songs = snapshot.val();
      const songList = []
      for(let id in songs){
        if(routeParamsExist){
          if(routeParamsExist.data.songs){
          const selectedSongObject = (route.params.data.songs.filter((item) => item.id == songs[id].id));
          if(selectedSongObject.length == 1){
            songList.push({id,...selectedSongObject[0]})
          }
          else{
            songList.push({id,...songs[id]});
          }
          }
          else{
            songList.push({id,...songs[id]});
          }
        }
        else{
          songList.push({id,...songs[id]});
        }
      }
      setSongList(songList);
     })
     return () => {
      setSongList({});
      setImage({});
      setPlaylistName({});
      setDescription({});
    }
  }, [])

  const onPressHandler = (itemSelected) => {
    const newData = songList.map(item => {
       if (item.id == itemSelected.id){
         return{
           ...item,
           selected: !item.selected
         }
       }
         return{
           ...item,
           selected: item.selected
         }
    });
       setSongList(newData);
   };

    const calculateTotalTime = (data) =>{
      var timeInSeconds = 0;
      for(let id in data){
        const time = data[id].length;
        time = time.split(':');
        timeInSeconds += time[0]*3600;
        timeInSeconds += time[1]*60;
        timeInSeconds += time[2]*1;
      }
        var hours = Math.floor(timeInSeconds / 3600);
        var minutes = Math.floor(timeInSeconds/60 - hours*60);
        var seconds = Math.floor(timeInSeconds - hours * 3600 - minutes * 60);
        hours = hours.toString(10).padStart(2,'0');
        minutes = minutes.toString(10).padStart(2,'0');
        seconds = seconds.toString(10).padStart(2,'0');
        return hours + ':' + minutes + ':' + seconds;
    }

    const deletePlaylist = () => {
      const playlistKey = route.params.data.id;
      const path = '/users/' + userId + '/playlists/' + playlistKey;
      remove(ref(db,path));
      toast.show({
        description: "Playlist deleted!"
      })
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }],
      });
    }
    const addPlaylist = () =>{
            var playlist = {
                title: playlistName,
                description: description,
                songs: selectedSongs,
                totalsongs: selectedSongs.length,
                image: image,
                length: calculateTotalTime(selectedSongs)
            }
            // ...
          if(route.params){
            updateUserPlaylist(playlist);
            toast.show({
              description: "Playlist updated!"
            })
          }
          else{
            writeUserPlaylist(playlist);
            toast.show({
              description: "Playlist added"
            })
          }
          if(route.params){
            navigation.navigate('DetailsScreen',{
              data: playlist
            });
          }
          else{
            navigation.reset({
              index: 0,
              routes: [{ name: 'HomeScreen' }],
            });
          }
    };

    function writeUserPlaylist(playlist) {
        const newPlaylistKey = push(child(ref(db), 'users/' + userId + '/playlists')).key;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        const updates = {};
        updates['/users/' + userId + '/playlists/' + newPlaylistKey] = playlist;
        
        return update(ref(db), updates);
      }

    function updateUserPlaylist(playlist){
      const playlistKey = route.params.data.id;
      const updates = {};
      updates['/users/' + userId + '/playlists/' + playlistKey] = playlist

      return update(ref(db),updates);
    }

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };

    return (
      <ScrollView bg= "secondary.900">
      <KeyboardAwareScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Center w="100%" h="100%" bg= "secondary.900">
            <Box safeArea p="2" py="8" w="90%" maxW="290" >
            <Button onPress={pickImage} pb={2}>Pick an image from camera roll</Button>
                <Center pt={3}>
                  {image ? (
                <Image source={{
                  uri: image
                }}
                  fallbackSource={{
                  uri: "https://wallpaperaccess.com/full/317501.jpg"
                  }}
                 alt="Alternate Text" size="2xl" />
                  ) : (
                   <Image source={{
                    uri: "https://wallpaperaccess.com/full/317501.jpg"
                    }}
                   alt="Alternate Text" size="2xl" />
                  )}
                </Center>
                <VStack space={3} mt="5">
                <FormControl>
                    <Input onChangeText={text => setPlaylistName(text)} value ={playlistName} variant="unstyled" textAlign="center" size = "2xl" w="100%"  placeholder="Playlist Name"/>
                </FormControl>
                <FormControl>
                    <Input onChangeText={text => setDescription(text)} value ={description} size="2xl" variant="unstyled" textAlign="left" size = "2xl" w="100%" placeholder="Description" multiline={true}/>
                </FormControl>
                <AddSongs func={pull_data} pressfunc={onPressHandler} songList = {songList} />
                <Button mt={3} mb = {3} colorScheme='primary' onPress={addPlaylist}>
                    {route.params ? "Update Playlist" : "Create Playlist"}
                </Button>
                </VStack>
            </Box>
            </Center>
        </TouchableWithoutFeedback>
     </KeyboardAwareScrollView>
     </ScrollView>

    );
}

export default FormScreen;