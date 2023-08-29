import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextAtom} from './TextAtom';
import {moderateScale} from '../../theme/scale';
import {scaleFont} from '../../theme/fonts';

interface InitialAtomProps {
  initial: string;
}

export const InitialAtom: React.FC<InitialAtomProps> = props => {
  const [color, setColor] = React.useState('');

  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setColor(color);
  };

  React.useEffect(() => {
    getRandomColor();
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <TextAtom style={styles.initials} text={props.initial.charAt(0)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(100),
    width: moderateScale(50),
    height: moderateScale(50),
  },
  initials: {color: 'white', ...scaleFont(20)},
});
