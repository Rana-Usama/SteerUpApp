import React from 'react';
import { Text } from 'react-native'

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function TypeIndustryScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.white }}>
            <Text>Here we go!</Text>
        </Screen>
    );
}

export default TypeIndustryScreen;