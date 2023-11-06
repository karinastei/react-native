import React from "react";
import {
    Text,
    View,
    Image,
    Pressable
 } from "react-native"
 import Button from "../../../components/Button";
 import { styles } from "./styles";
 import { SafeAreaView } from "react-native-safe-area-context";
 

const Splash = ({ navigation }) => {
    console.log('navigation => ', navigation)

    const onSignup = () => {
        navigation.navigate('Signup')
    }

    const onSignin = () => {
        navigation.navigate('Signin')
    }

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_image.png')}/>

        <View style={styles.titleContainer}>
            <Text style={[styles.title, styles.textContainer]}>You'll Find Text</Text>
            <Text style={[styles.title, styles.innerTitle, styles.textContainer]}> All you need</Text>
            <Text style={[styles.title, styles.textContainer]}> Here!</Text>
        </View>
        <Button onPress={onSignup} title="Sign up" />

        <Pressable onPress={onSignin} hitSlop={20}>
            <Text style={styles.footerText}>Sign In</Text>
        </Pressable>
        </View>
        </SafeAreaView>
    )
}

export default Splash