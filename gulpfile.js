const gulp = require("gulp");
const del = require("del");
const rollup = require("gulp-rollup");
const babel = require("gulp-babel");
const liveReload = require("gulp-livereload");
/**
 * Gulp 无法获取代码运行时的环境变量
 * 该插件用来对运行时的环境变量进行替换
 */
const replace = require("rollup-plugin-replace");
const env = process.env.NODE_ENV
const isDevelopment = (env === "dev");

// build 文件夹清理
gulp.task("clean",()=>{
    del(["build/"])
})

// 复制 Views 文件夹
gulp.task("copyViews",()=>{
    setTimeout(()=>{
        gulp.src("src/nodebff/views/**/*")
            .pipe(gulp.dest("build/views"));
        
        gulp.src("src/nodebff/assets/**/*")
            .pipe(gulp.dest("build/assets"))
    },100)
})

// 编译
gulp.task("compile",["clean"],()=>{
    setTimeout(()=>{
        gulp.src("src/nodebff/**/*.js")
        .pipe(babel({
            babelrc:false,
            ignore:"src/nodebff/config/env.js",
            plugins:[
                "babel-plugin-transform-es2015-modules-commonjs",
                "transform-decorators-legacy"
            ]
        }))
        .pipe(gulp.dest("build/"))
        .pipe(liveReload());
    },100)
})

// 代码清洗
gulp.task("codeClean",()=>{
    setTimeout(()=>{
        gulp.src("src/nodebff/config/env.js")
            .pipe(rollup({
                input:"src/nodebff/config/env.js",
                output:{
                    format:"cjs",
                },
                plugins:[
                    replace({
                        "process.env.NODE_ENV":JSON.stringify(env)
                    })
                ]
            }))
            .pipe(gulp.dest("build/config"))
    },100)
})

// 开发环境构建
gulp.task("build:dev",["compile","copyViews"]);

// 生产环境构建
gulp.task("build:prod",["compile","copyViews","codeClean"]);

// 自动监控
gulp.task("autoWatch",()=>{
    liveReload.listen();
    gulp.watch("src/nodebff/**/*.js",["build:dev"])
});

gulp.task("default",[isDevelopment ? "autoWatch" : "build:prod"]);

