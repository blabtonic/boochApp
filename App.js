import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ActiveScreen from './screens/ActiveScreen';
import CompletedScreen from './screens/CompletedScreen';
import RecipeScreen from './screens/RecipeScreen';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

// move these to screen folder
const ActiveStack = createStackNavigator();
const CompletedStack = createStackNavigator();
const RecipeStack = createStackNavigator();

// move this to screen folder
function ActiveStackScreen() {
  return (
    <ActiveStack.Navigator>
      <ActiveStack.Screen
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
    </ActiveStack.Navigator>
  );
}

function CompletedStackScreen() {
  return (
    <CompletedStack.Navigator>
      <CompletedStack.Screen
        name="Completed"
        component={CompletedScreen}
        options={{
          title: 'Completed',
          headerStyle: {
            backgroundColor: '#2BBB8A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </CompletedStack.Navigator>
  );
}

function RecipeStackScreen() {
  return (
    <RecipeStack.Navigator>
      <RecipeStack.Screen
        name="Recipe"
        component={RecipeScreen}
        options={{
          title: 'Recipe',
          headerStyle: {
            backgroundColor: '#C3DDDD',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </RecipeStack.Navigator>
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
            name="Active"
            component={ActiveStackScreen}
            options={{
              tabBarLabel: 'Active',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="list" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Completed"
            component={CompletedStackScreen}
            options={{
              tabBarLabel: 'Completed',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="check" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Recipe"
            component={RecipeStackScreen}
            options={{
              tabBarLabel: 'Recipe',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="featured-play-list" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
