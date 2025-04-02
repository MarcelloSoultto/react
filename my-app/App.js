import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Olá Mundo!</Text>
      <Image source={require('./assets/icon.png')} style={styles.logo1} />
      <Button title='Aperte-me' />
      <Text style={styles.text2}>Férias!!!!</Text>

      <TextInput placeholder='Digita ae:' style={styles.input} />

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89CFF0',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo1:{
    width:100,
    height:100,
    marginBottom:20,
    opacity:0.8,
  },
text1: {
  color:'green',
  fontFamily:'arial',
  fontWeight:'bold',
},
logo2:{
  opacity:1,
  width:100,
  height:100,
},
text2:{
  color:'white',
  fontWeight:'bold',
},
input:{
  color: 'red',
  fontWeight:'bold',
  borderRadius: 5,
  width:300,
  height: 40,
  fontSize:10,
  borderWidth:1,
borderColor:'gray',
paddingHorizontal:10,
marginBottom: 20,
},
logo3:{
  width:100,
  height:100,
  marginBottom:20,
  opacity:0.8,
},
});
