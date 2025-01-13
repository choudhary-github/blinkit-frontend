import { Colors, Fonts } from '@utils/Constants';
import { ComponentProps, FC, ReactNode } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface Props {
  onClear?: () => void;
  left: ReactNode;
  right?: boolean;
}

const CustomInput: FC<Props & ComponentProps<typeof TextInput>> = ({
  onClear,
  left,
  right = true,
  ...props
}) => {
  return (
    <View style={styles.flexRow}>
      {left}
      <TextInput
        {...props}
        style={styles.inputContainer}
        placeholderTextColor={'#ccc'}
      />
      <View style={styles.icons}>
        {props.value?.length != 0 && right && (
          <TouchableOpacity onPress={onClear}>
            <Ionicons
              name="close-circle-sharp"
              size={RFValue(16)}
              color={'#ccc'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  text: {
    width: '10%',
    marginLeft: 10,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 10,
    borderWidth: 0.5,
    marginVertical: 10,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: Colors.border,
    shadowOpacity: 0.6,
    shadowRadius: 2,
    borderColor: Colors.border,
  },
  inputContainer: {
    width: '70%',
    fontFamily: Fonts.SemiBold,
    fontSize: RFValue(12),
    paddingVertical: 14,
    paddingBlock: 15,
    height: '100%',
    color: Colors.text,
    bottom: -1,
  },
  icons: {
    width: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
