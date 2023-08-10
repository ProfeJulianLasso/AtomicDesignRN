import React, {ReactElement} from 'react';
import {Button, ButtonProps} from 'react-native';

type ButtonAtomProps = {
  title?: string;
} & ButtonProps;

function ButtonAtom({title, ...props}: ButtonAtomProps): ReactElement {
  return <Button title={title ?? 'ButtonAtom'} {...props} />;
}

export default ButtonAtom;
