import { StyleSheet } from 'react-native'

// orange: #f9ad30 
// beige: #fde3b7
// rosa:

export default StyleSheet.create({
    container: {
        backgroundColor: '#fde3b7'
    },
    text: {
        fontSize: 30,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 25,
        marginRight: 25,
        alignSelf: "center",
        fontFamily: 'Helvetica'
      },
      smallText: {
        fontSize: 17,
        color: 'grey',
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 25,
        marginRight: 25,
        fontFamily: 'Helvetica'
      },
      button: {
        backgroundColor: '#f9ad30',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        fontFamily: 'Helvetica'
      },
      logo: {
        flex: 1,
        height: 120,
        width: 120,
        alignSelf: "center",
        margin: 30
    },

})