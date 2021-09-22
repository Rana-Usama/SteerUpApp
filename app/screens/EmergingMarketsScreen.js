import React, { useState } from 'react';
import { Text, View, ImageBackground, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function EmergingMarketsScreen(props) {

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
                    {/* Scroll View starts */}
                    <ScrollView style={{ backgroundColor: Colors.backgroundColor, flex: 1, width: '100%' }} >
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}  >

                            {/* Main Heading */}
                            <View style={{ marginTop: RFPercentage(10), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <FontAwesome name="industry" style={{ marginRight: RFPercentage(2), fontSize: RFPercentage(2.8), color: '#025e6c' }} color="black" />
                                <Text style={{ fontSize: RFPercentage(3.9) }}>
                                    Type Your Industry
                                </Text>
                            </View>


                            {/* Button */}
                            <View style={{ width: "100%", justifyContent: 'center', alignItems: "center", marginTop: RFPercentage(4) }}>
                                <MyAppButton
                                    title="SEARCH"
                                    bold={true}
                                    borderRadius={RFPercentage(2)}
                                    padding={RFPercentage(1.5)}
                                    onPress={() => handleLogin()}
                                    backgroundColor={"#12424a"}
                                    color={Colors.white}
                                    width={"55%"}
                                />
                            </View>

                        </View>
                    </ScrollView>
                    {/* Bottom right text button for help */}
                    <TouchableOpacity style={{ width: '100%' }}>
                        <View style={{ position: 'absolute', bottom: RFPercentage(1.5), right: RFPercentage(2) }} >
                            <Text style={{ color: '#12424a' }}>Documentation For Help</Text>
                        </View>
                    </TouchableOpacity>
                </Screen>
            </KeyboardAvoidingView>
        </>
    );
}

export default EmergingMarketsScreen;