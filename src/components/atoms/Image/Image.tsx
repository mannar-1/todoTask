import React from 'react';
import { View } from 'react-native';
import { SvgUri } from 'react-native-svg';

const Image = () => {
  return (
    <View>
      <SvgUri uri={require("src\assets\AppIcon.svg")} width="100" height="100" />
    </View>
  );
};

export default Image;
