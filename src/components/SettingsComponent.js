import React from 'react';
import { StyleSheet, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import SettingsNews from "../screens/SettingsNews";

const width = Dimensions.get('window').width; // Window width
const height = Dimensions.get('window').height; // Window height

Font.loadAsync({
  'open-sans-bold': require('../../assets/fonts/DancingScript-Regular.ttf'),
});
export default class SettingsComponent extends React.Component  {
  constructor(props){
    super(props);
    this.changeSettingsNull = this.changeSettingsNull.bind(this)
  }

  changeSettingsNull() {
    this.props.changeSettingsNull()
  }
  render () {
    return (
      <ScrollView style={styles.homeContainer}>
        <TouchableOpacity style={styles.opacity} onPress={this.changeSettingsNull}>
          <SettingsNews settingContent={this.props.settingContent}/>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    paddingTop: 35,
  },
  title: {
      paddingHorizontal: 30,
      backgroundColor: 'transparent',
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: "open-sans-bold"
    },
    opacity: {
        height: height,
        width: width,
    },
});
