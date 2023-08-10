import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {ButtonAtom} from '../../atoms/button';
import {ButtonAltDosAtom} from '../../atoms/button-alt-dos';
import ButtonAltAtom from '../../atoms/button-alt/button-alt.atom';
import {InputAtom} from '../../atoms/input';
import {LoginMoleculeStyled} from './login.style';

const LoginMolecule = (): ReactElement => {
  return (
    <View>
      <ButtonAtom testID="btnID" title="IDENTIFICARSE" />
      <View style={LoginMoleculeStyled.spaceTop}>
        <ButtonAtom testID="btnReg" title="REGISTRARSE" />
      </View>
      <View style={LoginMoleculeStyled.spaceTop}>
        <ButtonAltAtom inputColor="#c3c3c3" />
      </View>
      <View style={LoginMoleculeStyled.spaceTop}>
        <ButtonAltDosAtom />
      </View>
      <View style={LoginMoleculeStyled.spaceTop}>
        <InputAtom />
      </View>
    </View>
  );
};

export default LoginMolecule;
