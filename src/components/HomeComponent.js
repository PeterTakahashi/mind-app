import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Platform } from 'react-native';
import News from "../screens/News";
import { AppLoading } from "expo";
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
const width = Dimensions.get('window').width; // Window width
const height = Dimensions.get('window').height; // Window height


export default class HomeComponent extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      loading: false
    }
    this.showVoice = this.showVoice.bind(this);
    this.changeNull = this.changeNull.bind(this);
  }


  showVoice(key) {
    this.props.showVoice(key)
  }

  changeNull() {
    this.props.changeNull()
  }

  async componentWillMount() {
    await Font.loadAsync({
      'open-sans-bold': require('../../assets/fonts/DancingScript-Regular.ttf'),
    });
    this.setState({ loading: true });
  }

  render () {
    return (
      <View style={styles.homeContainer}>
        <TouchableOpacity style={styles.opacity} onPress={this.changeNull}>
            <LinearGradient start={[0, 1]} end={[0, 0.2]} colors={['transparent', 'rgba(0, 0, 0, 0.7)']} style={styles.gradient} />
              {this.state.loading ? (
                <Text style={styles.title}>Mind</Text>
                ) : null
              }
            <News showVoice={this.showVoice} news={this.props.news}/>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {

  },
  opacity: {
      height: height,
      width: width,
  },
  title: {
      paddingHorizontal: 30,
      paddingTop: 35,
      backgroundColor: 'transparent',
      color: 'rgba(255, 255, 255, 0.9)',
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: Platform.OS === 'ios' ? "open-sans-bold" : "serif",
    },
    gradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 100,
    },
});
