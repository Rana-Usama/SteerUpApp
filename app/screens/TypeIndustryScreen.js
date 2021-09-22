import React, { useState } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';
import LoadingModal from './../components/common/LoadingModel';

function TypeIndustryScreen(props) {

    const [indicator, showIndicator] = useState(false);

    const [inputFields, setInputFeilds] = useState([
        {
            id: 0,
            placeHolder: "Enter Industry Name",
            value: '',
            secure: false,
            icon: false
        },

    ]);

    const handleChange = (text, id) => {
        const tempFeilds = [...inputFields];
        tempFeilds[id].value = text;
        setInputFeilds(tempFeilds);
    }

    const handleLogin = () => {
        showIndicator(true);

        try {
            // API integration!

        } catch (error) {
            alert("Can't Proceed");
        }

        showIndicator(false);
    };



    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.white }}>
            <LoadingModal show={indicator} />
            {/* Top Image */}
            <ImageBackground style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: RFPercentage(38) }} source={require('../../assets/Images/top.png')}>
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

            {/* Main Heading */}
            <View style={{ marginTop: RFPercentage(10), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <FontAwesome name="industry" style={{ marginRight: RFPercentage(2), fontSize: RFPercentage(2.8), color: '#025e6c' }} color="black" />
                <Text style={{ fontSize: RFPercentage(3.9) }}>
                    Type Your Industry
                </Text>
            </View>

            {/* Input Fields */}
            <View style={{ width: "80%", justifyContent: "center", alignItems: "center", marginTop: RFPercentage(8) }}>
                {inputFields.map((item, i) =>
                    <View key={i} style={{ marginTop: i == 0 ? RFPercentage(1) : RFPercentage(3), width: "100%" }} >
                        <InputField
                            backgroundColor={Colors.light}
                            placeHolder={item.placeHolder}
                            width="100%"
                            height={RFPercentage(6.3)}
                            value={item.value}
                            onChange={(text) => handleChange(text, item.id)}
                            secure={item.secure}
                            icon={item.icon}
                        />
                    </View>
                )}
            </View>

            {/* Button */}
            <View style={{ width: "100%", justifyContent: 'center', alignItems: "center", marginTop: RFPercentage(4) }}>
                <MyAppButton
                    title="SEARCH"
                    bold={true}
                    borderRadius={RFPercentage(2)}
                    padding={RFPercentage(1.5)}
                    onPress={() => handleLogin()}
                    backgroundColor={"#12424a"}
                    color={Colors.white}
                    width={"55%"}
                />
            </View>
        </Screen>
    );
}

export default TypeIndustryScreen;