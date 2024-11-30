import React from 'react';
import { SafeAreaView } from 'react-native';
import ShoppingScreen from './src/screens/ShoppingScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ShoppingScreen />
    </SafeAreaView>
  );
};

export default App;
