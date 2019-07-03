import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Linking,
  View,
  Text,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import SettingsComponent from "./src/components/SettingsComponent";
import VideoComponent from "./src/components/VideoComponent";
import HomeComponent from "./src/components/HomeComponent";
import ScreenComponent from "./src/components/ScreenComponent";
import { ShowcaseScreen } from "./src/components/ShowcaseScreen";
import * as Font from 'expo-font';
import ArticleCover from "./src/screens/ArticleCover";
import Bar from "./src/Bar";
import MainIconButton from "./src/MainIconButton";

const width = Dimensions.get('window').width; // Window width
const height = Dimensions.get('window').height; // Window height

const mainColor = "rgba(255, 255, 255, 0.6)";
const selectColor = "#fff";

Font.loadAsync({'open-sans-bold': require('./assets/fonts/DancingScript-Regular.ttf')});

// バックスクリーンのタブメニューとバックスクリーンのコンテンツ
const screenLogos = [
  {
    text: "水の音",
    content: [
      {
        image: require("./assets/image/water.png"),
        title: '雨の音',
        videoUri: {uri: "https://firebasestorage.googleapis.com/v0/b/mind-productbank.appspot.com/o/video.mp4?alt=media&token=4ba0929b-ae3f-4252-9a6a-f0342fa7132d"}
      }, {
        image: require("./assets//image/sea.png"),
        title: '海の音',
        videoUri: {uri: "https://firebasestorage.googleapis.com/v0/b/mind-productbank.appspot.com/o/sea.mp4?alt=media&token=ba90e77d-8d07-4488-9f2a-9d616a842081"}
      }, {
        image: require("./assets//image/sky.png"),
        title: '波の音',
        videoUri: {uri: "https://firebasestorage.googleapis.com/v0/b/mind-productbank.appspot.com/o/wave.mp4?alt=media&token=b67827eb-c164-4dfa-b06c-424ffcbdd3c5"}
      }
    ]
  }, {
    text: "森の音",
    content: [
      {
        image: require("./assets//image/sky.png"),
        title: '波の音',
        videoUri: {uri: "https://firebasestorage.googleapis.com/v0/b/mind-productbank.appspot.com/o/wave.mp4?alt=media&token=b67827eb-c164-4dfa-b06c-424ffcbdd3c5"}
      }
    ]
  }, {
    text: "名所の音",
    content: []
  }, {
    text: "生活の音",
    content: []
  }
];


// 瞑想のコンテンツ
const logos = [
  {
    text: "マインドフルネス",
    content: [
      {
        key: "Dd4EtjxS",
        image: 'https://cdn.pixabay.com/photo/2018/06/17/16/08/meditation-3480815_1280.jpg',
        title: 'はじめての瞑想',
        caption: '7 min'
      }, {
        key: "mX4zdatK",
        image: 'https://cdn.pixabay.com/photo/2019/06/24/15/31/forest-4296305_960_720.jpg',
        title: 'はじめての瞑想',
        caption: '7 min'
      }, {
        key: "Qf26D3MF",
        image: 'https://cdn.pixabay.com/photo/2018/06/17/16/08/meditation-3480815_1280.jpg',
        title: 'はじめての瞑想',
        caption: '7 min'
      }, {
        key: "Ph8dpSbn",
        image: 'https://cdn.pixabay.com/photo/2018/06/17/16/08/meditation-3480815_1280.jpg',
        title: 'はじめての瞑想',
        caption: '7 min'
      }
    ]
  }, {
    text: "ベーシック",
    content: [
      {
        key: "k3LwrvJh",
        image: 'https://cdn.pixabay.com/photo/2018/06/17/16/08/meditation-3480815_1280.jpg',
        title: "ベーシック瞑想",
        caption: '7 min'
      }
    ]
  }, {
    text: "リラックス",
    content: [
      {
        key: "Yx875qej",
        image: 'https://cdn.pixabay.com/photo/2018/06/17/16/08/meditation-3480815_1280.jpg',
        title: 'リラックスできる瞑想',
        caption: '7 min'
      }
    ]
  }, {
    text: "ストーリー",
    content: [
      {
        key: "En3mJY2F",
        image: 'https://cdn.pixabay.com/photo/2018/06/17/16/08/meditation-3480815_1280.jpg',
        title: '物語',
        caption: '7 min'
      }
    ]
  }
];

const news = [
  {
    key: "Dd4EtjxS",
    title: "はじめての瞑想",
    caption: "9 min",
    image: "https://cdn.pixabay.com/photo/2018/06/17/16/08/meditation-3480815_1280.jpg"
  }
]

const settingContent = [
  {
    title: "クラウドファンディング開催中",
    caption: "",
    image: "http://i.pravatar.cc/100?id=article"
  }
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: "Dd4EtjxS",
      audioContent: null,
      beforeShow: null,
      show: "home",
      videoUri: {uri: "https://firebasestorage.googleapis.com/v0/b/mind-productbank.appspot.com/o/video.mp4?alt=media&token=4ba0929b-ae3f-4252-9a6a-f0342fa7132d"},
      value: 1,
      kindVoice: 0,
      kindScreen: 0,
      isShow: false,
      videoContainer: {
        zIndex: 1
      }
    }
    this.changeVideo = this.changeVideo.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.closeVoice = this.closeVoice.bind(this);
    this.showVoice = this.showVoice.bind(this);
    this.changeVoiceKind = this.changeVoiceKind.bind(this);
    this.changeScreenKind = this.changeScreenKind.bind(this);
    this.changeNull = this.changeNull.bind(this)
    this.changeSettingsNull = this.changeSettingsNull.bind(this)
    this.barAction = this.barAction.bind(this)
  }

  renderStack() {
    console.log(this.state.show)
    if (this.state.show == "showcase") {
      return (<ShowcaseScreen kindVoice={this.state.kindVoice} changeVoiceKind={this.changeVoiceKind} cards={logos[this.state.kindVoice].content} logos={logos} showVoice={this.showVoice}/>)
    } else if (this.state.show == "settings") {
      return (<SettingsComponent changeSettingsNull={this.changeSettingsNull} settingContent={settingContent}/>)
    } else if (this.state.show == "home") {
      return (<HomeComponent changeNull={this.changeNull} news={news} showVoice={this.showVoice}/>)
    } else if (this.state.show == "screen") {
      return (<ScreenComponent kindScreen={this.state.kindScreen} changeScreenKind={this.changeScreenKind} screenLogos={screenLogos} screenCards={screenLogos[this.state.kindScreen].content} value={this.state.value} changeVolume={this.changeVolume} changeVideo={this.changeVideo}/>)
    } else if (this.state.show == "voice") {
      return (<ArticleCover audioContent={this.state.audioContent} closeVoice={this.closeVoice}/>)
    } else if (this.state.show == "homeNull") {
      return (<TouchableOpacity onPress={() => {
          this.setState({show: "home"})
        }} style={styles.nullcantainer}/>)
    } else if (this.state.show == "settingsNull") {
      return (<TouchableOpacity onPress={() => {
          this.setState({show: "settings"})
        }} style={styles.nullcantainer}/>)
    }
  }

  renderBottomBar() {
    if (this.state.show == "voice" || this.state.show == "homeNull" || this.state.show == "settingsNull") {
      return (<View/>)
    } else {
      return (<Bar barAction={this.barAction} show={this.state.show}/>)
    }
  }

  barAction(showValue) {
    this.setState({show: showValue})
  }

  changeVideo(videoUri) {
    this.setState({videoUri: videoUri})
  }

  changeVolume(value) {
    this.setState({value: value})
  }

  closeVoice() {
    this.setState({show: this.state.beforeShow})
  }

  showVoice(key) {
    logos.forEach(function(element) {
      element.content.forEach(function(elementContent) {
        if (elementContent.key == key) {
          title = elementContent.title
          image = elementContent.image
          caption = elementContent.caption
        } else {
          return null
        }
      })
    });
    this.setState({
      beforeShow: this.state.show,
      show: "voice",
      audio: key,
      audioContent: {
        title: title,
        image: image,
        caption: caption
      }
    })
    console.log(title)
    console.log(key)
  }

  changeVoiceKind(id) {
    this.setState({kindVoice: id})
    console.log(id)
  }

  changeScreenKind(id) {
    this.setState({kindScreen: id})
    console.log(id)
  }

  changeNull() {
    this.setState({show: "homeNull"})
  }

  changeSettingsNull() {
    this.setState({show: "settingsNull"})
  }

  render() {
    return (<View style={styles.container}>
      <VideoComponent videoContainer={this.state.videoContainer} value={this.state.value} videoUri={this.state.videoUri}/>
      <View style={styles.mainContainer}>
        {this.renderStack()}
        {this.renderBottomBar()}
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    zIndex: 1,
    height: height,
    width: width
  },
  mainContainer: {
    zIndex: 1,
    backgroundColor: "rgba(1, 1, 1, 0.2)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  touch: {
    zIndex: 1,
    width: width,
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  nullcantainer: {
    width: width,
    height: height,
    zIndex: 1
  }
});
