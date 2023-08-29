import * as React from 'react';
import {Pressable, PressableProps, StyleSheet} from 'react-native';
import {TextAtom} from './TextAtom';
import {scalePresets} from '../../theme/scale';
import {ColorPresets} from '../../theme/color';

interface ButtonAtomProps extends PressableProps {
  title: string;
}

export const ButtonAtom: React.FC<ButtonAtomProps> = ({title, ...rest}) => {
  return (
    <Pressable style={styles.container} {...rest}>
      <TextAtom text={title} preset="title2" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scalePresets.baseScale,
    paddingVertical: scalePresets.mediumScale,
    alignItems: 'center',
    backgroundColor: ColorPresets.primaryRed,
    marginVertical: scalePresets.mediumScale,
    borderRadius: scalePresets.mediumScale,
  },
});
