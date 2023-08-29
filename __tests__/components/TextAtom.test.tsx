import * as React from 'react';
import renderer from 'react-test-renderer';
import {TextAtom} from '../../src/components/atoms/TextAtom';

describe('Text Atom', () => {
  it('renders corectly', () => {
    const tree = renderer.create(<TextAtom text="Hello world!" />).toJSON();
    expect(tree).toBeTruthy();
  });
});
