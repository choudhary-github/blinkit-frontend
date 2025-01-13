import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { NoticeHeight } from '@utils/Scaling';
import CustomText from '@components/ui/CustomText';
import { Fonts } from '@utils/Constants';
import Svg, { Defs, G, Path, Use } from 'react-native-svg';
import { wavyData } from '@utils/dummyData';

const Notice: FC = () => {
  return (
    <View style={{ height: NoticeHeight }}>
      <View style={styles.conatiner}>
        <View style={styles.noticeContainer}>
          <SafeAreaView style={{ padding: 10 }}>
            <CustomText
              style={styles.heading}
              variant={'h8'}
              fontFamily={Fonts.SemiBold}>
              It's raining near this location
            </CustomText>
            <CustomText style={styles.textCenter} variant={'h8'}>
              Our delivery partner may longer to reach you
            </CustomText>
          </SafeAreaView>
        </View>
      </View>
      <Svg
        width={'100%'}
        height={'35'}
        fill={'#CCD5E4'}
        viewBox="0 0 4000 1000"
        preserveAspectRatio="none"
        style={styles.wave}>
        <Defs>
          <Path id="wavepath" d={wavyData} />
        </Defs>
        <G>
          <Use href="#wavepath" y={'321'} />
        </G>
      </Svg>
    </View>
  );
};

export default Notice;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: '#CCD5E4',
  },
  noticeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCD5E4',
  },
  heading: {
    textAlign: 'center',
    color: '#2d3875',
    marginBottom: 8,
  },
  textCenter: {
    textAlign: 'center',
    marginBottom: 8,
  },
  wave: {
    transform: [{ rotateX: '180deg' }],
  },
});
