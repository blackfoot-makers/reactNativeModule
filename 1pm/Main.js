import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Animated,
  Easing,
} from 'react-native';

import SubText from './SubText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? 'blue' : 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    ...Platform.select({
      ios: {
        fontSize: 20,
      },
      android: {
        fontSize: 30,
      },
    }),
  },
});

export default class Main extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 4000,
      easing: Easing.elastic(0.8),
    }).start(() => console.log('animation end'));
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Text
          style={[
            styles.header,
            {
              opacity: this.state.fadeAnim,
            },
          ]}
        >
          Open up App.js to start working on your app!
        </Animated.Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <SubText />
      </View>
    );
  }
}
