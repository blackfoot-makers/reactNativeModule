import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TabOneParamList } from '../types';

type NavigationProps = StackNavigationProp<
  TabOneParamList,
  'TabOneScreen'
>;

type Props = {
  navigation: NavigationProps
};


export default function TabOneScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <Button title="Go to tab two" onPress={() => navigation.navigate('TabTwoScreen')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
