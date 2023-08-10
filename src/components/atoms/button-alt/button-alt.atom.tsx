import React, {ReactElement} from 'react';
import {TextProps} from 'react-native';
import {ButtonAlt} from './button-alt.style';

type ButtonAltAtomProps = {
  inputColor?: string;
} & TextProps;

const ButtonAltAtom = ({
  inputColor,
  ...props
}: ButtonAltAtomProps): ReactElement => {
  return (
    <ButtonAlt $inputColor={inputColor} {...props}>
      Hola
    </ButtonAlt>
  );
};

export default ButtonAltAtom;
