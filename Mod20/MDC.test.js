import {expect} from '@jest/globals';
import React from "react";
import renderer from "react-test-renderer";
import {mdc} from "../../Mod20/MDC"


test('This is validated', () => {
    const tree = renderer.create(<mdc />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('That result is equal', () => {
    expect(mdc(10,20)).toEqual(10);
})
