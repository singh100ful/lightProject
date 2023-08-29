import React from 'react';
import {View, StyleSheet} from 'react-native';
import {scalePresets} from '../../theme/scale';
import {ColorPresets} from '../../theme/color';

interface SeparatorAtomProps {
  height?: number;
}

export const SeparatorAtom: React.FC<SeparatorAtomProps> = ({height}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.line, {height: height ? height : 1}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: scalePresets.mediumScale,
    paddingHorizontal: scalePresets.baseScale,
  },
  line: {flex: 1, backgroundColor: ColorPresets.border},
});
