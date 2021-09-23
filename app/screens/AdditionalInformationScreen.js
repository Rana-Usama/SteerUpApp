import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import MyAppbar from '../components/common/MyAppbar';
import HelpButton from '../components/common/HelpButton';

//config
import Colors from '../config/Colors';

function AdditionalInformationScreen(props) {


    const [listData, setListData] = useState([
        {
            listTitle: 'Marketing',
            icon: true

        },
        {
            listTitle: 'Market analysis ',
            icon: true
        },

        {
            listTitle: 'Customer Relationship Management',
            icon: true
        },
        {
            listTitle: 'Competitive Strategy Management',
            icon: true
        },
        {
            listTitle: 'Product Image',
            icon: true
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
                        <Text style={{ fontSize: RFPercentage(3.2) }}>
                            List of additional information
                        </Text>

                        <Text style={{ fontSize: RFPercentage(3.2) }}>
                            on channel development:
                        </Text>
                    </View>
                    {/* Scroll View starts */}
                    <ScrollView style={{ backgroundColor: Colors.white, flex: 1, width: '100%' }} >
                        {/* List */}
                        {listData.map((item, i) => (
                            <TouchableOpacity key={i} style={{ marginLeft: RFPercentage(5), flexDirection: 'row', alignItems: "center", justifyContent: 'flex-start' }}>
                                <View style={{ width: '100%', alignItems: 'flex-start', justifyContent: 'flex-start', marginRight: RFPercentage(20) }}>
                                    <TouchableOpacity style={{ height: RFPercentage(4), width: '100%', flexDirection: 'row', marginTop: i === 0 ? RFPercentage(5) : RFPercentage(2) && item.icon ? RFPercentage(3) : RFPercentage(0.3), justifyContent: 'flex-start', alignItems: 'center' }}>
                                        {item.icon ?
                                            <Ionicons name="arrow-forward-outline" style={{ fontSize: RFPercentage(3), marginRight: RFPercentage(2) }} color={Colors.secondary} />
                                            :
                                            null
                                        }

                                        <Text style={{ marginLeft: item.icon ? RFPercentage(0) : RFPercentage(5), color: Colors.black, fontSize: RFPercentage(2.5) }}>
                                            {item.listTitle}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        ))}
                        {/* Button */}
                        <View style={{ width: "100%", width: "100%", alignItems: "center", marginTop: RFPercentage(4), marginBottom: RFPercentage(25) }}>
                            <MyAppButton
                                title="NEXT"
                                bold={true}
                                borderRadius={RFPercentage(2)}
                                padding={RFPercentage(1.5)}
                                onPress={() => props.navigation.navigate("TypeIndustryScreen")}
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

export default AdditionalInformationScreen;