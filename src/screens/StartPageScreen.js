import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
import { setPersonData, watchPersonData } from '../../redux/App-redux';

const mapStateToProps = (state) => {
    return { 
        setPersonData: state.setPersonData,
        data: state.data
    };
}
   const mapDispatchToProps = (dispatch) => {
    return { 
        setPersonData: (text) => { dispatch(setPersonData(text))},
        watchPersonData: () => { dispatch(watchPersonData()) },
    };
}

class StartPageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    }
    console.log(this.props.data.fullName)
  }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.data.fullName}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fde3b7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
