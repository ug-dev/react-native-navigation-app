import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

const UserScreen = () => {
  return (
    <View style={styles.root}>
      <StatusBar animated={true} barStyle={'light-content'} />
      <Text>User Screen!</Text>
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

export default UserScreen;
