const {src, dest} = require('gulp');
const terser = require('gulp-terser');
const rename = require('gulp-rename');

const js = () => {
    return src('src/randing.js')
        .pipe(rename('index.js'))
        .pipe(terser({sourceMap: {url: "inline"}}))
        .pipe(dest('dist/'));
};

exports.js = js;
exports.default = js;
