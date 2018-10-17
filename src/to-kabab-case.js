/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const toKababCase = function (originalName) {
  let stringContentArray = [];

	if ( originalName.indexOf('_') > 0) {
    stringContentArray = originalName.split(/_/);
  } else {
    stringContentArray = originalName.split(/(?=[A-Z])/)
  }

  return stringContentArray.reduce((previous, current) => {
    return previous.toLowerCase() + '-' + current.toLowerCase();
  });
}

module.exports = toKababCase;
