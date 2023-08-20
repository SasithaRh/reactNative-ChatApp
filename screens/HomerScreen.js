import { View, Text,StyleSheet,FlatList,Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import CustomeListtem from '../components/CustomeListtem'
import { Avatar, ListItem } from '@rneui/themed'
import { auth, db } from '../firebase/config'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign, EvilIcons } from '@expo/vector-icons'
import { useEffect } from 'react'



const HomerScreen = ({navigation}) => {

  const [chats,setChats] = useState([]);


  const signOut =()=>{
    auth.signOut().then(()=>{
        navigation.navigate("Login");
       })
}

useEffect(()=>{

const unsubribe = db.collection('Chat').onSnapshot(snapshot=>{
  setChats(snapshot.docs.map(doc =>({
    id:doc.id,
    data:doc.data()
  })))
})
return unsubribe;
},[])

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:"Chat App",
            headerBackTitle:"Chats",
            headerStyle : { backgroundColor:"green" },
            headerTitleStyle : {color:"white"},
            headerTintColor:"white",
            headerRight:()=>(
                <View style={{ flexDirection:'row',width:100,marginLeft:30 }}>
                   <TouchableOpacity activeOpacity={0.5} onPress={signOut}>
                   <AntDesign style={{ marginRight:20 }} name='camerao' size={24} color="white" />
                  
                   </TouchableOpacity>
                   <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate("AddChat")}>
                   <EvilIcons  name='pencil' size={30} color="white" />
                  
                   </TouchableOpacity>
                  
                </View>
        )
           
        })
    },[navigation])

    const enterChat=(id,chatName)=>{
      navigation.navigate("Chat",{
        id:id,
        chatName:chatName
      })
    }

  return (
   <SafeAreaView>
      <ScrollView style={styles.container}>
        {chats.map(({id,data:{chatName}})=>(
            <CustomeListtem key={id}  id={id} chatName={chatName} enterChat={enterChat}/>
        ))}
        
      </ScrollView>
   </SafeAreaView>
  )
}

export default HomerScreen
const styles = StyleSheet.create({
  container: {
   height:"100%"
  },
    
    });