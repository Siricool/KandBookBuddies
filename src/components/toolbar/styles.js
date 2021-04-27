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
    menuToolbar: {
        height: 40,
        width: 40,
        backgroundColor: '#fde3b7',
    }
})
