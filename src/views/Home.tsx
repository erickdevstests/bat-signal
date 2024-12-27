
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {StatusBar} from 'expo-status-bar'

import  styles from './HomeStyles';
import { BatSignal } from '../components/BatSignal';
import { ButtonSignal } from '../components/button-active/ButtonSignal';
import { Logo } from '../components/logo/Logo';
import handleScreen from '../handleScreen';

export function Home() {
  const [active, setActive] = useState(true)

  return (
    active ?
    <View style={styles.container2}>
        <StatusBar style="light" />

        <BatSignal size={250}/>
        <ButtonSignal setActive={setActive}/>
    </View>
    : 
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{alignSelf: 'flex-start'}}>
      <Logo/>
      </View>

      <View>
        <Text>Nome:</Text>
        <TextInput 
          style={styles.input}
          cursorColor={'yellow'}
          placeholder='Nome completo'
        />

        <Text>Telefone:</Text>
        <TextInput 
            style={styles.input}
            cursorColor={'yellow'}
            placeholder='(xx) xxxxx-xxxx'
            inputMode='tel'
        />

        <Text>Localização:</Text>
        <TextInput 
              style={[styles.input, {height: 80}]}
              cursorColor={'yellow'}
              placeholder='Descreva sua localização atual'
        />

<       Text>Observação:</Text>
        <TextInput 
              style={[styles.input, {height: 80}]}
              cursorColor={'yellow'}
              placeholder='Qual a situação atual?'
        />

        <Button 
          onPress={()=>handleScreen(setActive)} 
          title='Enviar'
          color={'black'}
        />
      
      </View>
    </View>
  );
}

