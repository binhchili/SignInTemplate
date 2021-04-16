import React from "react";
import {Text, StyleSheet, Image, View, TextInput} from 'react-native';

export const InputFied = (props) =>{
    return(
        <View style={{...props.styles, flexDirection:'row'}}>
            <View style={{...props.imageView,justifyContent:'center'}}>
                <Image style={props.imageStyle} source={require(props.source)}></Image>
                <TextInput style={props.inputView} placeholder= {props.placeholder}></TextInput>
            </View>
        </View>
    )
}