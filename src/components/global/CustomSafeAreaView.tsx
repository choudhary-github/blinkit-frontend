import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface CustomSafeAreaViewProps {
  children: React.ReactNode;
  style?: any;
}

const CustomSafeAreaView: React.FC<CustomSafeAreaViewProps> = ({
  children,
  style,
}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

export default CustomSafeAreaView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
