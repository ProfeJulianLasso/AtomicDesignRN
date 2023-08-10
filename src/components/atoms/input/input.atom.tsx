/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Text, View} from 'react-native';
import {useInputHook} from './hooks';
import {InputAtomStyle} from './input.style';

const InputAtom = () => {
  const {text, onChangeText, error} = useInputHook();
  return (
    <View>
      <InputAtomStyle
        keyboardType="numeric"
        value={text?.toString()}
        onChangeText={onChangeText}
      />
      <Text
        style={{
          fontSize: 20,
          color: 'white',
        }}>
        {text}
      </Text>
      {error === true && (
        <Text style={{color: 'red', fontSize: 20}}>Error</Text>
      )}
    </View>
  );
};

export default InputAtom;
