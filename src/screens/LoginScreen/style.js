import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../constraints/size';
import * as Color from '../../constraints/color';

export const styles = StyleSheet.create({
    mainScreen: {
        width: '100%', height: '100%', backgroundColor: Color.DEEP_BLUE, alignItems: 'center',

    },
    logoScreen: {
        marginTop: SCREEN_HEIGHT / 10, height: SCREEN_HEIGHT / 7.5, width: SCREEN_WIDTH / 2,
        borderWidth: 1, borderColor: 'red'
    },

    inputContainer: {
        marginTop: SCREEN_HEIGHT / 10, height: SCREEN_HEIGHT / 3, width: SCREEN_WIDTH / 1.4,
        alignItems: 'center',
        borderWidth: 1, borderColor: Color.GRAY, borderRadius: 10,
        backgroundColor: 'white'
    },
    inputField: {
        width: '100%', flexDirection: 'row', height: '30%',
        marginVertical: 5, alignItems: 'center',

    },
    imageView: {
        height: '60%', aspectRatio: 1, marginLeft: 5,
        justifyContent: 'center', alignItems: 'center'
    },
    image: {
        width: '60%', height: '60%'
    },
    mainInput: {
        marginLeft: 10, width: '75%', height: '60%',
        borderWidth: 1, borderColor: Color.LIGHT_GRAY, borderRadius: 10
    },

    logButton: {
        justifyContent: 'center', alignItems: 'center',
        width: '60%', aspectRatio: 3.5, marginTop: 20,
        borderRadius: 10, borderWidth: 1, borderColor: Color.GRAY
    }
})