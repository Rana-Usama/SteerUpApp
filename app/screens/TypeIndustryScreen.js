import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

function TypeIndustryScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.white }}>
            {/* Top Image */}
            <ImageBackground style={{ alignItems: 'center', justifyContent: 'flex-start', width: '100%', height: RFPercentage(38) }} source={require('../../assets/Images/top.png')}>
                <View style={{ backgroundColor: Colors.white, position: 'absolute', bottom: 0, width: '100%', height: RFPercentage(6), borderTopLeftRadius: RFPercentage(3), borderTopRightRadius: RFPercentage(3) }}>
                </View>
                <View style={{ marginTop: RFPercentage(6.5), alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: 'Philosopher_700Bold', color: Colors.white, fontSize: RFPercentage(6) }}>
                        Steer Up
                    </Text>
                    <Text style={{ fontWeight: 'bold', color: "#FFF", fontSize: RFPercentage(1.9), marginTop: RFPercentage(1.4) }}>
                        B2B online platform to connect
                    </Text>
                    <Text style={{ fontWeight: 'bold', color: "#FFF", fontSize: RFPercentage(1.9), marginTop: RFPercentage(0.2) }}>
                        businesses Across borders
                    </Text>
                </View>
            </ImageBackground>

            {/* Main Heading */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <FontAwesome name="industry" style={{ fontSize: RFPercentage(2.8), color: '#025e6c' }} color="black" />
                <Text style={{ marginLeft: RFPercentage(2), fontSize: RFPercentage(3.7) }}>Type Your Industry</Text>
            </View>
            {/* Input Field */}

        </Screen>
    );
}

export default TypeIndustryScreen;