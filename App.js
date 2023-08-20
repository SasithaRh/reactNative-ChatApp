import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
// You can import from local files
import AssetExample from './components/AssetExample';
import { NavigationContainer } from '@react-navigation/native';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomerScreen from './screens/HomerScreen';

import CustomeListtem from './components/CustomeListtem';
import AddChatScreen from './screens/AddChatScreen';
import ChatScreen from './screens/ChatScreen';


const Stack = createStackNavigator();
const globalScreenOption = {
  headerStyle : { backgroundColor:"#2c6bed" },
  headerTitleStyle : {color:"white"},
  headerTintColor:"white",
 
  

}
export default function App() {
  return (
  <NavigationContainer>
     <Stack.Navigator screenOptions={globalScreenOption}> 
      <Stack.Screen name="Login"   component={LoginScreen} />
      <Stack.Screen name="Register"  component={RegisterScreen} />
      <Stack.Screen name="Home"  component={HomerScreen} />
      <Stack.Screen name="AddChat"  component={AddChatScreen} />
      <Stack.Screen name="Chat"  component={ChatScreen} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    alignItems:'center'
  },
 
});
