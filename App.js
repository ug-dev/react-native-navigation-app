import React from 'react';
import {Button, SafeAreaView, useColorScheme, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = props => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Button
          title="Push Home Screen"
          color="#710ce3"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'Home',
                options: {
                  topBar: {
                    title: {
                      text: 'Home',
                    },
                  },
                },
              },
            })
          }
        />

        <Button
          title="Push Settings Screen"
          color="#710ce3"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'Settings',
                options: {
                  topBar: {
                    title: {
                      text: 'Settings',
                    },
                  },
                },
              },
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
