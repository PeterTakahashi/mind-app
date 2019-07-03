import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, StyleSheet, ScrollView, Platform,TouchableOpacity
} from 'react-native';

import { Constants } from 'expo';

// Galio components
import {
  Button, Block, Card, Text, Icon, NavBar,
} from 'galio-framework';
import theme from '../theme';

export default class SetttingsNews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Block style={{position: 'absolute',top: 50,right: theme.SIZES.BASE,left: theme.SIZES.BASE,}} safe flex>
        {this.props.settingContent.map((card, id) => (
          <TouchableOpacity key={id} activeOpacity={0.9}>
          <Card
            key={id}
            flex
            borderless
            shadowColor={theme.COLORS.BLACK}
            style={styles.author}
            title={card.title}
            caption={card.caption}
            avatar={card.image}
            titleColor="#fff"
          />
        </TouchableOpacity>
        ))}

      </Block>
    )
  }
}

const styles = StyleSheet.create({
  author: {
    marginTop: 15,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: theme.SIZES.BASE / 2,
    color: "#fff"
  },
});
