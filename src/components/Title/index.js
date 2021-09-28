import React from 'react';
import { View, Text } from 'react-native';
import styles from './Style';

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>PROJETO FIT</Text>
    </View>
  );
}