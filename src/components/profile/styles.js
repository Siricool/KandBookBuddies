import { StyleSheet, Text, View } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fde3b7',
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    /*menuToolbar: {
        height: 40,
        width: 40,
        backgroundColor: '#fde3b7',
    },*/
    text: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        fontFamily: 'Helvetica' 
    },
    smallText: {
        fontSize: 15,
        color: 'grey',
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        fontFamily: 'Helvetica' ,
        textTransform: 'capitalize'
    },
    middleText: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        fontFamily: 'Helvetica' 
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
    }
})
