import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//components
import TypeIndustryScreen from './app/screens/TypeIndustryScreen';
import EmergingMarketsScreen from './app/screens/EmergingMarketsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="TypeIndustryScreen">
        <Stack.Screen name="TypeIndustryScreen" component={TypeIndustryScreen} />
        <Stack.Screen name="EmergingMarketsScreen" component={EmergingMarketsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

