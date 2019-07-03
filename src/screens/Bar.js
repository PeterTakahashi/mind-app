import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from 'expo-linear-gradient';
import MainIconButton from "./MainIconButton.js"

const mainColor = "rgba(255, 255, 255, 0.6)";
const selectColor = "#fff";
const width = Dimensions.get('window').width; // Window width
const height = Dimensions.get('window').height; // Window height
export default class Bar extends React.Component {
  constructor(props) {
    super(props);
  }

  renderFirstIconComponent() {
    return (
      <View style={styles.firstIcon}>
        <TouchableOpacity
          onPress={() => {
            console.log("show")
            this.setState({show: "home"})
          }}
        >
        <Icon
          name="home"
          type="Ionicons"
          size={40}
          color={selectColor}
        />
        </TouchableOpacity>
      </View>
    );
  }

  renderSecondIconComponent() {
    return (
      <View style={styles.secondIcon}>
        <TouchableOpacity
          onPress={() => {
            console.log("show")
            this.setState({show: "showcase"})
          }}
        >
          <Icon
            name="music"
            type="MaterialCommunityIcons"
            size={40}
            color={mainColor}
          />
        </TouchableOpacity>
      </View>
    );
  }

  renderThirdIconComponent() {
    return (
      <View style={styles.thirdIcon}>
        <TouchableOpacity
          onPress={() => {
            console.log("show")
            this.setState({show: "screen"})
          }}
        >
        <Icon
          name="cellphone-screenshot"
          type="MaterialCommunityIcons"
          size={45}
          color={mainColor}
        />
        </TouchableOpacity>
      </View>
    );
  }

  renderFourthIconComponent() {
    return (
      <View style={styles.forthIcon}>
        <TouchableOpacity
          onPress={() => {
            console.log("show")
            this.setState({show: "settings"})
          }}
        >
        <Icon name="settings" type="Ionicons" size={40} color={mainColor} />
        </TouchableOpacity>
      </View>
    );
  }

  renderPlayAndPause() {
    return (
      <View style={styles.play}>
        <MainIconButton />
      </View>
    )
  }
  render() {
    return (
      <View style={styles.bar}>
        {this.renderFirstIconComponent()}
        {this.renderSecondIconComponent()}
        {this.renderPlayAndPause()}
        {this.renderThirdIconComponent()}
        {this.renderFourthIconComponent()}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  bar: {
    width: width,
    height: 70,
    position: "absolute",
    bottom: 0,
    flexDirection: "row"
  },
  play: {
    flex: 1,
    alignItems: "center",
  },
  firstIcon: {
    flex: 1,
    padding: 15,
  },
  secondIcon: {
    flex: 1,
    padding: 15,
    paddingRight: 40
  },
  thirdIcon: {
    flex: 1,
    padding: 15,
    paddingLeft: 40
  },
  forthIcon: {
    flex: 1,
    padding: 15,
  }
});
