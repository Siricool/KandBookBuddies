
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        
        //flexDirection: "row",
        backgroundColor: '#fde3b7'
    },
    title: {

    },
    text: {
        fontSize: 28,
        fontWeight: "bold",
        color: '#f9ad30',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 25,
        marginRight: 25,
        alignSelf: "center",
        fontFamily: 'Helvetica'
    },
    textItalic: {
      fontStyle: 'italic'
  },
    textLeft: {
      fontSize: 20,
      fontStyle: 'italic',
      fontWeight: "bold",
      marginTop: 10,
      marginLeft: 25,
      marginRight: 25,
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
    bookLogo: {
      flex: 1,
      height: 30,
      width: 70,
      marginLeft: 230,
      marginBottom: 20
    },
    bookImage: {
      flex: 1,
      width: 100,
      height: 140,
      marginTop: 10,
      alignSelf: 'center'
    },
    BBimage: {
      flex: 1,
      height: 50,
      width: 50,
      marginLeft: 30,
      marginBottom: 20
    },
    userImage: {
      flex: 1,
      height: 120,
      width: 120,
      borderRadius: 200,
      marginBottom: 20,
      alignSelf: 'center'
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


/*
.userProfile {
    display: block;
    width: 100%;
    margin: 3rem auto 1rem;
  
    ul, li {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
  
    ul {
      li {
        display: block;
        width: 100%;
  
        .img {
          display: block;
          width: 5.0rem;
          margin: 0 auto;
  
          img {
            display: block;
            width: 100%;
          }
        }
  
        .displayName {
          display: block;
          width: 100%;
          text-align: center;
          margin: 1rem auto;
          font-size: 1.8rem;
          line-height: 1;
          text-transform: uppercase;
        }
      }
    }
  }
  */