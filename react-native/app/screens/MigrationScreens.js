import React, { useState } from 'react';
import { Text, View, ImageBackground, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage"

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import MyAppbar from '../components/common/MyAppbar';
import HelpButton from '../components/common/HelpButton';

//config
import Colors from '../config/Colors';

function MigrationScreen(props) {


    const [listData, setListData] = useState([
        {
            listTitle: 'Hiring personnel overseas',
            icon: true

        },
        {
            listTitle: 'Strategy, Vision/Mission, ',
            icon: true
        },
        {
            listTitle: 'Value Proposition',
            icon: false
        },
        {
            listTitle: 'Ethical Dimensions,',
            icon: true
        },
        {
            listTitle: 'e.g. Environmental issues',
            icon: false
        },
        {
            listTitle: 'Grey Markets',
            icon: true
        },

    ])


    const updateDate = async (data) => {
        let res = await AsyncStorage.getItem('data');
        res = JSON.parse(res);
        res.push({ name: "Migration", title: data })
        await AsyncStorage.setItem('data', JSON.stringify(res));
        props.navigation.navigate("AdditionalInformationScreen")
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
                        <Text style={{ fontSize: RFPercentage(3.7) }}>
                            List of Migration Practicalities
                        </Text>
                    </View>
                    {/* Scroll View starts */}
                    <ScrollView style={{ backgroundColor: Colors.white, flex: 1, width: '100%' }} >
                        {/* List */}
                        {listData.map((item, i) => (
                            <View key={i} style={{ marginLeft: RFPercentage(5), flexDirection: 'row', alignItems: "center", justifyContent: 'flex-start' }}>
                                <View style={{ width: '100%', alignItems: 'flex-start', justifyContent: 'flex-start', marginRight: RFPercentage(20) }}>
                                    <TouchableOpacity onPress={() => updateDate(item.listTitle)} style={{ height: RFPercentage(4), width: '100%', flexDirection: 'row', marginTop: i === 0 ? RFPercentage(5) : RFPercentage(2) && item.icon ? RFPercentage(3) : RFPercentage(0.3), justifyContent: 'flex-start', alignItems: 'center' }}>
                                        {item.icon ?
                                            <Ionicons name="chevron-forward-circle-outline" style={{ fontSize: RFPercentage(3), marginRight: RFPercentage(2) }} color={Colors.secondary} />
                                            :
                                            null
                                        }

                                        <Text style={{ marginLeft: item.icon ? RFPercentage(0) : RFPercentage(5), color: Colors.black, fontSize: RFPercentage(2.5) }}>
                                            {item.listTitle}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                        {/* Button */}
                        {/* <View style={{ width: "100%", justifyContent: 'center', alignItems: "center", marginTop: RFPercentage(5) }}>
                            <MyAppButton
                                title="NEXT"
                                bold={true}
                                borderRadius={RFPercentage(2)}
                                padding={RFPercentage(1.5)}
                                onPress={() => props.navigation.navigate("AdditionalInformationScreen")}
                                backgroundColor={Colors.secondary}
                                color={Colors.white}
                                width={"55%"}
                            />
                        </View> */}
                    </ScrollView>

                    {/* Bottom right text button for help */}
                    <HelpButton />
                </Screen>
            </KeyboardAvoidingView>
        </>
    );
}

export default MigrationScreen;