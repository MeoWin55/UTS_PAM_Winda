import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bacgroundSaveArea: {
        backgroundColor: 'green',
    },
    centerView: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: '100%',
        height: 620,
        backgroundColor: '#D18534',

    },
    boxmain: {
        backgroundColor: '#1D2F6F',
        alignItems: 'center',
        justifyContent: 'center',
        height: 450,
        width: '70%',
        borderRadius: 15,

    },
    margins: {
        margin: 20,
        alignItems: 'flex-start',

    },
    textSubtittle: {
        fontFamily: "Cochin",
        fontSize: 16,
        fontWeight: "bold",
        color: 'white',
    },
    textInput: {
        height: 40,
        width: 250,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'orange',
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'white',
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'powderblue'
    },
    marginV: {
        marginVertical: 30,
    },
    textTitle: {
        fontFamily: "Cochin",
        fontSize: 32,
        fontWeight: "bold",
        color: 'white',
    },
    copyright: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 60,
    },

});

export default styles;