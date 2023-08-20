import { View, Text,StyleSheet,FlatList } from 'react-native'
import React, { useState } from 'react'
import { Button ,createTheme ,Image} from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { Input } from '@rneui/base';
import { KeyboardAvoidingView } from 'react-native';
import { auth } from '../firebase/config';
const RegisterScreen = ({navigation}) => {

  const [name,setName] =useState("");
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const [imageUri,setImageUri] =useState("");


const register =()=>{
  auth.createUserWithEmailAndPassword(email,password)
  .then((authUser)=>{
    authUser.user.updateProfile({
      displayName:name,
      photoURL:imageUri
    })
  })
  .catch((error)=>alert(error.message));
}
  return (
    <KeyboardAvoidingView behavior='padding' styles={styles.container} >
        <StatusBar style='light' />
      
        <View style={styles.inputContainer}>
           <Input 
           placeholder='Full Name'
           autoFocus
           type="text"
           value={name}
           onChangeText={(text)=>{setName(text)}}
           />
            <Input 
           placeholder='Email'
           value={email}
           type="email"
           onChangeText={(text)=>{setEmail(text)}}
           />
             <Input 
           placeholder='Password'
           value={password}
           type="password"
           onChangeText={(text)=>{setPassword(text)}}
           />
             <Input 
           placeholder='Profile picture'
           value={imageUri}
           type="text"
           onChangeText={(text)=>{setImageUri(text)}}
           onSubmitEditing={register}
           />
        </View>
      
     
        

      <Button color="warning"  
      
      containerStyle={{
                width: 200,
                marginHorizontal: 100,
                marginVertical: 10,
              }} spacing={4} onPress={register} title="Register" />
      <Button containerStyle={{
                width: 200,
                marginHorizontal: 100,
                marginVertical: 10,
              }} type='outline'  title="Login" onPress={()=>navigation.navigate("Login")}/>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen;
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
      marginTop:100,
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
    }
    });


 