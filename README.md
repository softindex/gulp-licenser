# gulp-licenser

> Update licenses plugin for gulp.

## Installation

Install this package with npm and add it to your development dependencies:

`npm install --save-dev gulp-licenser`

## Usage

```javascript
var licenser = require('gulp-licenser');

var LICENSE_TEMPLATE =
  '/**\n\
  * Package v1.0.0\n\
  *\
  * Copyright 2015, Company.\n\
  * All rights reserved.\n\
  *\
  */';

gulp.task('updateLicense', function() {
  gulp.src('./src/*.js')
    .pipe(license(LICENSE_TEMPLATE))
    .pipe(gulp.dest('./src/'))
});
```
