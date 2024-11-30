import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

const Header = ({ title }) => (
  <View>
    <Text style={globalStyles.header}>{title}</Text>
  </View>
);

export default Header;
