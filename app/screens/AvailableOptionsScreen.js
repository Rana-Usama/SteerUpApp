import React, { useState } from 'react';
import { Text, View, ImageBackground, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Octicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function AvailableOptionsScreen(props) {

    const data = [
        {
            mainTitle: 'Domestic Agents',
            subTitle: '(Export broker, agents, Sales Representatives, EMC, Coorporative Exporter, Purchasing/Buying agents)'
        },
        {
            mainTitle: 'Domestic Merchants',
            subTitle: '(Exporter, Shipper, Distributor,Trading Company)'
        },

    ]

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
                            List of  available options:
                        </Text>
                    </View>
                    {/* Scroll View starts */}
                    <ScrollView style={{ backgroundColor: Colors.white, flex: 1, width: '100%' }} >
                        {/* List */}
                        {data.map((item, i) => (
                            <View key={i} style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(5) }}>
                                <TouchableOpacity onPress={() => props.navigation.navigate("AgreementTypeScreen")} style={{ width: '80%', flexDirection: 'row', alignItems: "center", justifyContent: 'flex-start' }}>
                                    <Octicons name="primitive-dot" style={{ fontSize: RFPercentage(3), marginRight: RFPercentage(2) }} color={Colors.secondary} />
                                    <Text style={{ fontSize: RFPercentage(2.8) }}>
                                        {item.mainTitle}
                                    </Text>
                                </TouchableOpacity>
                                <View style={{ width: '80%', alignItems: "center", justifyContent: 'flex-start', marginLeft: RFPercentage(3) }}>
                                    <Text style={{ fontSize: RFPercentage(1.7) }}>
                                        {item.subTitle}
                                    </Text>
                                </View>
                            </View>
                        ))}
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

export default AvailableOptionsScreen;