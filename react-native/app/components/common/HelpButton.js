import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

function HelpButton(props) {
    return (
        <TouchableOpacity style={{ width: '100%' }}>
            <View style={{ position: 'absolute', bottom: RFPercentage(2), right: RFPercentage(3) }} >
                <Text style={{ color: '#12424a', fontSize: RFPercentage(2.1) }}>Documentation For Help</Text>
            </View>
        </TouchableOpacity>
    );
}

export default HelpButton;