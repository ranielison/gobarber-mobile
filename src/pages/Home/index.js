import React, {Component} from 'react';

import {View, Text} from 'react-native';

import styles from './styles';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Tela principal</Text>
        <Text style={styles.subtitle}>
          Template desenvolvido por Raniélison Soares
        </Text>
      </View>
    );
  }
}
