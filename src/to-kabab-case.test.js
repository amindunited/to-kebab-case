/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const fs = require('fs');
const toKababCase = require('./index');
const expect = require('chai').expect
const expected = 'my-input-name';

describe('To Kabab Case', () => {

  it('should export a function', () => {
    expect(toKababCase).to.be.a('function');
  });

  it('should return Kabab case from a Title case string', () => {
    expect(toKababCase('MyInputName')).to.equal(expected);
  });

  it('should return Kabab case from a Snake case string', () => {
    expect(toKababCase('my_input_name')).to.equal(expected);
  });

});
