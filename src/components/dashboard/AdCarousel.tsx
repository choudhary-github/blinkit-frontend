import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AdCarousel = () => {
  return (
    <View style={{ left: -10, marginVertical: 20 }}>
      <Text>AdCarousel</Text>
    </View>
  );
};

export default AdCarousel;

const styles = StyleSheet.create({
  imageConatainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
});
