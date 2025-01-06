import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomSafeareaView from '@components/global/CustomSafeareaView';
import ProductSlider from '@components/login/ProductSlider';

const CustomerLogin: React.FC = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <CustomSafeareaView>
          <ProductSlider />
        </CustomSafeareaView>
      </View>
    </GestureHandlerRootView>
  );
};

export default CustomerLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
