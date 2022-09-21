import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Settings Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default SettingsScreen;
