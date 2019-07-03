import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const blueGradient = ["rgba(102, 176, 204, 1)", "rgba(142, 108, 237, 1)"];


export default class Logo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.index == this.props.active) {
      return (
        <LinearGradient
          colors={blueGradient}
          style={styles.gradient}
          start={[0.3, 0.7]}
          end={[0.7, 0.3]}>
          <Text style={styles.gradientText}>{this.props.text}</Text>
        </LinearGradient>
      )
    } else {
      return (
        <View style={styles.logo}>
          <Text style={styles.gradientText}>{this.props.text}</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  gradient: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    padding: 12,
    margin: 8,
  },
  gradientText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    padding: 10,
    margin: 8,
    backgroundColor: "rgba(93, 93, 93, 0.6)",
  }
});

//
// const Container = styled.View`
//   flex-direction: row;
//   background: rgba(0, 0, 0, 0.5);
//   height: 60px;
//   padding: 12px 16px 12px;
//   border-radius: 10px;
//   box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
//   align-items: center;
//   margin: 0 8px;
// `;
//
// const Text = styled.Text`
//   font-weight: 600;
//   font-size: 17px;
//   color: white;
// `;
//
// const ActiveContainer = styled.View`
//   flex-direction: row;
//   background: black;
//   height: 60px;
//   padding: 12px 16px 12px;
//   border-radius: 10px;
//   box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
//   align-items: center;
//   margin: 0 8px;
// `;
//
// const ActiveText = styled.Text`
//   font-weight: 600;
//   font-size: 17px;
//   color: white;
// `;
