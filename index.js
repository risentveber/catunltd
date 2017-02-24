const Metalsmith = require('metalsmith');
const timer      = require('./plugins/timer');
const jade       = require('metalsmith-jade');
const permalinks = require('metalsmith-permalinks');
const uglify     = require('metalsmith-uglify');
const less       = require('metalsmith-less');
const ignore     = require('metalsmith-ignore');
const cleanCss   = require('metalsmith-clean-css');
const sass       = require('metalsmith-sass');
const path       = require('metalsmith-path');

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
    .use(jade())
    .use(permalinks())
    // .use(layouts({
    //     engine: 'jade'
    // }))
    .use(sass({
        outputStyle: "expanded"
    }))
    //.use(cleanCss())
    .use(uglify())
    .use(ignore([
        '**/*.less',
        '**/*.js',
        '**/*.css',
        '**/assets/**',
        '!/assets/js/main.min.js',
        '!/assets/js/turbolinks.min.js',
        '!/assets/stylesheets/main.css',
        '!assets/**',
    ]))
    //.use(path({ directoryIndex : "index.html" }))
    .build((err, files) => {
        if (err) { throw err; }
        process.stdout.write('\x1b[1m');
        Object.keys(files).sort().forEach(f => {
            process.stdout.write('\t' + f + '\n');
        });
        process.stdout.write('\x1b[0m');
        timer('end')();
    });
