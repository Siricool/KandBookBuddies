import React, {useEffect} from 'react';
import styles from '../styles';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import { fetchBCStart } from '../../redux/BookClub/bc.actions';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  updatedUser: user.updatedUser
});

const mapStateBC = ({ bookclub }) => ({
  bc: bookclub.bc
})




const BCOverview = ({ navigation }) => {
  const { currentUser } = useSelector(mapState);
  const { updatedUser } = useSelector(mapState);
  const { bc } = useSelector(mapStateBC);
  //const navigation = useNavigation();
  const dispatch = useDispatch();
  const renderElement = () => {
    if (updatedUser != null) {
      return updatedUser.groupID;
    }
    else {
      return currentUser.groupID;
    }
  };

  useEffect(() => {
    dispatch(
      fetchBCStart()
    );
  }, []); 

  const mapBC = () =>{
    let arr = renderElement(); // användarens klubbar
    
    let saveClub = []
    //JÄMFÖR MED BC O SPARA HELA CLUBINFON I NY ARRAY 
    arr.map((name,index) => {
      console.log('HEJ'+name)
      
      bc.forEach((club) => {
        if (club.groupName == name){
          saveClub.push(club)
        }
      })

      console.log(saveClub)

   
    } )

    return(
      saveClub.map((club, index) => {
        return(
          <View key = {club.documentID}> 
          
          <TouchableOpacity style={styles.coolButton}
            onPress={() => handlePress(club) }>
            <Text style={styles.buttonText}>
              {club.groupName}
            </Text>
          </TouchableOpacity>
          
          </View>
        );
      })
    )
  }

  const handlePress = (club) => {
    console.log('TJABBA')
    console.log(club)

  
    if (bc!=undefined && bc.length>0){  
    navigation.navigate('BCView', club);
   }
  }

  const handleJoin = () => {
    navigation.navigate('JoinBCInside');
 }

 const handleCreate = () => {
    navigation.navigate('CreateBC');
} 

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={{ width: '100%', height: '90%' }}>
        <ImageBackground
          style={styles.fillPhoto}
          source={require('../../../assets/backg.png')}>
          <Text style={styles.whiteText}>My Book Clubs</Text>
            <View>{mapBC()}</View>

          <View style={styles.whiteSquare}>
            <Text style={styles.textLeft}>Longing for a new book club?</Text>
          <View style={styles.rowBC}>
          <TouchableOpacity style={styles.smallButtonBC}
            onPress={() => handleJoin() }>
            <Text style={styles.buttonText}>
              Join a bookclub
            </Text>
          </TouchableOpacity>
          

          
          </View>
          </View>

          <Image
            style={styles.bookLogo}
            source={require('../../../assets/whiteicon.png')}
          />
        </ImageBackground>
      </KeyboardAwareScrollView>

      <View style={styles.row}>
        <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('MyProfile')}>
        <Icon
                        reverse
                        name='ios-person'
                        type='ionicon'
                        color='#fde3b7'

                    />
        </TouchableHighlight>
        <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('BCOverview')}>
        <Icon
                        reverse
                        name='ios-book'
                        type='ionicon'
                        color='#fde3b7'
                    />
        </TouchableHighlight>
        <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('StartPage')}>
        <Icon
                        reverse
                        name='ios-home'
                        type='ionicon'
                        color='#fde3b7'
                    />
        </TouchableHighlight>
        <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('Search')}>
        <Icon
                        reverse
                        name='ios-search'
                        type='ionicon'
                        color='#fde3b7'
                    />
        </TouchableHighlight>
        <TouchableHighlight underlayColor='none' onPress={() => navigation.navigate('Settings')}>
        <Icon
                        reverse
                        name='ios-settings'
                        type='ionicon'
                        color='#fde3b7'
                    />
        </TouchableHighlight>
      </View>


    </View>
  );
}

export default BCOverview;


/*
<View >
          <TouchableOpacity style={styles.coolButton}
            onPress={() => handlePress() }>
            <Text style={styles.buttonText}>
              {renderElement()}
            </Text>
          </TouchableOpacity>
          </View>

TouchableOpacity style={styles.smallButtonBC}
            onPress={() => handleCreate() }>
            <Text style={styles.buttonText}>
              Create a bookclub
            </Text>
          </TouchableOpacity>          */