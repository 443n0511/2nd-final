// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");
 //ベンダープレフィックス
const autoprefixer =require('gulp-autoprefixer');

gulp.task('html', function () {
  return gulp.src("src/**/*.html")
    .pipe(gulp.dest('dist/'))
})

/// cssコンパイル ////////////////////////////////////////////
gulp.task('sass', function() {
  return gulp.src("src/scss/**/**.scss")//sassファイルを読み込む
        .pipe(sass().on('error', sass.logError))
        .pipe( sass({ outputStyle: 'expanded' }) )//CSSの出力形式
        .pipe(autoprefixer( {cascade:false}))
        .pipe(gulp.dest("src/css"));//書き出し
});

/// 監視フォルダ ////////////////////////////////////////////
gulp.task('watch', function(){
  gulp.watch('src/scss/**/**.scss', gulp.task('sass')); //sassが更新されたらgulp sassを実行

});

/// Gulpコマンドで動かすもの ////////////////////////////////////////////
gulp.task('default', gulp.task('watch'));