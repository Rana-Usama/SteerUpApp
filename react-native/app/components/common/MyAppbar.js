import React from 'react';
import { ImageBackground, View, Text } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../../config/Colors';

function MyAppbar(props) {
    return (
        <ImageBackground style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: RFPercentage(38) }} source={require('../../../assets/Images/top.png')}>
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
    );
}

export default MyAppbar;