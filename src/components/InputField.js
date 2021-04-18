import React from "react";
import {Text, StyleSheet, Image, View, TextInput} from 'react-native';

export const InputFied = (props) =>{
    return(
        <View style={{...props.container, flexDirection:'row'}}>
            <View style={{...props.imageView,...styles.imageView}}>
                <Image style={styles.image} source={require(props.source)}></Image>  
            </View>
            <TextInput style={props.inputView} placeholder= {props.placeholder} secureTextEntry={props.placeholder == 'Password'}></TextInput>
        </View>
    )
}

const styles= StyleSheet.create({
    imageView : {
        borderWidth: 1, borderColor:'red',justifyContent:'center'
    },
    image:{
        width:'100%', height:'100%'
    }
})