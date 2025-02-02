import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors, Fonts } from '@utils/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import RollingBar from 'react-native-rolling-bar';
import CustomText from '@components/ui/CustomText';

const SearchBar = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Ionicons name="search" color={Colors.text} size={RFValue(20)} />
      <CustomText
        variant="h6"
        fontFamily={Fonts.Medium}
        style={{ paddingLeft: 10 }}>
        Search
      </CustomText>
      <RollingBar
        interval={3000}
        defaultStyle={false}
        customStyle={styles.textContainer}>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          "sweets"
        </CustomText>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          "milk"
        </CustomText>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          for aata, daal, coke
        </CustomText>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          "chips"
        </CustomText>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          "electronics"
        </CustomText>
        <CustomText variant="h6" fontFamily={Fonts.Medium}>
          "lovely desires"
        </CustomText>
      </RollingBar>
      <View style={styles.divider} />
      <Ionicons name="mic" color={Colors.text} size={RFValue(20)} />
    </TouchableOpacity>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f7',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: Colors.border,
    marginTop: 15,
    overflow: 'hidden',
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  textContainer: { paddingLeft: 5, width: '90%', height: 50 },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
  },
});
