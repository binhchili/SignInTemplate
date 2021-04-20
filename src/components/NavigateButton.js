import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

export const NavigateButton = ({ navigation, apiCall, screen, params }) => {
  const navigate = () => navigation.navigate(screen, params)
  return <TouchableOpacity>

  </TouchableOpacity>;
};
