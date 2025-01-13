import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { StickyView } from '@r0b0t3d/react-native-collapsible';

const StickySearchBar: FC = () => {
  return (
    <StickyView>
      <Text>StickySearchBar</Text>
    </StickyView>
  );
};

export default StickySearchBar;

const styles = StyleSheet.create({});
