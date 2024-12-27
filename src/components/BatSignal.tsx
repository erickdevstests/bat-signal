import React from 'react';
import { Image } from 'react-native';

import BatSignalImg from '../../assets/Bat-Signal.png';

interface BatSignalProps  {
  size?: number;
}

export function BatSignal({size = 100}: BatSignalProps) {
  return (
        <Image 
          source={BatSignalImg} 
          style={{ width: size, height: size}} 
          resizeMode='contain'
        />
  );
}

