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
    del(["build/**/*"])
})

gulp.task("compile",()=>{
    gulp.src("src/nodebff/**/*.js")
        .pipe(babel({
            babelrc:false,
            plugins:[
                "babel-plugin-transform-es2015-modules-commonjs"
            ]
        }))
        .pipe(gulp.dest("build/"))
        .pipe(liveReload());
})

// 开发环境构建
gulp.task("build:dev",["clean","compile"]);

// 生产环境构建
gulp.task("build:prod",["clean","compile"],()=>{
    // gulp.src("src/**/*.js")
    //     .pipe(rollup({
    //         input:"src/**/*.js",
    //         output:{
    //             format:"cjs"
    //         },
    //         plugins:[
    //             replace({
    //                 "process.env.NODE_ENV": JSON.stringify(env)
    //             })
    //         ]
    //     }))
    //     .pipe(gulp.dest("build"))
});

// 自动监控
gulp.task("autoWatch",()=>{
    liveReload.listen();
    gulp.watch("src/nodebff/**/*.js",["build:dev"])
});

gulp.task("default",[isDevelopment ? "autoWatch" : "build:prod"]);

