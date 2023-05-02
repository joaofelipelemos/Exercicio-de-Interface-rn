import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <View style={styles.textContainer}>
        <Text style={styles.title}>Encontre o espaço ideal pra você</Text>
        <Text style={styles.subtitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique odio ab provident obcaecati.</Text>
        <Image 
          style={styles.hero_front} 
          source={require('./src/img/hero_front.png')} 
        />
      </View>
        </View>
    <TouchableOpacity style={styles.btn_front}>
      <Text style={styles.btn_text}>Clique e saiba mais</Text>
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
  textContainer:{
    padding: 20
  },
  
  title:{
    fontSize: 30,
    textAlign: 'justify'
  },
  subtitle:{
    fontSize: 18,
    textAlign: 'justify',

  },
  hero_front:{
    width: 300,
    height: 300,
    margin: 10
  },
  btn_front:{
    backgroundColor: 'black',
    height: 50,
    width: '50%',

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 30,

    borderRadius: 8
  },
  btn_text:{
    color: 'white',
    fontSize: 20
  }
});
