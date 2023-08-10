import React, {ReactElement} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {LoginPage} from './pages/login';

function App(): ReactElement {
  return (
    <SafeAreaView style={AppStyled.container}>
      <LoginPage />
    </SafeAreaView>
  );
}

const AppStyled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default App;
