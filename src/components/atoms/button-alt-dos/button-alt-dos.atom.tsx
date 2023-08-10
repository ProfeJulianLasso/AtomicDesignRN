import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import {
  ButtonAltDos,
  ButtonAltDosShadow,
  ButtonAltDosText,
} from './button-alt-dos.style';

const ButtonAltDosAtom = () => {
  return (
    <DropShadow style={ButtonAltDosShadow.shadow}>
      <ButtonAltDos
        activeOpacity={0.5}
        underlayColor="#DDDDDD"
        onPress={() => console.log('hola mundo')}
        style={ButtonAltDosShadow.shadow}>
        <ButtonAltDosText>Hola</ButtonAltDosText>
      </ButtonAltDos>
    </DropShadow>
  );
};

export default ButtonAltDosAtom;
