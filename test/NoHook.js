import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';

class NoHook extends PureComponent {
  render() {
    return (
      <View>
        <Text>Functional Class</Text>
      </View>
    );
  }
}

class NoHookState extends PureComponent {
  state = {
    count: 0,
  };

  onPress = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <View>
        <Text>Functional Class: {count}</Text>
        <Button title="Press me" onPress={this.onPress} />
      </View>
    );
  }
}

class NoHookStateMount extends PureComponent {
  state = {
    count: 0,
    loading: true,
  };

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  componentWillUnmount() {
    this.setState({
      loading: true,
    });
  }

  componentDidUpdate(prevPros, prevState) {
    if (
      this.state.count !== prevState.count ||
      this.state.count !== prevState.count
    ) {
      this.setState({
        loading: false,
      });
    }
  }

  onPress = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  render() {
    const { loading, count } = this.state;
    return (
      <View>
        <Text>{loading ? 'Functional Class' : `My count is ${count}`}</Text>
        <Button title="Press me" onPress={this.onPress} />
      </View>
    );
  }
}
export default NoHook;
