
import { StyleSheet } from 'react-native'

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
  text: {
    fontSize: 28,
    fontWeight: "bold",
   // color: '#f9ad30',
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
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
    fontFamily: 'Helvetica'
  },
  smallerGreyText: {
    fontSize: 13,
    color: 'grey',
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
  smallerText: {
    fontSize: 15,
    color: 'grey',
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 25,
    fontFamily: 'Helvetica',
    textAlign: 'center'
  },
  smallMiddleText: {
    fontSize: 17,
    color: 'grey',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 60,
    marginRight: 25,
    fontFamily: 'Helvetica'
  },
  middleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 25,
    marginRight: 25,
    fontFamily: 'Helvetica'
  },
  middleTextOrange: {
    fontSize: 18,
    color: 'orange',
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 25,
    fontFamily: 'Helvetica'
  },
  smallTextOrange: {
    fontSize: 15,
    color: 'orange',
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 25,
    fontFamily: 'Helvetica'
  },
    middleTextPink: {
    fontSize: 18,
    color: '#d679ae',
    fontWeight: "bold",
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
  capital: {
    textTransform: 'capitalize'
  },
  bookImage: {
    flex: 1,
    width: 130,
    height: 190,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fde3b7',
  },
  bookImageSmall: {
    width: 60,
    height: 80,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 30,
    alignSelf: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fde3b7',
  },
  rowBooks: {
    height: 100,
    flexWrap: "wrap",
    marginHorizontal: 50,
    marginVertical: 10
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
  smallButton: {
    backgroundColor: '#FFF7E0',
    height: 30,
    width: 120,
    alignItems: "center", 
    alignSelf: "center", 
    justifyContent: 'center', 
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#FFF7E0',
    shadowOffset:{ width: 8, height: 8, },
    shadowColor: '#f9ad30',
    shadowOpacity: 0.5,
},
  coolButton: {
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
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: 'Helvetica'
  },
  whiteBigSquare: {
    height: 300,
    backgroundColor: '#FFF7E0',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  whiteSquare: {
    backgroundColor: '#FFF7E0',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  orangeSquare: {
    backgroundColor: '#fde3b7',
    alignItems: "center", 
    justifyContent: 'center', 
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
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
    justifyContent: 'center',
  },
  row: {
    flexDirection: "row",
    flex: 10,
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: '#FFF7E0',
  },
  buddietext: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
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
  menuToolbar: {
    height: 40,
    width: 40,
    backgroundColor: '#FFF7E0',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  center: {
    alignContent: 'center'
  },
  left: {
    alignContent: 'flex-start'
  }
})

