import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Splash from './src/screens/auth/Splash';
import AuthHeader from './src/components/AuthHeader';
import Signup from './src/screens/auth/Signup';
import Input from './src/components/Input';
import Signin from './src/screens/auth/Signin';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { colors } from './src/utils/colors';
import {SafeAreaProvider} from 'react-native-safe-area-context';

//const REVERSED_CLIENT_ID = 'com.googleusercontent.apps.79243600821-jdm74p3nr5frlui1p9hqismip60vui8m'

const Stack = createNativeStackNavigator();

const theme = {
  colors: {
    background: colors.white
  },
};

const App = () => {
  //useEffect(() => {}, [])
  return (
    <SafeAreaProvider>
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
          <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
          <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
