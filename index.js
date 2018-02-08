const Metalsmith = require('metalsmith');
const timer      = require('./plugins/timer');
const permalinks = require('metalsmith-permalinks');
const uglify     = require('metalsmith-uglify');
const ignore     = require('metalsmith-ignore');
const cleanCss   = require('metalsmith-clean-css');
const sass       = require('metalsmith-sass');
const path       = require('metalsmith-path');
const concat = require('metalsmith-concat');

Metalsmith(__dirname)
    .metadata({
        title: "My Static Site & Blog",
        description: "It's about saying »Hello« to the World.",
        generator: "Metalsmith",
        url: "http://www.metalsmith.io/"
    })
    .source('./source')
    .destination('./build')
    .clean(true)
    .use(permalinks())
    .use(sass({
        outputStyle: "expanded"
    }))
    .use(concat({
        files: 'assets/js/*.js',
        output: 'assets/js/app.js'
    }))
    .use(concat({
        files: 'assets/stylesheets/*.css',
        output: 'assets/style/app.css'
    }))
    .use(cleanCss())
    .use(uglify())
    .use(ignore([
        '**/*.less',
        '**/*.js',
        '**/*.css',
        '**/.DS_Store',
        '.DS_Store',
        '**/assets/**',
        '!assets/js/app.min.js',
        '!assets/fonts/**',
        '!assets/style/**',
        '!assets/images/**'
    ]))
    //.use(path({ directoryIndex : "index.html" }))
    .build((err, files) => {
        if (err) {
            console.log(err)
            throw err;
        }
        process.stdout.write('\x1b[1m');
        Object.keys(files).sort().forEach(f => {
            process.stdout.write('\t' + f + '\n');
        });
        process.stdout.write('\x1b[0m');
        timer('end')();
    });
