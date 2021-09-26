import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Contacts from './src/pages/Contacts'
import Information from './src/pages/Information'
import AppContacts from './src/pages/AppContacts'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Stacks(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="AppContacts" component={AppContacts} />
      <Stack.Screen name="Information" component={Information} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="AppContacts" component={Stacks}/>
        <Tab.Screen name="Contacts" component={Contacts} />
      </Tab.Navigator>
    </NavigationContainer> 
  );
}