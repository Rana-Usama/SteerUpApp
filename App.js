import React from 'react';
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RFPercentage } from 'react-native-responsive-fontsize';

//custom fonts
import { Philosopher_700Bold, useFonts } from "@expo-google-fonts/philosopher";

//Screens
import TypeIndustryScreen from './app/screens/TypeIndustryScreen';
import EmergingMarketsScreen from './app/screens/EmergingMarketsScreen';
import ChooseEntryModeScreen from './app/screens/ChooseEntryModeScreen';
import AvailableOptionsScreen from './app/screens/AvailableOptionsScreen';
import AgreementTypeScreen from './app/screens/AgreementTypeScreen';
import LegalDocumentsScreen from './app/screens/LegalDocumentsScreen';
import MigrationScreen from './app/screens/MigrationScreens';

//config
import Colors from './app/config/Colors';
import AdditionalInformationScreen from './app/screens/AdditionalInformationScreen';

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
        <Stack.Screen name="ChooseEntryModeScreen" component={ChooseEntryModeScreen} />
        <Stack.Screen name="AvailableOptionsScreen" component={AvailableOptionsScreen} />
        <Stack.Screen name="AgreementTypeScreen" component={AgreementTypeScreen} />
        <Stack.Screen name="LegalDocumentsScreen" component={LegalDocumentsScreen} />
        <Stack.Screen name="MigrationScreen" component={MigrationScreen} />
        <Stack.Screen name="AdditionalInformationScreen" component={AdditionalInformationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

