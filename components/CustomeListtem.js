import { View, Text,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import { Avatar, ListItem } from '@rneui/themed'
import { auth } from '../firebase/config'
import { TouchableOpacity } from 'react-native-gesture-handler'
const CustomeListtem = ({id,chatName, enterChat,navigation}) => {
    
  return (
   
        
     <ListItem onPress={()=>enterChat(id,chatName)} key={id} style={{ marginTop:10 }}>
        <Avatar rounded source={require('../screens/image/icon-5359553_1280.webp')}/>
     <ListItem.Content>
            <ListItem.Title style={{fontWeight:'800'  }}>
                {chatName}
            </ListItem.Title>
            <ListItem.Subtitle numberOfLines={2}>
                    dfdf
            </ListItem.Subtitle>
     </ListItem.Content>

     </ListItem>
   
  )
}

export default CustomeListtem
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
        marginTop:200,
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