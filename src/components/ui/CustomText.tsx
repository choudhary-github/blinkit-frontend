import { Colors, Fonts } from '@utils/Constants';
import { FC } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'body';
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  fontSize?: number;
  fontFamily?: Fonts;
  numberOfLines?: number;
  onLayout?: (event: object) => void;
}

const CustomText: FC<Props> = ({
  variant = 'body',
  children,
  style,
  fontFamily = Fonts.Regular,
  fontSize,
  numberOfLines,
  onLayout,
  ...props
}) => {
  const fontSizeMap = {
    h1: RFValue(fontSize || 22),
    h2: RFValue(fontSize || 20),
    h3: RFValue(fontSize || 18),
    h4: RFValue(fontSize || 16),
    h5: RFValue(fontSize || 14),
    h6: RFValue(fontSize || 12),
    h7: RFValue(fontSize || 10),
    h8: RFValue(fontSize || 9),
    body: RFValue(fontSize || 12),
  };

  const computedFontSize = fontSizeMap[variant] || RFValue(fontSize || 12);

  const fontFamilyStyle = {
    fontFamily,
  };

  return (
    <Text
      onLayout={onLayout}
      style={[
        styles.text,
        fontFamilyStyle,
        { fontSize: computedFontSize, color: Colors.text },
        style,
      ]}
      numberOfLines={numberOfLines}
      {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
  },
});

export default CustomText;
