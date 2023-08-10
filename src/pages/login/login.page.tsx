import React from 'react';
import {View} from 'react-native';
import {LoginTemplate} from '../../components/templates/login';
import {LoginPageStyled} from './login.style';

const LoginPage = () => {
  return (
    <View style={LoginPageStyled.container}>
      <LoginTemplate />
    </View>
  );
};

export default LoginPage;
