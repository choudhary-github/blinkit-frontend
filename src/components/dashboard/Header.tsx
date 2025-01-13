import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { FC } from 'react';
import CustomText from '@components/ui/CustomText';
import { Fonts } from '@utils/Constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { useAuthStore } from '@state/authStore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header: FC<{ showNotice: () => void }> = ({ showNotice }) => {
  const { setUser, user } = useAuthStore();

  return (
    <View style={styles.subContainer}>
      <TouchableOpacity activeOpacity={0.8}>
        <CustomText variant="h8" fontFamily={Fonts.Bold} style={styles.text}>
          Delivery in
        </CustomText>
        <View style={styles.flexRowGap}>
          <CustomText
            variant="h2"
            fontFamily={Fonts.SemiBold}
            style={styles.text}>
            10 minutes
          </CustomText>
          <TouchableOpacity style={styles.noticeBtn} onPress={showNotice}>
            <CustomText
              fontSize={RFValue(5)}
              fontFamily={Fonts.SemiBold}
              style={{ color: '#3B4886' }}>
              ⛈️Rain
            </CustomText>
          </TouchableOpacity>
        </View>
        <View style={styles.flexRow}>
          <CustomText
            variant="h8"
            numberOfLines={1}
            fontFamily={Fonts.Medium}
            style={styles.text2}>
            {user?.address || 'Knowhere, Somewhere 😅'}
          </CustomText>
          <MaterialCommunityIcons
            name="menu-down"
            color={'#fff'}
            size={RFValue(20)}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={RFValue(36)}
          color={'#fff'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'ios' ? 5 : 10,
    justifyContent: 'space-between',
  },
  flexRowGap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  noticeBtn: {
    backgroundColor: '#E8EAF5',
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 2,
    bottom: -2,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    width: '70%',
  },
  text2: {
    color: '#fff',
    width: '90%',
    textAlign: 'center',
  },
});
