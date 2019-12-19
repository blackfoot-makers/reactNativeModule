import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  textInput: {
    height: 100,
    width: 120,
  },
  containerDim: {
    height: 500,
    width: width - 40,
  },
});

export default class App extends React.Component {
  state = {
    text: '',
    posts: [],
  };

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          posts: data,
        }));
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <TextInput
          style={styles.textInput}
          placeholder="This is a text input"
          value={this.state.text}
          onChangeText={text =>
            this.setState(state => ({
              ...state,
              text,
            }))
          }
        />
        <Text>The content of the text input is [{this.state.text}]</Text>
        <Button
          onPress={() => Alert.alert('You tapped the button!')}
          title="A button"
        />
        <TouchableOpacity
          onPress={() => Alert.alert('You tapped the other button!')}
        >
          <Text>Another button</Text>
        </TouchableOpacity>
        <ScrollView style={styles.containerDim}>
          {this.state.posts.map(({ title, body }, index) => {
            return (
              <View key={`${title}${index}`} style={styles.container}>
                <Text>
                  {title}: {body}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}