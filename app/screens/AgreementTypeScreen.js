import React, { useState } from 'react';
import { Text, View, ImageBackground, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import ReactNativeCrossPicker from "react-native-cross-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';
import MyAppButton from './../components/common/MyAppButton';

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
                    {/* Top Image */}
                    <ImageBackground style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: RFPercentage(38) }} source={require('../../assets/Images/top.png')}>
                        <View style={{ backgroundColor: Colors.white, position: 'absolute', bottom: 0, width: '100%', height: RFPercentage(6), borderTopLeftRadius: RFPercentage(3), borderTopRightRadius: RFPercentage(3) }}>
                        </View>
                        <View style={{ marginBottom: RFPercentage(6), alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Philosopher_700Bold', color: Colors.white, fontSize: RFPercentage(6.5) }}>
                                Steer Up
                            </Text>
                            <Text style={{ fontWeight: '200', color: "#FFF", fontSize: RFPercentage(2), marginTop: RFPercentage(0.5) }}>
                                B2B online platform to connect
                            </Text>
                            <Text style={{ fontWeight: '200', color: "#FFF", fontSize: RFPercentage(2), marginTop: RFPercentage(0) }}>
                                businesses Across borders
                            </Text>
                        </View>
                    </ImageBackground>
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
                    <TouchableOpacity style={{ position: 'absolute', bottom: RFPercentage(1.5), right: RFPercentage(2) }} >
                        <Text style={{ color: Colors.secondary }}>Documentation For Help</Text>
                    </TouchableOpacity>
                </Screen>
            </KeyboardAvoidingView>
        </>
    );
}

export default AgreementTypeScreen;