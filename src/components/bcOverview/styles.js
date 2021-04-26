import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        backgroundColor: '#fde3b7'
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 25,
        marginLeft: 30,
        marginRight: 30,
        fontFamily: 'Helvetica', 
        alignSelf: 'center',
    },
    buttonText: {
        fontFamily: 'Helvetica', 
        fontWeight: "bold",
        fontSize: 15,
    },
    button: {
        backgroundColor: '#FFF7E0',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 25,
        height: 70,
        width: 200,
        //center button and text
        alignItems: "center", 
        alignSelf: "center", 
        justifyContent: 'center', 
        //rounded corners
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#FFF7E0',
        //shadow
        shadowOffset:{ width: 8, height: 8, },
        shadowColor: '#f9ad30',
        shadowOpacity: 0.5,
    
    },
});
