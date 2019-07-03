import React from 'react';
import {
  View, StyleSheet, Dimensions, Platform,TouchableOpacity,ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

// Galio components
import {
  Card, Block, NavBar,
} from 'galio-framework';
import theme from '../theme';

const { width } = Dimensions.get('screen');



export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.showVoice = this.showVoice.bind(this)
  }

  showVoice(key) {
    this.props.showVoice(key)
  }

  render() {
    return (
          <ScrollView style={styles.cards}>
            {this.props.cards && this.props.cards.map((card, id) => (
              <TouchableOpacity key={id} onPress={() => this.showVoice(card.key)} activeOpacity={0.9} style={{alignItems: "center"}}>
                <Card
                  key={id}
                  flex
                  borderless
                  shadowColor={theme.COLORS.BLACK}
                  titleColor={theme.COLORS.WHITE}
                  style={styles.card}
                  title={card.title}
                  caption={card.caption}
                  image={card.image}
                  footerStyle={styles.full}
                >
                   <LinearGradient colors={['transparent', 'rgba(0,0,0, 0.8)']} style={styles.gradient} />
                </Card>
            </TouchableOpacity>
            ))}
          </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cards: {
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
  },
  full: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  gradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: 'absolute',
    borderBottomRightRadius: theme.SIZES.BASE * 0.1875,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.1875,
  },
});
