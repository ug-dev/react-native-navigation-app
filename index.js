/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeScreen from './src/home-screen';
import SettingsScreen from './src/settings-screen';

App.options = {
  topBar: {
    visible: false,
  },
};

/* Setting default app theme */

// Navigation.setDefaultOptions({
//   statusBar: {
//     backgroundColor: '#4d089a',
//   },
//   topBar: {
//     title: {
//       color: 'white',
//     },
//     backButton: {
//       color: 'white',
//     },
//     background: {
//       color: '#4d089a',
//     },
//   },
// });

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'App',
            },
          },
        ],
      },
    },
  });
});

AppRegistry.registerComponent(appName, () => App);
