import React from 'react';
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//custom fonts
import { Philosopher_700Bold, useFonts } from "@expo-google-fonts/philosopher";

//components
import TypeIndustryScreen from './app/screens/TypeIndustryScreen';
import EmergingMarketsScreen from './app/screens/EmergingMarketsScreen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from './app/config/Colors';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Philosopher_700Bold,

  })

  if (!fontsLoaded) return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
    <ActivityIndicator size={RFPercentage(6)} color={Colors.primary} />
  </View>

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="TypeIndustryScreen">
        <Stack.Screen name="TypeIndustryScreen" component={TypeIndustryScreen} />
        <Stack.Screen name="EmergingMarketsScreen" component={EmergingMarketsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

