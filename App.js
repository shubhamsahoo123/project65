import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image,ExpoFont
} from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  speak = () => {
    var thingToSay = this.state.name;
    this.state.name === ''?
    alert("Please enter a word. You won't hear the word by leaving it blank :)"):
    Speech.speak(thingToSay);
  };

  render() {
    return (
      <View style={styles.textContainer1}>
        <Header
          backgroundColor={'pink'}
          centerComponent={{
            text: 'Text To Speech Converter',
            style: { color: 'black', fontSize: 15, fontWeight: 700 },
          }}
        />

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://itchronicles.com/wp-content/uploads/2020/10/speech-to-text-1024x683.jpg',
          }}
        />

        <Text style={styles.text2}> Enter The Word </Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.text}
        />

        <View>
          <TouchableOpacity style={styles.button} onPress={this.speak}>
            <Text style={styles.text2}> Click Here To Hear Speech </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  textContainer1: {
    backgroundColor: '#3e737a',
    flex: 1,
    justifyContent: 'center',
  },

  text2: {
    color: 'black',

    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'bold',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  button: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#eb4034',
    marginTop: 80,
    borderRadius: 50,
    width: '80%',
    alignSelf: 'center',
    height: 80,
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
});
