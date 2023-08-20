
import { View, Text,StyleSheet,FlatList,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button ,createTheme } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { Input } from '@rneui/base';
import { KeyboardAvoidingView } from 'react-native';
import { auth,addDoc,collection, db} from '../firebase/config';



const LoginScreen = ({navigation}) => {

const [email,setEmail] =useState("");
const [password,setPassword] =useState("");

// const addTodo = async () =>{

//   try {
//   const docRef = await addDoc(collection(db, "Users"), {
//    mail:email,
//    password:password,
//   });
//   console.log("Document written with ID: ");

// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// }
useEffect(()=>{
 const unSusbcribe = auth.onAuthStateChanged((authUser)=>{
  
      if(authUser){
        
        navigation.replace("Home");
      }
  });

  return unSusbcribe;
  
},[]);

const signIn =()=>{
auth.signInWithEmailAndPassword(email,password)
.then((authUser)=>{
  navigation.navigate("Home");
  })
.catch((error)=>alert(error.message));

}
  return (
    <KeyboardAvoidingView behavior='height' styles={styles.container} >
        <StatusBar style='light' />
        <Image
            source={require('../screens/image/download.png')}
            style={styles.item}
           
          />
        <View style={styles.inputContainer}>
           <Input 
           placeholder='Email'
           autoFocus
           type="email"
           onChangeText={(text)=>{setEmail(text)}}
           />
            <Input 
           placeholder='Password'
           
           type="outline"
           onChangeText={(text)=>{setPassword(text)}}
           />
        </View>
   
     
        

      <Button color="warning"   
      containerStyle={{
                width: 200,
                marginHorizontal: 100,
                marginVertical: 10,
              }} spacing={4} onPress={signIn} title="Login" />
      <Button containerStyle={{
                width: 200,
                marginHorizontal: 100,
                marginVertical: 10,
              }} type='outline'  title="Register" onPress={()=>navigation.navigate("Register")}/>
              <Button containerStyle={{
                width: 200,
                marginHorizontal: 100,
                marginVertical: 10,
              }} type='outline'  title="Home" onPress={()=>navigation.navigate("Home")}/>
               
    </KeyboardAvoidingView>
  )
}

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems:'center'
  },
    list: {
      width: '100',
      backgroundColor: '#000',
    },
    item: {
      aspectRatio: 1,
      width: '100%',
      flex: 1,
    },
    inputContainer:{
      width:300,
     
      justifyContent:'center',
      marginLeft:60
    },
    button:{
      width:50,
      marginTop:10,
      alignItems:'center',
      
    },
    text:{
      color:'red'
    },
    item:{
      width:100,
      height:100,
      justifyContent:'center',
      alignItems:'center',
      marginHorizontal:120,
      marginVertical:70
    }
    });


 