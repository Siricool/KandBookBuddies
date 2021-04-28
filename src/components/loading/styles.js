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
        marginTop: 100,
        marginLeft: 30,
        marginRight: 30,
        fontFamily: 'Helvetica' 
    },
    logo: {
        flex: 1,
        height: 220,
        width: 220,
        alignSelf: "center",
        marginTop: 200,
        margin: 30
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
  });