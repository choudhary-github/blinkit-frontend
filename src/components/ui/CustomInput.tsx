import { ComponentProps, FC, ReactNode } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface Props {
  onClear: () => void;
  left: ReactNode;
  right: boolean;
}

const CustomInput: FC<Props & ComponentProps<typeof TextInput>> = ({
  onClear,
  left,
  right = true,
  ...props
}) => {
  return <View></View>;
};

export default CustomInput;

const styles = StyleSheet.create({
  text: {
    width: '10%',
    marginLeft: 10,
  },
  flexRow: {
    flexDirection: 'row',
  },
});
