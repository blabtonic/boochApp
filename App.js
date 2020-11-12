import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActiveScreen from './screens/ActiveScreen';
import CompletedScreen from './screens/CompletedScreen';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Active"
          tabBarOptions={{
            activeTintColor: '#1d1075',
          }}
        >
          <Tab.Screen
            name="Active"
            component={ActiveScreen}
            options={{
              tabBarLabel: 'Active',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="list" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Completed"
            component={CompletedScreen}
            options={{
              tabBarLabel: 'Completed',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="check" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
