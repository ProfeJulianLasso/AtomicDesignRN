import {styled} from 'styled-components/native';

export const ButtonAlt = styled.Text<{$inputColor?: string}>`
  background-color: ${({$inputColor}) => $inputColor ?? '#000000'};
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  align-items: center;
`;
