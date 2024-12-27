import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './LogoStyle';

export function Logo() {
  return (
    <View style={styles.container}>
        <Image 
        source={require('../../../assets/bat-logo.png')}
        resizeMode='contain'
        style={styles.img}
    />
    </View>
  );
}