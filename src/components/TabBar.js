import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {DEEP_BLUE, LIGHT_GRAY} from '../constraints/color';

export const TabBar = ({state, descriptors, navigation}) => (
  <View style={styles.tabContainer}>
    {state.routes.map((route, index) => {
      const {options} = descriptors[route.key];
      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      return (
        <TouchableOpacity onPress={onPress} style={styles.tabBar}>
          <View style={styles.imageView}>
            <Image
              source={options.img}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <Text
            style={
              state.index === index ? styles.focusTitle : styles.unfocusTitle
            }>
            {label}
          </Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '15%',
  },
  tabBar: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageView: {
    height: '80%',
    aspectRatio: 1,
  },
  unfocusTitle: {
    fontFamily: 'SF-UI-Display-Medium',
    fontSize: 12,
    color: LIGHT_GRAY,
  },
  focusTitle: {
    fontFamily: 'SF-UI-Display-Medium',
    fontSize: 12,
    color: DEEP_BLUE,
  },
});