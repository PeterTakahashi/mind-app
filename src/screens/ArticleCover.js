import React from 'react';
import {Image, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import {Constants } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';
// galio components
import {Block, Text, NavBar} from 'galio-framework';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from '../theme';

export default class ArticleCover extends React.Component {
  constructor(props) {
    super(props);
    this.closeVoice = this.closeVoice.bind(this);
  }

  closeVoice() {
    this.props.closeVoice()
  }

  render() {
    return (
      <Block flex={1} style={{
        zIndex: 20
      }}>
      <StatusBar hidden={false} barStyle="light-content"/>
      <Image style={styles.backgroundImage} source={{
          uri: this.props.audioContent.image
        }}/>
      <LinearGradient start={[0, 1]} end={[0, 0.2]} colors={['transparent', 'rgba(0, 0, 0, 0.7)']} style={styles.gradientLeft}/>
      <TouchableOpacity style={styles.closeContainer} onPress={this.closeVoice}>
        <Block style={styles.close}>
          <Icon name="arrow-left" color="white" size={35}/>
        </Block>
      </TouchableOpacity>
      <Block flex={1} space="between" center={true} style={styles.absolute}>
        <Block style={styles.articleSummary}>
          <Block style={styles.playandpause}>
            <TouchableOpacity>
              <Icon name="play" color="#fff" size={60}/>
            </TouchableOpacity>
          </Block>
          <Block>
            <Text color={theme.COLORS.WHITE} size={theme.SIZES.FONT * 0.875} style={{
                marginBottom: theme.SIZES.BASE,
                fontWeight: '400'
              }}>
              {this.props.audioContent.title}
            </Text>
            <Text size={theme.SIZES.FONT * 0.875} color={theme.COLORS.WHITE} style={{
                marginBottom: theme.SIZES.BASE,
                fontWeight: '500',
                lineHeight: theme.SIZES.FONT * 1.3
              }}>
              Just small talk from the Fantastic Four.
            </Text>
            <Text size={theme.SIZES.FONT * 0.875} color={theme.COLORS.WHITE} style={{
                marginBottom: theme.SIZES.BASE / 2,
                fontWeight: '500',
                lineHeight: theme.SIZES.FONT * 1.3
              }}>
              So... Did you ever think about this bus? Like... How could this bus have all these weird colors. This purple is really cute though.
            </Text>
          </Block>
          <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.7)']} style={styles.gradient}/>
        </Block>
      </Block>
    </Block>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%'
  },
  absolute: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  playandpause: {
    justifyContent: "center",
    alignItems: 'center',
    paddingBottom: 20
  },
  close: {
    position: 'absolute',
    top: 15,
    left: 10
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90
  },
  gradientLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100
  },
  articleSummary: {
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 20
  },
  closeContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 100
  }
});
