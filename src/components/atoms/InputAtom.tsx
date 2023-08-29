import * as React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {TextAtom} from './TextAtom';
import {ColorPresets} from '../../theme/color';
import {scalePresets} from '../../theme/scale';
import {defaultTexts} from '../../theme/fonts';

interface InputAtomProps extends TextInputProps {
  label: string;
}

export const InputAtom: React.FC<InputAtomProps> = ({label, ...rest}) => {
  const [focus, setfocus] = React.useState(false);
  return (
    <View style={styles.container}>
      {label ? (
        <View style={styles.labelStyle}>
          <TextAtom
            text={label}
            style={{
              color: focus ? ColorPresets.primaryColor : ColorPresets.border,
            }}
          />
        </View>
      ) : null}
      <TextInput
        {...rest}
        onFocus={() => setfocus(true)}
        onBlur={() => setfocus(false)}
        placeholderTextColor={ColorPresets.placeholderText}
        style={[
          styles.input,
          {
            borderColor: focus
              ? ColorPresets.primaryColor
              : ColorPresets.border,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingVertical: scalePresets.baseScale},
  input: {
    ...defaultTexts.placeHolder,
    fontWeight: '400',
    backgroundColor: ColorPresets.white,
    borderRadius: scalePresets.smallScale,
    borderWidth: 1,
    paddingHorizontal: scalePresets.mediumScale,
    paddingVertical: scalePresets.mediumScale,
  },
  labelStyle: {
    position: 'absolute',
    left: scalePresets.mediumScale,
    top: scalePresets.smallScale,
    paddingHorizontal: scalePresets.smallScale,
    backgroundColor: ColorPresets.white,
    zIndex: 1,
  },
});
