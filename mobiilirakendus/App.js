import React, { useEffect } from 'react';
import {SafeAreaView} from 'react-native';
import Splash from './src/screens/auth/Splash';
import AuthHeader from './src/components/AuthHeader';
import Signup from './src/screens/auth/Signup';
import Input from './src/components/Input';
import Signin from './src/screens/auth/Signin';
import { NavigationContainer } from '@react-navigation/native';

//const REVERSED_CLIENT_ID = 'com.googleusercontent.apps.79243600821-jdm74p3nr5frlui1p9hqismip60vui8m'

const App = () => {
  //useEffect(() => {}, [])
  return (
    <NavigationContainer>
    <SafeAreaView>
       <Signin/>
    </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
