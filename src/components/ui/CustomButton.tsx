import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import { FC } from 'react';
import { Colors, Fonts } from '@utils/Constants';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  loading?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({
  onPress,
  title,
  disabled,
  loading,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.btn,
        {
          backgroundColor:
            disabled || loading ? Colors.disabled : Colors.secondary,
        },
      ]}>
      {loading ? (
        <ActivityIndicator color={'#fff'} size={'small'} />
      ) : (
        <CustomText
          variant="h6"
          style={styles.text}
          fontFamily={Fonts.SemiBold}>
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    marginVertical: 15,
    width: '100%',
  },
  text: {
    color: '#fff',
  },
});
