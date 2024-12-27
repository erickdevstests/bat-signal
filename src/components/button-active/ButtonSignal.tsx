import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from './ButtonSignalStyle';
import handleScreen from '../../handleScreen';

export function ButtonSignal({setActive}: any) {
  return (
    <View style={styles.buttonView}>
        <Text 
          style={styles.textButton}
          onPress={() => handleScreen(setActive)}
        >
            Ativar Bat-sinal
        </Text>
    </View>
  );
}