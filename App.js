import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text,  TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import logo from './assets/logo.png';

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null)


  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled === true){
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri});
  };


  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{uri: selectedImage.localUri}}
        style={styles.thumbnail}
        />
      </View>
    );
  }




  return (
    <View style={styles.container}>
      {/* <Image source={logo} style={{width: 305, height: 159}}/> */}
      
      <Image source = {{uri: "https://r1.ilikewallpaper.net/iphone-wallpapers/download/97528/Lofoten-Islands-Norway-Mountains-Sunrise-Free-4K-U-iphone-wallpaper-ilikewallpaper_com.jpg"}} style={styles.logo} />
      
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below
        </Text>
      <StatusBar style="auto" />

      <TouchableOpacity onPress={openImagePickerAsync}
      style={styles.button}>
      <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 305, 
    height: 159,
    marginBottom: 10
  },

  instructions: {
    color: '#888', 
    fontSize: 18,
    marginHorizontal: 15,
  },

  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },

  buttonText: {
    fontSize: 20, 
    color: '#fff',
  },

  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  }
});

