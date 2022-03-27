import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    ScrollView,
    Button,
} from 'react-native';
import styeles from '../style/orderstyle'

const Page2 = ({ navigation }) => {



    return (
        <SafeAreaView style={styeles.viewAwal}>
            <View style={styeles.margin}>
                <View style={styeles.colorView}>
                    <Text style={styeles.textstyle}>Pelabuhan Keberangkatan : Bakauheni</Text>
                    <Text style={styeles.textstyle}>Pelabuhan Tujuan    : Merak </Text>
                    <Text style={styeles.textstyle}>Jadwal : 21 Maret 2022</Text>
                    <Text style={styeles.textstyle}>Kelas : Ekonomi</Text>

                </View>
            </View>
        </SafeAreaView>
    );
};

export default Page2;

