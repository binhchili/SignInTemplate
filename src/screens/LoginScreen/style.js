import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../constraints/size';

export const styles = StyleSheet.create({
    logoScreen:{
        marginTop : SCREEN_HEIGHT / 10, height: SCREEN_HEIGHT /7.5, width: SCREEN_WIDTH / 2,
        borderWidth: 1, borderColor:'red'
    },

    inputContainer :{
        marginTop : SCREEN_HEIGHT / 10, height: SCREEN_HEIGHT /4, width: SCREEN_WIDTH / 2,
        justifyContent:'space-between',alignItems:'center',
        borderWidth: 1, borderColor:'black'
    },
    inputField:{
        width:'100%',flexDirection:'row',height:'40%',
        marginVertical:8
    },
    imageView:{
        height:'70%', aspectRatio: 1.25
    },
    mainInput:{
        marginLeft: 10, width:'70%', height:'100%'
    }
})