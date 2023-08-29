import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {ButtonAtom} from '../../src/components/atoms/ButtonAtom';
import {Pressable} from 'react-native';

describe('Button Atom', () => {
  it('renders the passed title', () => {
    const tree = renderer
      .create(<ButtonAtom title="Click me!" onPress={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onPress prop when pressed', () => {
    const onPressMock = jest.fn();

    const component = renderer.create(
      <ButtonAtom title="Click me!" onPress={onPressMock} />,
    );
    const pressable = component.root.findByType(Pressable);

    act(() => {
      pressable.props.onPress();
    });

    expect(onPressMock).toHaveBeenCalled();
  });
});
