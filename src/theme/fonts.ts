import {TextStyle} from 'react-native';
import {ColorPresets} from './color';
import {scaleSize} from './scale';

export const light: TextStyle = {
  fontWeight: '300',
};
export const regular = {
  fontWeight: '400',
};

export const medium = {
  fontWeight: '500',
};

export const bold = {
  fontWeight: '700',
};

export const black = {
  fontWeight: '900',
};

export const fontTypes = {
  light,
  regular,
  medium,
  bold,
  black,
};

export const scaleFont = (size: number, height: number = 1.3) => {
  const result = size + (scaleSize(size) - size) * 0.5;
  return {
    fontSize: result,
    lineHeight: result * height,
  };
};

export const defaultTexts = {
  title1: {
    ...bold,
    ...scaleFont(30),
    color: ColorPresets.primaryText,
    letterSpacing: 0,
  },
  title2: {
    ...regular,
    ...scaleFont(20),
    color: ColorPresets.white,
    letterSpacing: 0,
  },
  bodyBold: {
    ...bold,
    ...scaleFont(16),
    color: ColorPresets.primaryText,
    letterSpacing: 0,
  },
  body: {
    ...regular,
    ...scaleFont(16),
    color: ColorPresets.primaryText,
    letterSpacing: 0,
  },
  placeHolder: {
    ...regular,
    ...scaleFont(18),
    color: ColorPresets.primaryText,
    letterSpacing: 0,
  },
  caption: {
    ...regular,
    ...scaleFont(13),
    color: ColorPresets.secondaryText,
    letterSpacing: 0,
  },
};
