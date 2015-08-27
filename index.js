/**
 * Copyright (с) 2015, SoftIndex LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule Gulp-Licenser
 */

'use strict';

var replace = require('gulp-replace');

var COPYRIGHT_REGEXP = /^(\/\*((?!\*\/)(.|\n))*Copyright((?!\*\/)(.|\n))*\*\/|())\n*/;

module.exports = function(licenseText, options) {
  var regExp = options && options.regExp || COPYRIGHT_REGEXP;
  return replace(regExp, licenseText + '\n\n');
};
