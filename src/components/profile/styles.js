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
        flex: 10,
        flexWrap: "wrap",
        justifyContent: "space-between",
        backgroundColor: '#f9ad30',
  
    },
    menuToolbar: {
        height: 40,
        width: 40,
        backgroundColor: '#f9ad30',
        marginTop:15,
        marginLeft: 5,
        marginRight: 5
    },
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
