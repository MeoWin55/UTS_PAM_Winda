import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    ScrollView,
    Button,
} from 'react-native';
import styles from '../style/homestyle';


const Home = ({ navigation }) => {

    const [textKeberangkatan, onChangeKeberangkatan] = React.useState('');
    const [textTujuan, onChangeTujuan] = React.useState('');
    const [textWaktu, onChangeWaktu] = React.useState('');
    const [textKelas, onChangeKelas] = React.useState('');


    return (
        <SafeAreaView >
            <ScrollView>

                <View style={styles.centerView}>

                    <View style={styles.marginV}>
                        <Text style={styles.textTitle}>GoSea</Text>
                    </View>
                    <View style={styles.boxmain}>
                        <View style={styles.margins}>
                            <Text style={styles.textSubtittle}>Pelabuhan Keberangkatan</Text>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => onChangeKeberangkatan(text)}
                                value={textKeberangkatan}
                                placeholder="Tulis..." />
                            <Text style={styles.textSubtittle}>Pelabuhan Tujuan</Text>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => onChangeTujuan(text)}
                                value={textTujuan}
                                placeholder="Tulis..." />
                            <Text style={styles.textSubtittle}>Jadwal Keberangkatan</Text>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => onChangeWaktu(text)}
                                value={textWaktu}
                                placeholder="YYYY-MM-DD" />
                            <Text style={styles.textSubtittle}>Kelas</Text>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => onChangeKelas(text)}
                                value={textKelas}
                                placeholder="Tulis..." />
                            <Button
                                title="Order"
                                onPress={() => navigation.navigate('Order')}

                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

