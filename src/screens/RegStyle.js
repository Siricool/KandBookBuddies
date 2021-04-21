import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fde3b7'
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 120,
        alignSelf: "center",
        margin: 30
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 30,
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
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: 'Helvetica' 
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20,
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d',
        fontFamily: 'Helvetica' 
    },
    footerLink: {
        color: "#f9ad30",
        fontWeight: "bold",
        fontSize: 16,
        fontFamily: 'Helvetica' 
    }
})
