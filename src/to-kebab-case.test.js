/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const fs = require('fs');
const toKebabCase = require('./index');
const expect = require('chai').expect
const expected = 'my-input-name';

describe('To Kebab Case', () => {

  it('should export a function', () => {
    expect(toKebabCase).to.be.a('function');
  });

  it('should return Kebab case from a Title case string', () => {
    expect(toKebabCase('MyInputName')).to.equal(expected);
  });

  it('should return Kebab case from a Snake case string', () => {
    expect(toKebabCase('my_input_name')).to.equal(expected);
  });

});
