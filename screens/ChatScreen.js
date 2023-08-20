import { View, Text,StyleSheet,FlatList,Image, Keyboard } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import CustomeListtem from '../components/CustomeListtem'
import { Avatar, ListItem } from '@rneui/themed'
import { auth, db } from '../firebase/config'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign, EvilIcons,MaterialIcons ,FontAwesome ,Entypo, Ionicons   } from '@expo/vector-icons'
import { useEffect } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Input ,Icon} from '@rneui/base'
import firebase from "firebase/compat"

const ChatScreen = ({navigation,route}) => {


    const signOut =()=>{
        auth.signOut().then(()=>{
            navigation.navigate("Login");
           })
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:route.params.chatName,
            headerBackTitle:"Chats",
            headerStyle : { backgroundColor:"green" },
            headerTitleStyle : {color:"white"},
            headerTintColor:"white",
            headerRight:()=>(
                <View style={{ flexDirection:'row',width:110 }}>
                   <TouchableOpacity activeOpacity={0.5} onPress={signOut}>
                   <FontAwesome   style={{ marginRight:20 }} name='video-camera' size={24} color="white" />
                  
                   </TouchableOpacity>
                   <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate("AddChat")}>
                   <MaterialIcons   name='call' size={25} color="white" style={{ marginRight:8 }} />
                  
                   </TouchableOpacity>
                   <TouchableOpacity activeOpacity={0.5} onPress={signOut}>

                   <Entypo name="dots-three-vertical" size={24} color="white" />
                   </TouchableOpacity>
                </View>
        )
           
        })
    },[navigation])

    const [input,setInput] = useState("");

    const sendMessage = () =>{
        Keyboard.dismiss();

        db.collection('Chat').doc(route.params.id).collection('messages').add({
          timestamp:firebase.firestore.FieldValue.serverTimestamp(),
          message:input,
          displayName:auth.currentUser.displayName,
          email:auth.currentUser.email
    })
    setInput('')
  }

  const [messages,setMessages] = useState([]);

  useLayoutEffect(()=>{
    const unSusbcribe = db.collection('Chat')
    .doc(route.params.id).collection('messages')
    .orderBy('timestamp','asc')
    .onSnapshot((snapShot)=>
    setMessages(snapShot.docs.map(doc =>({
        id:doc.id,
        data:doc.data()
      }))
      ))
      return unSusbcribe;
    },[route]);
  

  return (
    <SafeAreaView style={{ flex:1,backgroundColor:"white" }}>
       
      <KeyboardAvoidingView behavior='height' style={styles.container} keyboardVerticalOffset={130}>
        <ScrollView style={{ marginTop:20 }}> 
          {messages.map(({id,data})=>(
            data.email ===  auth.currentUser.email ? (
                <View key={id} style={styles.receiver}>
                 
                  <Text style={styles.recieverText}>{data.message}</Text>
                  <Avatar rounded source={require('../screens/image/icon-5359553_1280.webp')}/>
                </View>
            ):(
              <View style={styles.sender}>
                 <Avatar rounded source={require('../screens/image/icon-5359553_1280.webp')}/>
                  <Text style={styles.senderText}>{data.message}</Text>
              </View>
            )
          ))}
        </ScrollView>
        <View style={styles.footer}>
        <TextInput 
           placeholder=' Message'
           autoFocus
           type="email"
           style={styles.textInput}
            value={input}
            onChangeText={(text)=>{setInput(text)}}
            onSubmitEditing={sendMessage}
           />  
           <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
              <Ionicons  name='send' size={30} color="blue" />
           </TouchableOpacity>
        </View>
        
      </KeyboardAvoidingView>
           
      
    </SafeAreaView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
   footer:{
    flexDirection:"row",
    alignItems:"center",
    width:"95%",
    
   },
   textInput:{
      bottom:0,
      paddingLeft:10,
      flex:1,
      marginRight:10,
      marginLeft:15,
      borderColor:"transparent",
      backgroundColor:"#ECECEC",
      borderWidth:10,
      color:"gray",
      borderRadius:30,
      fontSize:20,
      fontWeight:"600",
      textDecorationColor:'red',
      color:'black'
   },
   receiver:{
    padding:15,
    backgroundColor:"#ECECEC",
    alignSelf:"flex-end",
    borderRadius:20,
    marginRight:15,
    marginBottom:20,
    maxWidth:"80%",
    position:"relative",
    flexDirection:"row",
   },
   recieverText:{
      marginRight:10,
      marginTop:5,
      fontWeight:600,
      fontSize:20
   },
   sender:{
    padding:15,
    backgroundColor:"#ECECEC",
    alignSelf:"flex-start",
    borderRadius:20,
    marginLeft:15,
    marginBottom:20,
    maxWidth:"80%",
    position:"relative",
    flexDirection:"row",
   },
   senderText:{
    marginLeft:10,
    marginTop:5,
    fontWeight:600,
    fontSize:20
 },
  });