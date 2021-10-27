import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage"

//components
import Screen from './../components/Screen';
import MyAppbar from '../components/common/MyAppbar';
import HelpButton from '../components/common/HelpButton';
import LoadingModel from "../components/common/LoadingModel"

//config
import Colors from '../config/Colors';
import { getIndustryRank } from '../services/industryServices';

function EmergingMarketsScreen(props) {

    const [indicator, showIndicator] = useState(false)
    const [listData, setListData] = useState([])

    const industryRank = async () => {
        try {
            showIndicator(true)
            let { data: res } = await getIndustryRank();
            console.log(res)

            setListData(res)
        } catch (error) {
            console.log("Country Error: ", error)
        }
        showIndicator(false)
    }

    useEffect(() => {
        industryRank()
    }, [])


    const handleCountry = async (country) => {
        let res = await AsyncStorage.getItem('data');
        res = JSON.parse(res);
        res.push({ name: "Country", title: country })
        await AsyncStorage.setItem('data', JSON.stringify(res));
        props.navigation.navigate("ChooseEntryModeScreen")
    }

    return (
        <>
            <LoadingModel show={indicator} />
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
                                    <TouchableOpacity onPress={() => handleCountry(item.country)} style={{ height: RFPercentage(6), width: '100%', flexDirection: 'row', marginTop: i === 0 ? RFPercentage(5) : RFPercentage(3), justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <Octicons name="primitive-dot" style={{ fontSize: RFPercentage(3), marginRight: RFPercentage(2) }} color={Colors.secondary} />
                                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.7) }}>
                                            {`${item.country} (${item.latestYearRank})`}
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