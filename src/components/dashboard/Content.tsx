import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { adData } from '@utils/dummyData';
import AdCarousel from './AdCarousel';

const Content: FC = () => {
  return (
    <View style={styles.container}>
      <AdCarousel data={adData} />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
