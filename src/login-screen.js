import React from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {mainRoot} from '..';

const LoginScreen = props => {
  return (
    <View style={styles.root}>
      <StatusBar animated={true} barStyle={'dark-content'} />
      <Text>Login Screen!</Text>
      <Button
        title="Login"
        color="#710ce3"
        onPress={() => Navigation.setRoot(mainRoot)}
      />
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

export default LoginScreen;
