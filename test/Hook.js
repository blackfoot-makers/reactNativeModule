import React, { useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';

const Hook = ({}) => {
  return (
    <View>
      <Text>Functional Component</Text>
    </View>
  );
};

const HookState = ({}) => {
  const [count, setCount] = useState(0);
  const onPress = () => {
    setCount(count + 1);
  };
  return (
    <View>
      <Text>Functional Component : {count}</Text>
      <Button title="Press me" onPress={onPress} />
    </View>
  );
};

const HookStateCallback = ({}) => {
  const [count, setCount] = useState(0);
  const onPress = useCallback(() => {
    setCount(count + 1);
  }, [setCount]);
  return (
    <View>
      <Text>Functional Component: {count}</Text>
      <Button title="Press me" onPress={onPress} />
    </View>
  );
};

const HookStateMount = ({}) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({ count: 0, loading: true });

  const onPress = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    setLoading(false);
    setState({ ...state, loading: false });
    return () => {
      setLoading(true);
    };
  }, [count, loading]);

  return (
    <View>
      <Text>{loading ? 'Functional Component' : `My count is ${count}`}</Text>
      <Button title="Press me" onPress={onPress} />
    </View>
  );
};
export default Hook;
