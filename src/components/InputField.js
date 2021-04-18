import React, {useContext,useEffect} from "react";
import {Text, StyleSheet, Image, View, TextInput} from 'react-native';



export const InputField = React.memo((props) =>{
    useEffect(()=>{
        console.log(props.placeholder + " " + props.value);
    })
    return(
        <View style={{...props.container, flexDirection:'row'}}>
            <View style={{...props.imageView,...styles.imageView}}>
                <Image style={props.image} source={props.source}></Image>  
            </View>
            <TextInput style={props.inputView} placeholder= {props.placeholder} secureTextEntry={props.placeholder == 'Password'}
                    value={props.value} onChangeText={props.onChange}/>
        </View>
    )
},areEqual)

const areEqual = (prevProps, nextProps)=>{
    return prevProps.value == nextProps.value
}

const styles= StyleSheet.create({
    imageView : {
        borderWidth: 1, borderColor:'black',justifyContent:'center',
        borderRadius:30
    },
    image:{
        width:'100%', height:'100%'
    }
})