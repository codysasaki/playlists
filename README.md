# Playlists - CRUD Expo-managed React Native mobile application 
  This application uses Firebase's realtime database and authentication to allow users to interact with these screens:
  * Sign Up / Log In Screens
    * Two screens that handle user authentication
  * Home Screen (Index)
    *  Provides user with basic info on list of available playlists they have created
      * Playlist name, image, total songs, total length   
    *  When a playlist is pressed, the user is taken to a more detailed screen (See immediately Below)
  * Details Screen
   * Provides more detailed information on a specific playlist
    * Playlist name, image, description, and a list of songs that have been added
  * Form Screen
    * Provides user with ability to create and update a playlist via a form  

## Table of Contents

1. [Getting Started](#getting-started)
    1. [Dependencies](#dependencies)
1. [Authors](#authors)


## Getting Started

Following these steps should get you up and running this app on your local machines:

1. Clone repository
    ```
    git clone git@github.com:codysasaki/playlists.git
    ```
2. Cd into repository and run:
   ```
   npm install
   ```
3. Run ```npm start``` and a message similar to this should appear:
  ```> playlists@1.0.0 start
      > expo start

      Starting project at ...
      Developer tools running on http://localhost:19002....
  ```
  Accessing the localhost link should take you to an Expo screen where you can choose to 
    * Run on Android device/emulator
      *Alternatively scan QR code with Android devices using Expo App
    * Run on IOS device/emulator
      *Alternatively scan QR code with IOS device using Expo App
     
### Dependencies
```
├── @babel/core@7.16.12
├── @react-native-async-storage/async-storage@1.15.17
├── @react-navigation/native-stack@6.2.5
├── @react-navigation/native@6.0.6
├── expo-image-picker@12.0.1
├── expo-status-bar@1.2.0
├── expo@44.0.5
├── firebase@9.6.5
├── native-base@3.3.4
├── react-dom@17.0.1
├── react-native-keyboard-aware-scroll-view@0.9.5
├── react-native-safe-area-context@3.3.2
├── react-native-screens@3.10.2
├── react-native-svg@12.1.1
├── react-native-web@0.17.1
├── react-native@0.64.3
└── react@17.0.1
```

**[Back to top](#table-of-contents)**

## Authors

* **[Cody Sasaki](https://github.com/codysasaki)**

**[Back to top](#table-of-contents)**

