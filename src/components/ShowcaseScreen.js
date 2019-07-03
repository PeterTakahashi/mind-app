import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
  Platform,
  StyleSheet
} from "react-native";
import Logo from "./Logo";
import styled from "styled-components";
import Cards from "../screens/CardsShowCase";
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
  },
})
export class ShowcaseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.showVoice = this.showVoice.bind(this)
    this.changeVoiceKind = this.changeVoiceKind.bind(this)
  }

  showVoice(key) {
    this.props.showVoice(key)
  }

  changeVoiceKind(title) {
    this.props.changeVoiceKind(title)
  }

  render() {
    return (
      <ScrollView style={{ height: "100%", marginBottom: 100}}>
        <LinearGradient start={[0, 1]} end={[0, 0.2]} colors={['transparent', 'rgba(0, 0, 0, 0.7)']} style={styles.gradient} />
        <ScrollView style={{
            flexDirection: "row",
            padding: 15,
            paddingLeft: 12,
            paddingTop: 30
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
          {this.props.logos.map((logo, index) => {
            if (index == this.props.kindVoice) {
              return (
                <TouchableOpacity key={index} activeOpacity={0.9} onPress={() => this.changeVoiceKind(index)}>
                  <Logo active={this.props.kindVoice} key={index} index={index} text={logo.text} />
                </TouchableOpacity>
              )
            } else {
                return (
                  <TouchableOpacity key={index} activeOpacity={0.9} onPress={() => this.changeVoiceKind(index)}>
                    <Logo key={index} index={index} text={logo.text} />
                  </TouchableOpacity>
                )
              }
            }
          )}
      </ScrollView>
      <Cards cards={this.props.cards} showVoice={this.showVoice}/>
    </ScrollView>
    )
  }
}
