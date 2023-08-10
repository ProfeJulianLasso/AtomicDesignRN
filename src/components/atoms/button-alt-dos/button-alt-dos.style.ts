import {StyleSheet} from 'react-native';
import {styled} from 'styled-components/native';

export const ButtonAltDos = styled.TouchableHighlight`
  background-color: #000000;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  align-items: center;
`;

export const ButtonAltDosText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonAltDosShadow = StyleSheet.create({
  shadow: {
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
