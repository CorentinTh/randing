const {src, dest} = require('gulp');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
// const through = require('through2');
const jsdoc = require('jsdoc-to-markdown');

const sourceFile = 'src/randing.js';

const js = () => {
    return src(sourceFile)
        .pipe(rename('index.js'))
        .pipe(terser({sourceMap: {url: "inline"}}))
        .pipe(dest('dist/'));
};

const doc = async () => {

    const tags = {
        open: '<!-- doc begin -->',
        close: '<!-- doc end -->'
    };

    const md = (await jsdoc.render({files: sourceFile})).replace('## ', '### ');

    return src('README.md')
        .pipe(replace(
            new RegExp(`${tags.open}([\\s\\S]*)${tags.close}`, 'g'),
            (match, p1, offset, string) => {
                return  tags.open + '\n\n' + md + '\n\n' + tags.close;
            }))
        .pipe(dest('.'))
};

exports.js = js;
exports.doc = doc;
exports.default = js;
