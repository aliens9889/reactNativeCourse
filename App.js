/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default class App extends Component {

  state = {
    placeName: '',
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  submitPressHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(this.state.placeName)
      }
    });
  }

  render() {
    
    const placesOutput = this.state.places.map((place, i) => (<Text key={i}>{place}</Text>));

    return (
      <View style={styles.container}>
        <TextInput 
          placeholder= 'An awesome place'
          onChangeText={this.placeNameChangedHandler}
          value={this.state.placeName}
        />
        <Button 
          title='Add'
          onPress={this.submitPressHandler}
        />
        <View>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
