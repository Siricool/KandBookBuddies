import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';

import styles from './StartStyle';

import firebase from 'firebase/app'

//import React from 'react'
//import { Text, View } from 'react-native'

/*export default function StartPageScreen(props) {
    return (
        <View>
            <Text>Start Page Screen</Text>
        </View>
    )
}*/

import { connect } from 'react-redux';
import { watchPersonData } from '../../redux/App-redux';
import { TouchableHighlight } from 'react-native-gesture-handler';

const mapStateToProps = (state) => {
    return { 
        personData: state.personData,     
      };
}
const mapDispatchToProps = (dispatch) => {
    return { 
        //setPersonData: (text) => { dispatch(setPersonData(text))},
        watchPersonData: () => { dispatch(watchPersonData()) },
    };
}

class StartPageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personData: this.props.watchPersonData(),
    }

    this.props.watchPersonData();

    console.log(this.props.personData)
    
  }

  onFooterLinkPress = () => {
    //här är ett test så knapp på image fungerar. Denna ska bytas ut till settings, search view osv. Denna går till LogInScreen nu
    //bara för att testa att onPress fungerar på image
    console.log("in i onFooter")
    this.props.navigation.navigate('LogInScreen')
}
  

    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.text}>My Profile</Text>
              <Text style={styles.smallText}>User ID</Text>
              <Text style={styles.middleText}>My Stats</Text>
              <Text style={styles.middleText}>My Book Clubs</Text>
              <Text style={styles.middleText}>My Books</Text>
              <TouchableHighlight onPress={() => this.onFooterLinkPress()}>
              <Image
                    style={styles.logo}
                    source={require('../../assets/BBicon.png')}
                />
                </TouchableHighlight>  
                <Text>{this.props.personData}</Text>     
                        
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPageScreen);

/*export default function App() {
  return (
    <View style={styles.container}>
      //<Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}*/

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fde3b7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
