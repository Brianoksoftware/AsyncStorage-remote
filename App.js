//import React from 'react';
import {useState, useEffect} from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function App() {

  const [name, setName] = useState();

  const save = async () => {
    try{
      await AsyncStorage.setItem("MyName", name);
      console.log('Data stored successfully!');
    }catch (err){
      alert(err);
    }

  }

  const load = async () => {
    try{
      let name = await AsyncStorage.getItem("MyName");
      
      if(name !== null){
        setName(name);
      }
    }catch(err){
      alert(err);
    }
  }

  useEffect(() => {
    load()
  }, []);

  return (
    <View style={styles.container}>
    <Image 
        source = {require("./assets/christmas-wreath.png")} 
        style={{width:'100%', height:200, marginTop:64}}
        resizeMode="contain"
      />
      
      <Text style={{height:30, marginVertical:10}}>{name}</Text>

      <Text style={styles.name}>What's yourmm name?</Text>

      <TextInput style={styles.input} onChangeText={text => setName(text)}/>

      <TouchableOpacity style={styles.button} onPress={() => save()}> 
        <Text style={{color:"white"}}>Save my name</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress = {() => load()}> 
        <Text style={{color:"white"}}>Remove my name</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name:{
    fontSize:24,
    //fontWeight:"330", 
    marginBottom:5
  },

  input:{
    borderWidth:1,
    borderColor:"#000",
    alignSelf: "stretch",

    marginHorizontal:32,
    height:70,
    borderRadius:6,
    paddingHorizontal:16,
    fontSize:24,
    //fontWeight:300

  },
  
  button:{
    backgroundColor:"#575DD9",
    alignItems: "center",
    justifyContent:"center",
    alignSelf:"stretch",
    paddingVertical:12,
    paddingHorizontal:32,
    borderRadius: 6,
    marginHorizontal: 32,
    marginVertical:12, 
    height:50

  }
  
  
});
