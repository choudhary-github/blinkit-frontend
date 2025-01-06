import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface CustomSafeareaViewProps {
  children: React.ReactNode;
  style?: any;
}

const CustomSafeareaView: React.FC<CustomSafeareaViewProps> = ({
  children,
  style,
}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {/* <View style={[styles.container, style]}>{children}</View> */}
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeareaView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
