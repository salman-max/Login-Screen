import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import { LinearGradient } from 'expo-linear-gradient';
import TodoList from './Component/TodoList';



export default function App() {

return (
<View style = {styles.container}>

<TodoList/>



</View>

);



}






const styles = StyleSheet.create({
  container: {
    marginTop:Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#b002fa',
    flexDirection:'row',
  
    justifyContent:'center'

  }
});
