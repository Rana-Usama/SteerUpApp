import React, { useState } from 'react';
import { Text, View, ImageBackground, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import MyAppbar from '../components/common/MyAppbar';
import HelpButton from '../components/common/HelpButton';

//config
import Colors from '../config/Colors';

function EmergingMarketsScreen(props) {


    const [listData, setListData] = useState([
        {
            listTitle: 'India',

        },
        {
            listTitle: 'Pakistan',

        },
        {
            listTitle: 'America',

        },
        {
            listTitle: 'China',

        },
        {
            listTitle: 'Jappan',

        },
        {
            listTitle: 'Russia',
        },
        {
            listTitle: 'UK',
        },
        {
            listTitle: 'Newzeland',
        },
        {
            listTitle: 'Canada',
        },
    ])


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
                        {/* <FontAwesome name="industry" style={{ marginRight: RFPercentage(2), fontSize: RFPercentage(2.8), color: '#025e6c' }} color="black" /> */}
                        <Text style={{ fontSize: RFPercentage(3.4) }}>
                            Emerging markets lists (BRICS)
                        </Text>
                        <Text style={{ fontSize: RFPercentage(3.2) }}>

                        </Text>
                    </View>
                    {/* Scroll View starts */}
                    <ScrollView style={{ backgroundColor: Colors.white, flex: 1, width: '100%' }} >
                        {/* List */}
                        {listData.map((item, i) => (
                            <TouchableOpacity key={i} style={{ marginLeft: RFPercentage(6), flexDirection: 'row', alignItems: "center", justifyContent: 'flex-start' }}>
                                <View style={{ width: '100%', alignItems: 'flex-start', justifyContent: 'flex-start', marginRight: RFPercentage(20) }}>
                                    <TouchableOpacity onPress={() => props.navigation.navigate("ChooseEntryModeScreen")} style={{ height: RFPercentage(6), width: '100%', flexDirection: 'row', marginTop: i === 0 ? RFPercentage(5) : RFPercentage(3), justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <Octicons name="primitive-dot" style={{ fontSize: RFPercentage(3), marginRight: RFPercentage(2) }} color={Colors.secondary} />
                                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.7) }}>
                                            {item.listTitle}
                                        </Text>
                                        {/* <Ionicons name="checkmark-circle" style={{ fontSize: RFPercentage(3), position: 'absolute', right: RFPercentage(2) }} color={Colors.primary} /> */}
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        ))}
                        <View style={{ marginBottom: RFPercentage(15) }}></View>
                    </ScrollView>
                    {/* Bottom right text button for help */}
                    <HelpButton />
                </Screen>
            </KeyboardAvoidingView>
        </>
    );
}

export default EmergingMarketsScreen;