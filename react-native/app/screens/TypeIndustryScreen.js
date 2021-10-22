import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, ScrollView, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import ReactNativeCrossPicker from "react-native-cross-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";



//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import MyAppbar from '../components/common/MyAppbar';
import HelpButton from '../components/common/HelpButton';

//config
import Colors from '../config/Colors';

function TypeIndustryScreen(props) {


    const [selectedItem, setItem] = useState('')

    const items = [
        { label: "Information Technology", value: "Information Technology" },
        { label: "Healthcare", value: "Healthcare" },
        { label: "Manufacturing", value: "Manufacturing" },
        { label: "Financials", value: "Financials" },
        { label: "Consumer Discretionary", value: "Consumer Discretionary" },
        { label: "Turnkey Industrials", value: "Turnkey Operations" },
        { label: "Communication Services", value: "Communication Services" },
        { label: "Consumer Stables", value: "Consumer Stables" },
        { label: "Materials", value: "Materials" },
        { label: "Energy", value: "Energy" },
        { label: "Utilities", value: "Utilities" },
        { label: "Real Estate", value: "Real Estate" },

    ]

    const iconComponent = () => {
        return <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={"grey"}
        />
    }


    const [indicator, showIndicator] = useState(false);
    const [helpButton, setHelpButton] = useState(true);





    return (

        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.white }}>
            <StatusBar barStyle="dark-content" />
            {/* App bar */}
            <MyAppbar />
            {/* Scroll View starts */}
            <ScrollView style={{ backgroundColor: Colors.white, flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center' }}  >
                    {/* Main Heading */}
                    <View style={{ marginTop: RFPercentage(6), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <FontAwesome name="industry" style={{ right: RFPercentage(2), fontSize: RFPercentage(2.8), color: '#025e6c' }} color="black" />
                        <Text style={{ fontSize: RFPercentage(3.9) }}>
                            Choose Your Industry
                        </Text>
                    </View>

                    <View style={{ marginTop: RFPercentage(8), width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <ReactNativeCrossPicker
                            modalTextStyle={{ color: "rgb(0, 74, 173)" }}
                            mainComponentStyle={{ width: "85%", borderWidth: 0, backgroundColor: Colors.inputFieldBackgroundColor }}
                            modalComponentStyle={{ borderRadius: RFPercentage(3), backgroundColor: Colors.white, borderColor: Colors.grey, borderWidth: RFPercentage(0.1) }}
                            iconComponent={iconComponent}
                            placeholderStyle={{ color: "black" }}
                            modalTextStyle={{ color: "#12424a", fontSize: RFPercentage(2.6), fontWeight: 'bold' }}
                            items={items}
                            setItem={setItem} selectedItem={selectedItem}
                            placeholder="Tap to choose"
                            modalMarginTop={"100%"}
                        />
                    </View>
                    {/* Button */}
                    <View style={{ width: "100%", justifyContent: 'center', alignItems: "center", marginTop: RFPercentage(4) }}>
                        <MyAppButton
                            title="NEXT"
                            bold={true}
                            borderRadius={RFPercentage(2)}
                            padding={RFPercentage(1.5)}
                            onPress={() => props.navigation.navigate("EmergingMarketsScreen")}
                            backgroundColor={Colors.secondary}
                            color={Colors.white}
                            width={"55%"}
                        />
                    </View>

                </View>
            </ScrollView>
            {helpButton ?
                <HelpButton />
                :
                null
            }
        </Screen>

    );
}

export default TypeIndustryScreen;