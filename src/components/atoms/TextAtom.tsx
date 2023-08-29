import * as React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {ColorPresets} from '../../theme/color';
import {defaultTexts} from '../../theme/fonts';

interface TextAtomProps extends TextProps {
  text: string;
  style?: TextStyle;
  preset?: TextPresets;
}

export const TextAtom: React.FC<TextAtomProps> = ({
  text,
  style,
  preset = 'body',
  ...rest
}) => {
  const textStyle = [Presets[preset], style];
  return (
    <Text
      style={[
        {
          flexShrink: 1,
          flexWrap: 'wrap',
          color: ColorPresets.primaryText,
        },
        textStyle,
      ]}
      {...rest}>
      {text}
    </Text>
  );
};

const Presets = {
  title1: {...defaultTexts.title1} as TextStyle,
  title2: {...defaultTexts.title2} as TextStyle,
  bodyBold: {...defaultTexts.bodyBold} as TextStyle,
  body: {...defaultTexts.body} as TextStyle,
  caption: {...defaultTexts.caption} as TextStyle,
};

export type TextPresets = keyof typeof Presets;
