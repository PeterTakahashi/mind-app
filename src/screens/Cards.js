import React from 'react';
import {
  View, StyleSheet, Dimensions,TouchableOpacity, Text, Image
} from 'react-native';
import theme from '../theme';
const { width, height } = Dimensions.get('screen');

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.changeVideo = this.changeVideo.bind(this);
  }

  changeVideo(videoUri) {
    this.props.changeVideo(videoUri)
  }

  render() {
    return (
        <View style={styles.cards}>
            {this.props.cards && this.props.cards.map((card, id) => (
                <TouchableOpacity key={id} activeOpacity={0.7} style={styles.cardopacity} onPress={() => {this.changeVideo(card.videoUri)}}>
                <Image
                  style={styles.card}
                  source={card.image}
                 />
               <View style={styles.cardTitleView}>
                  <Text style={styles.cardTitle}>
                    {card.title}
                  </Text>
                </View>
                </TouchableOpacity>
            ))}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    width,
    backgroundColor: "rgba(255, 255, 255, 0)",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardopacity: {
    width: width / 2.6,
    height: height / 2.5,
  },
  card: {
    borderRadius: width * 0.04,
    backgroundColor: "rgba(255, 255, 255, 0)",
    width: width / 2.6,
    height: height / 3.4,
    marginVertical: theme.SIZES.BASE * 0.9,
  },
  cardTitleView: {

  },
  cardTitle: {
    color: "#fff",
    textAlign: 'center',
  }
});
