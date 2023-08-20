import { View, Text , StyleSheet} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign, EvilIcons } from '@expo/vector-icons'
import { Icon, Input } from '@rneui/base';
import { Button ,createTheme ,Image} from '@rneui/themed';
import { db } from '../firebase/config';

const AddChatScreen = ({navigation}) => {

  const [input,setInput] = useState("");
    
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:" New Chat",
            headerStyle : { backgroundColor:"green" },
            headerTitleStyle : {color:"white"},
            headerTintColor:"white",
     
           
        })
    })

    const createChat= async ()=>{
      await db.collection('Chat').add ({
           chatName:input,
           
          }).then(()=>{
            navigation.goBack()
          }).catch((error)=>alert(error));
    }

  return (
    <View style={styles.inputContainer}>
    <Input 
           placeholder='Enter a Chat Name'
           autoFocus
           type="email"
           value={input}
           onChangeText={(text)=>{setInput(text)}}
           leftIcon={
            <Icon name="wechat" type='antdesign' size={24} color='black' />
           }
           />
     <Button containerStyle={{
                width: 150,
                marginHorizontal: 100,
              
              }} type='outline'  title="Create" onPress={createChat}/>
          
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    alignItems:'center'
  },
  inputContainer:{
    
   
    justifyContent:'center',
    
  },
 
});