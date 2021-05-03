import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
     // flex: 1,
      backgroundColor: '#fde3b7',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        fontFamily: 'Helvetica' 
    },
    text2: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
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
        fontFamily: 'Helvetica' 
    },
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
    }
  });