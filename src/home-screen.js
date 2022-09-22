import React from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

const HomeScreen = props => {
  return (
    <View style={styles.root}>
      <StatusBar animated={true} barStyle={'light-content'} />
      <Text>Home Screen!</Text>
      <Button
        title="Push User Screen"
        color="#710ce3"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'User',
              options: {
                topBar: {
                  title: {
                    text: 'User',
                  },
                },
              },
            },
          })
        }
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

export default HomeScreen;
