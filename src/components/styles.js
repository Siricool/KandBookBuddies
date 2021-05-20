
import { StyleSheet } from 'react-native'

// orange: #f9ad30 
// beige: #fde3b7


export default StyleSheet.create({
  
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
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 25,
    alignSelf: "center",
    fontFamily: 'Helvetica'
  },
  whiteText: {
    fontSize: 28,
    color: 'white',
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
    marginTop: 5,
    marginLeft: 10,
  },  
  smallText: {
    fontSize: 17,
    color: 'grey',
    marginTop: 5,
    marginLeft: 15,
    marginRight: 25,
    fontFamily: 'Helvetica'
  },
  authorText: {
    fontSize: 17,
    color: 'grey',
    marginTop: 5,
    marginLeft: 25,
    marginRight: 25,
    fontFamily: 'Helvetica'
  },
  smallBlackText: {
    fontSize: 17,
    color: 'black',
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

  discussionText: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 25,
    marginRight: 25,
    fontFamily: 'Helvetica'
  },

  historyText: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 25,
    marginRight: 25,
    fontFamily: 'Helvetica'
  },
  middleTextOrange: {
    fontSize: 18,
    color: '#f9ad30',
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 25,
    marginRight: 25,
    fontFamily: 'Helvetica'
  },
  smallTextOrange: {
    fontSize: 15,
    color: '#f9ad30',
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 25,
    fontFamily: 'Helvetica'
  },
  smallThinTextOrange: {
    fontSize: 15,
    width: 165,
    color: '#f9ad30',
    fontWeight: "bold",
    textAlign: 'center',
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
  bigTextPink: {
    fontSize: 50,
    color: '#d679ae',
    fontWeight: "bold",
    marginTop: 5,
    alignSelf: "center",
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 25,
    fontFamily: 'Helvetica'
  },
  bookLogo: {
    flex: 1,
        height: 120,
        width: 120,
        alignSelf: "center",
        margin: 30
  },
  capital: {
    textTransform: 'capitalize',
  },
  icon: {
    marginTop: 2,
    marginLeft: 25,
    justifyContent: 'center'
  },
  bookImage: {
    flex: 1,
    width: 130,
    height: 200,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 45,
    marginRight: 10,
    //alignSelf: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFF7E0',
  },
  bookImageMedium: {
    flex: 1,
    width: 100,
    height: 150,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    borderRadius: 8,
  },
  bookImageMediumLeft: {
    flex: 1,
    width: 90,
    height: 100,
    marginRight: 40,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 8,
  },
  bookImageSmall: {
    width: 60,
    height: 80,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    alignSelf: 'center',
    borderRadius: 8,
  
  },
  fillPhoto: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
        
  },
  rowBooks: {
    height: 100,
    flexWrap: "wrap",
    marginHorizontal: 10,
    marginVertical: 2
  },
  rowComments: {
    height: 100,
    resizeMode: 'cover',
    flexWrap: 'wrap'    ,
    marginHorizontal: 10,
    marginVertical: 2
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

  inputComment: {
    height: 100,
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
    backgroundColor: '#fde3b7',
    height: 30,
    width: 140,
    alignItems: "center", 
    marginBottom: 9,
    alignSelf: "center", 
    justifyContent: 'center', 
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fde3b7',
    shadowOffset:{ width: 8, height: 8, },
    shadowColor: '#f9ad30',
    shadowOpacity: 0.5,
},
smallButtonSquare: {
  backgroundColor: '#fde3b7',
  height: 90,
  width: 90,
  alignItems: "center", 
  textAlign: 'center',
  alignContent: 'center',
  marginTop: 20,
  marginBottom: 15,
  alignSelf: "center", 
  justifyContent: 'center', 
  borderRadius: 70,
  borderWidth: 1,
  borderColor: '#fde3b7',
 
},
smallButtonBC: {
  backgroundColor: '#fde3b7',
  height: 30,
  width: 140,
  alignItems: "center", 
  marginBottom: 9,
  alignSelf: "center", 
  justifyContent: 'center', 
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fde3b7',
  shadowOffset:{ width: 8, height: 8, },
  shadowColor: '#f9ad30',
  shadowOpacity: 0.5,
  marginTop: 25,
  marginBottom: 25
},

smallButtonComment: {
  backgroundColor: '#fde3b7',
  height: 30,
  width: 140,
  alignItems: "center", 
  alignSelf: "center", 
  justifyContent: 'center', 
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#fde3b7',
},
  coolButton: {
    backgroundColor: '#fde3b7',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 25,
    marginBottom: 25,
    height: 70,
    width: 200,
    //center button and text
    alignItems: "center", 
    alignSelf: "center", 
    justifyContent: 'center', 
    //rounded corners
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fde3b7',
    //shadow
    shadowOffset:{ width: 8, height: 8, },
    shadowColor: '#f9ad30',
    shadowOpacity: 0.5,
},

coolButtonTwo: {
  backgroundColor: '#fde3b7',
  marginLeft: 30,
  marginRight: 30,
  marginTop: 25,
  marginBottom: 25,
  height: 70,
  width: 180,
  //center button and text
  alignItems: "center", 
  alignSelf: "center", 
  justifyContent: 'center', 
  //rounded corners
  borderRadius:50,
  
},
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: 'Helvetica'
  },
  whiteBigSquare: {
    height: 320,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  
  },
  whiteMediumSquare: {
    height: 240,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  whiteSquare: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  orangeSquare: {
    backgroundColor: '#fde3b7',
    alignItems: "center", 
    alignSelf: "center", 
    alignContent: "center",
    textAlign: "center",
    justifyContent: 'center', 
    marginHorizontal: 40,
    width: 270,
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
    justifyContent: 'center',
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#fde3b7', 
  },
  rowSettings: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: 'space-between'
  },
  rowBC: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  column: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  rowRating: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: 'white',
    marginBottom: 10,
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
    height: 30,
    width: 30,
    backgroundColor: 'white',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  center: {
    alignContent: 'center',
    alignItems: "center", 
    alignSelf: "center", 
    justifyContent: 'center', 
  },
  left: {
    alignContent: 'flex-start'
  },
  width: {
    width: 300
  },
  height: {
    height: 90
  },
  maxSquare: {
    width: 200
  },
  square: {
    height: 60,
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },
  marginB: {
    marginBottom: 10,
  },
  column: {
    flexDirection: 'column',
  },
  star: {
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  starClicked: {
    borderWidth: 1,
    borderColor: 'black'
  }
})

