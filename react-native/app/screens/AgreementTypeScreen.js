import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, ScrollView, StatusBar } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import ReactNativeCrossPicker from "react-native-cross-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';
import MyAppButton from './../components/common/MyAppButton';
import MyAppbar from '../components/common/MyAppbar';
import HelpButton from '../components/common/HelpButton';

function AgreementTypeScreen(props) {

    const [selectedItem, setItem] = useState('')

    const items = [
        { label: "Joint Venture", value: "Joint Venture" },
        { label: "Exporting", value: "Exporting" },
        { label: "Assembly Operations", value: "Assembly Operations" },
        { label: "Direct Investments", value: "Direct Investments" },
        { label: "Management Contracts", value: "Management Contracts" },
        { label: "Turnkey Operations", value: "Turnkey Operations" },
        { label: "Licensing", value: "Licensing" },
        { label: "Manufacturing", value: "Manufacturing" },
        { label: "Acquistions", value: "Acquistions" },
        { label: "Strategic Alliances", value: "Strategic Alliances" },

    ]

    const iconComponent = () => {
        return <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={"grey"}
        />
    }

    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.white }}>
                    <StatusBar barStyle="dark-content" />

                    {/* App bar */}
                    <MyAppbar />
                    {/* Main Heading */}
                    <View style={{ marginTop: RFPercentage(0), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <Text style={{ fontSize: RFPercentage(3.4) }}>
                            Choose your agreement types
                        </Text>
                    </View>
                    {/* Scroll View starts */}
                    <ScrollView style={{ backgroundColor: Colors.white, flex: 1, width: '100%' }} >
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
                                modalMarginTop={"100%"}
                            />
                        </View>

                        {/* Button */}
                        <View style={{ width: "100%", justifyContent: 'center', alignItems: "center", marginTop: RFPercentage(4.2) }}>
                            <MyAppButton
                                title="NEXT"
                                bold={true}
                                borderRadius={RFPercentage(2)}
                                padding={RFPercentage(1.5)}
                                onPress={() => props.navigation.navigate("LegalDocumentsScreen")}
                                backgroundColor={Colors.secondary}
                                color={Colors.white}
                                width={"55%"}
                            />
                        </View>
                    </ScrollView>

                    {/* Bottom right text button for help */}
                    <HelpButton />
                </Screen>
            </KeyboardAvoidingView>
        </>
    );
}

export default AgreementTypeScreen;