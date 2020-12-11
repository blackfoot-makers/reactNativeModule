import React, { useRef, useCallback } from 'react'
import { Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_900Black } from '@expo-google-fonts/roboto';
import LottieView from 'lottie-react-native';

import Homer from './Homer';

function useHookWithRefCallback() {
  const ref = useRef(null)
  const setRef = useCallback(node => {
    if (ref.current) {
      ref.current.pause();
      // Make sure to cleanup any events/references added to the last instance
    }

    if (node) {
      node.play();
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
    }

    // Save a reference to the node
    ref.current = node
  }, [])

  return [setRef]
}

const SplashScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Roboto_900Black,
  });
  const [animation] = useHookWithRefCallback();
  // useEffect(() => {
  //   console.log('animation useeffet', animation.current);
  //   if (animation.current) animation.current.play();
  //   return () => {
  //     if (animation.current)
  //   }
  // }, [animation, animation.current]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <Text style={{ fontFamily: 'Roboto_900Black', fontSize: 42, textAlign: 'center' }}>SplashScreen</Text>
      <LottieView
        ref={animation}
        style={{
          width: 400,
          height: 400,
          position: 'absolute'
        }}
        speed={0.5}
        source={require('../../assets/1088-shape-types.json')}
      />
      <Button title="navigate" onPress={() => animation.current.play()} />
      <Homer />
    </SafeAreaView>
  )
}

export default SplashScreen;
