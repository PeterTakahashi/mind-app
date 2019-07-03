import React, { Component } from "react";
import { StyleSheet, Platform, View, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const blueGradient = ["rgba(156, 180, 249, 1.0)", "rgba(108, 136, 246, 1.0)"];

export default class MainIconButton extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={console.log("実行された")}>
        <LinearGradient
          start={[1, 0]}
          end={[0,1]}
          colors={blueGradient}
          style={styles.gradient}
          >
              <Icon
                size={35}
                name={"play"}
                color={"white"}
                style={styles.icon}
              />
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  gradient: {
    alignItems: "center",
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  icon: {
    paddingTop: 17.5
  }
});
