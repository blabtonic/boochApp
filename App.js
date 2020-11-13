import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ActiveScreen from './screens/ActiveScreen';
import CompletedScreen from './screens/CompletedScreen';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// move this to screen folder
function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Active"
        component={ActiveScreen}
        options={{
          title: 'Active',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Active"
          tabBarOptions={{
            activeTintColor: '#AA1075',
          }}
        >
          <Tab.Screen
            name="Header"
            component={StackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="list" size={size} color={color} />
              ),
            }}
          />
          {/* <Tab.Screen
            name="Active"
            component={ActiveScreen}
            options={{
              tabBarLabel: 'Active',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="list" size={size} color={color} />
              ),
            }}
          /> */}
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
