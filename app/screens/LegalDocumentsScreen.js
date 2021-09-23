import React, { useState } from 'react';
import { Text, View, ImageBackground, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import MyAppbar from '../components/common/MyAppbar';
import HelpButton from '../components/common/HelpButton';

//config
import Colors from '../config/Colors';

function LegalDocumentsScreen(props) {


    const [listData, setListData] = useState([
        {
            listTitle: 'Official Contracts',

        },
        {
            listTitle: 'Local Laws',

        },
        {
            listTitle: 'Technical Market Standards',

        },
        {
            listTitle: 'Regulatroy Bodies',

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
                        <Text style={{ fontSize: RFPercentage(3.7) }}>
                            List of Legal Documents
                        </Text>
                    </View>
                    {/* Scroll View starts */}
                    <ScrollView style={{ backgroundColor: Colors.white, flex: 1, width: '100%' }} >
                        {/* List */}
                        {listData.map((item, i) => (
                            <TouchableOpacity key={i} style={{ marginLeft: RFPercentage(6), flexDirection: 'row', alignItems: "center", justifyContent: 'flex-start' }}>
                                <View style={{ width: '100%', alignItems: 'flex-start', justifyContent: 'flex-start', marginRight: RFPercentage(20) }}>
                                    <TouchableOpacity style={{ height: RFPercentage(6), width: '100%', flexDirection: 'row', marginTop: i === 0 ? RFPercentage(5) : RFPercentage(3), justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <MaterialCommunityIcons name="hand-pointing-right" style={{ fontSize: RFPercentage(3), marginRight: RFPercentage(2) }} color={Colors.secondary} />
                                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.4) }}>
                                            {item.listTitle}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        ))}
                        {/* Button */}
                        <View style={{ width: "100%", justifyContent: 'center', alignItems: "center", marginTop: RFPercentage(4.2) }}>
                            <MyAppButton
                                title="NEXT"
                                bold={true}
                                borderRadius={RFPercentage(2)}
                                padding={RFPercentage(1.5)}
                                onPress={() => props.navigation.navigate("MigrationScreen")}
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

export default LegalDocumentsScreen;