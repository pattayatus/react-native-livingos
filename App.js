import React from 'react';
import {Text, View, Image} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Ionicons } from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './component/HomeScreen';
import LoginScreen from './component/LoginScreen';
import MapScreen from './component/MapScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

 function Home() {
  return (
    
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ }) => {
            if (route.name === 'Home') {
              return (
               <Image  style={{weight:20, height:30 }} source={require('./img/home2.png')}/>
  //               
              );
            } else if (route.name === 'Login') {
              return (
                <Image style={{weight:20, height:30 }} source={require('./img/login.png')}/>
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
  );
}

 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false,}} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="map" component={MapScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
