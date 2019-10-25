import React from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import LottieView from "lottie-react-native";

import rocket from './rocket.json';

export default function App() {
  function clickButton() {
    alert('Funcionando o Click!!');
  };
  
  return (
    <SafeAreaView style={styles.Container}>
      <LottieView source={rocket} autoSize autoPlay loop />
      <Text style={styles.text}> Testando a biblioteca Lottie, animações com AfterEfects</Text>
      <TouchableOpacity style={styles.button} onPress={() => {clickButton()}}> 
        <Text style={styles.textTouch}>
          Click
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#7259c1',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    paddingTop: 100,
    fontSize: 15,
    color: '#fff'
  },
  textTouch: {
    fontSize: 30,
    color: '#7259c1'
  },
  button: {
    marginTop: 100,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
})
