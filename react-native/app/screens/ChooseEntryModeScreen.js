import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import ReactNativeCrossPicker from "react-native-cross-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import MyAppbar from '../components/common/MyAppbar';

//config
import Colors from '../config/Colors';

function ChooseEntryModeScreen(props) {

    const [selectedItem, setItem] = useState('')

    const items = [
        { label: "Direct", value: "Direct" },
        { label: "Indirect", value: "Indirect" },

    ]

    const iconComponent = () => {
        return <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={"grey"}
        />
    }


    return (

        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.white }}>
            <StatusBar barStyle="dark-content" />

            {/* App bar */}
            <MyAppbar />

            {/* Main Heading */}
            <View style={{ marginTop: RFPercentage(6), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                {/* <FontAwesome name="industry" style={{ marginRight: RFPercentage(2), fontSize: RFPercentage(2.8), color: '#025e6c' }} color="black" /> */}
                <Text style={{ fontSize: RFPercentage(3.9) }}>
                    Choose Your Entry Mode
                </Text>
            </View>
            {/* Picker */}
            <View style={{ marginTop: RFPercentage(8), width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <ReactNativeCrossPicker
                    modalTextStyle={{ color: "rgb(0, 74, 173)" }}
                    mainComponentStyle={{ width: "85%", borderWidth: 0, backgroundColor: Colors.inputFieldBackgroundColor }}
                    modalComponentStyle={{ borderRadius: RFPercentage(3), backgroundColor: Colors.white, borderColor: Colors.grey, borderWidth: RFPercentage(0.1) }}
                    iconComponent={iconComponent}
                    placeholderStyle={{ color: "black" }}
                    modalTextStyle={{ color: "#12424a", fontSize: RFPercentage(2.6), fontWeight: 'bold' }}
                    items={items}
                    setItem={setItem} selectedItem={selectedItem}
                    placeholder="Tap to choose"
                    modalMarginTop={"45%"}
                />
            </View>

            {/* Button */}
            <View style={{ width: "100%", justifyContent: 'center', alignItems: "center", marginTop: RFPercentage(4.2) }}>
                <MyAppButton
                    title="NEXT"
                    bold={true}
                    borderRadius={RFPercentage(2)}
                    padding={RFPercentage(1.5)}
                    onPress={() => props.navigation.navigate("AvailableOptionsScreen")}
                    backgroundColor={Colors.secondary}
                    color={Colors.white}
                    width={"55%"}
                />
            </View>

            {/* Bottom right text button for help */}
            <TouchableOpacity style={{ position: 'absolute', bottom: RFPercentage(1.5), right: RFPercentage(2) }} >
                <Text style={{ color: '#12424a' }}>Documentation For Help</Text>
            </TouchableOpacity>
        </Screen>

    );
}

export default ChooseEntryModeScreen;