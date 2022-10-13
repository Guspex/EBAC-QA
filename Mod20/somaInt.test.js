import {expect} from '@jest/globals';
import React from "react";
import renderer from "react-test-renderer";
import totalSoma from "../../Mod20/somaInt";

test('This is validated', () => {
    const tree = renderer.create(<somaInt />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('That result of smaller', () => {
    expect(totalSoma).toEqual(156361);
})