import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {InputAtom} from '../../src/components/atoms/InputAtom';
import {Text, TextInput} from 'react-native';
import {TextAtom} from '../../src/components/atoms/TextAtom';

describe('Input Atom', () => {
  it('renders correctly with placeholder', () => {
    const tree = renderer
      .create(<InputAtom label="Label" placeholder="Enter text" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays the correct label', () => {
    const component = renderer.create(
      <InputAtom label="Username" placeholder="Enter your username" />,
    );
    const labelInstance = component.root.findByType(TextAtom);

    expect(labelInstance.props.text).toBe('Username');
  });

  it('captures and displays input correctly', () => {
    const component = renderer.create(
      <InputAtom label="Label" placeholder="Enter text" />,
    );
    const inputInstance = component.root.findByType(TextInput);

    act(() => {
      inputInstance.props.onChangeText('Hello World');
    });

    expect(inputInstance.props.value).toBe('Hello World');
  });
});
