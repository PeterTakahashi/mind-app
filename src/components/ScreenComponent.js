import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
  Platform,
  View,
  Dimensions,
  StyleSheet
} from "react-native";
import Logo from "./Logo";
import styled from "styled-components";
import Cards from "../screens/Cards";
import Slider from "react-native-slider";
const width = Dimensions.get('window').width; // Window width
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from 'expo-linear-gradient';

export default class ScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.changeVideo = this.changeVideo.bind(this)
    this.changeVolume = this.changeVolume.bind(this)
    this.changeScreenKind = this.changeScreenKind.bind(this)
  }

  changeVideo(videoUri) {
    this.props.changeVideo(videoUri)
  }

  changeVolume(value) {
    this.props.changeVolume(value)
  }

  changeScreenKind(title) {
    this.props.changeScreenKind(title)
  }

  render() {
    return (<ScrollView>
      <LinearGradient start={[0, 1]} end={[0, 0.2]} colors={['transparent', 'rgba(0, 0, 0, 0.7)']} style={styles.gradient} />
      <ScrollView style={{
          flexDirection: "row",
          padding: 15,
          paddingLeft: 12,
          paddingTop: 30
        }} horizontal={true}>
        {
          this.props.screenLogos.map((logo, index) => {
            if (index == this.props.kindScreen) {
              return (<TouchableOpacity key={index} activeOpacity={0.9} onPress={() => this.changeScreenKind(index)}>
                <Logo active={this.props.kindScreen} key={index} index={index} text={logo.text}/>
              </TouchableOpacity>)
            } else {
              return (<TouchableOpacity key={index} activeOpacity={0.9} onPress={() => this.changeScreenKind(index)}>
                <Logo key={index} index={index} text={logo.text}/>
              </TouchableOpacity>)
            }
          })
        }
      </ScrollView>
      <View style={{
          justifyContent: 'center',
          alignItems: "center",
          flexDirection: 'row'
        }}>
        <Icon name="volume-high" size={40} style={{
            color: "#fff"
          }}/>
        <Slider value={this.props.value} style={{
            width: width * 0.75,
            opacity: 0.8
          }} thumbTintColor={"rgb(123, 204, 226)"} minimumTrackTintColor={"rgb(255, 255, 255)"} maximumTrackTintColor={"rgb(255, 255, 255)"} onValueChange={value => this.changeVolume(value)}/>
      </View>
      <ScrollView style={{
          paddingBottom: 100
        }}>
        <Cards cards={this.props.screenCards} changeVideo={(videoUri) => {
            this.changeVideo(videoUri)
          }}/>
      </ScrollView>
    </ScrollView>)
  }
}

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
  },
})
