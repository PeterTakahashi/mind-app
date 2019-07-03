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
    this.barAction = this.barAction.bind(this)
  }

  barAction(showState) {
    this.props.barAction(showState)
  }


  render() {
    return (
      <View style={styles.bar}>
        <View style={styles.firstIcon}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.barAction("home")}
          >
          <Icon
            name="home"
            type="Ionicons"
            size={40}
            color={"home" == this.props.show ? selectColor: mainColor}
          />
          </TouchableOpacity>
        </View>

        <View style={styles.secondIcon}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.barAction("showcase")}
          >
            <Icon
              name="music"
              type="MaterialCommunityIcons"
              size={40}
            color={"showcase" == this.props.show ? selectColor: mainColor}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.play}>
          <MainIconButton />
        </View>
        <View style={styles.thirdIcon}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.barAction("screen")}
          >
          <Icon
            name="cellphone-screenshot"
            type="MaterialCommunityIcons"
            size={45}
            color={"screen" == this.props.show ? selectColor: mainColor}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.forthIcon}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.barAction("settings")}
          >
          <Icon name="settings" type="Ionicons" size={40}
            color={"settings" == this.props.show ? selectColor: mainColor}
          />
          </TouchableOpacity>
        </View>
      </View>

    )
  }

}

const styles = StyleSheet.create({
  bar: {
    width: width,
    height: 70,
    position: "absolute",
    bottom: 5,
    flexDirection: "row",
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
