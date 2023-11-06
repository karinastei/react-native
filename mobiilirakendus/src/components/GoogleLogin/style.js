import { StyleSheet } from "react-native"

import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGrey,
        borderRadius: 14,
        width: '45%',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 16,
        marginBottom: 30
    },
    image: {
        width: 30,
        height: 30,
    }
})