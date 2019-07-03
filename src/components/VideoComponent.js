import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from "expo-av";

const width = Dimensions.get('window').width; // Window width
const height = Dimensions.get('window').height; // Window height

export default class VideoComponent extends React.Component  {
  constructor(props){
    super(props);
  }

  _renderVideo (videoUri, videoContainer) {
      return (
        <View style={videoContainer}>
          <Video
            source={videoUri}
            rate={1.0}
            volume={1}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{ width: width, height: height }}
          />
        </View>
      )
  }

  render () {
    return (
      this._renderVideo(this.props.videoUri, this.props.videoContainer)
    );
  }
}

const styles = StyleSheet.create({
  videoContainer: {
    zIndex: 1,
  }
});
