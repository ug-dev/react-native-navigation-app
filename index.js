/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeScreen from './src/home-screen';
import SettingsScreen from './src/settings-screen';
import LoginScreen from './src/login-screen';
import UserScreen from './src/user-screen';

App.options = {
  topBar: {
    visible: false,
  },
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
  bottomTab: {
    text: 'Home',
  },
};

// UserScreen.options = {
//   animations: {
//     push: {
//       content: {
//         translationX: {
//           from: require('react-native').Dimensions.get('window').width,
//           to: 0,
//           duration: 300,
//         },
//       },
//     },
//     pop: {
//       content: {
//         translationX: {
//           from: 0,
//           to: -require('react-native').Dimensions.get('window').width,
//           duration: 300,
//         },
//       },
//     },
//   },
//   topBar: {
//     title: {
//       text: 'User',
//     },
//   },
// };

SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Settings',
    },
  },
  bottomTab: {
    text: 'Settings',
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

Navigation.setDefaultOptions({
  animations: {
    setStackRoot: {
      enter: {
        waitForRender: true,
        enabled: true,
        translationY: {
          from: 0,
          to: 1,
          duration: 3,
        },
      },
    },
  },
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
  },
});

Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('User', () => UserScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);

/* Stack Navigation */

export const loginRoot = {
  root: {
    component: {
      name: 'Login',
    },
  },
};

/* Bottom Navigation */

export const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Home',
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Settings',
                },
              },
            ],
          },
        },
      ],
    },
  },
};

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(isLoggedIn() ? mainRoot : loginRoot);
});

const isLoggedIn = () => {
  return false;
};

AppRegistry.registerComponent(appName, () => App);
