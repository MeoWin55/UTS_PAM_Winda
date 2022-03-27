import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    ScrollView,
    Button,
} from 'react-native';
import styeles from '../style/cancelstyle'

const Page3 = ({ navigation }) => {



    return (
        <SafeAreaView style={styeles.viewAwal}>
            <View style={styeles.margin}>
                <View style={styeles.colorView}>
                    <Text style={styeles.textstyle}> BELUM ADA PESANAN</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Page3;

