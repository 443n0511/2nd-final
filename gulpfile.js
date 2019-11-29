// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");
 //ベンダープレフィックス
const autoprefixer =require('gulp-autoprefixer');
// browser-syncのプラグインの読み込み
const browserSync = require("browser-sync");


/// 自動リロード ////////////////////////////////////////////
gulp.task("browserSync", function() {
  browserSync({
    server: {
      baseDir : 'dist', // 対象となるディレクトリ
      index : 'html/index.html', // リロードするHTMLファイル
    }
  });
  // srcフォルダ以下のファイルを監視
  gulp.watch("src/**", function(done) {
    browserSync.reload();
    done(); // ファイルに変更があれば同期しているブラウザをリロード
  });
});
/// ファイルをdistにコピー ////////////////////////////////////////////

gulp.task('html', function () {
  return gulp.src("src/**/*.html")
    .pipe(gulp.dest('dist/'))
})

gulp.task('css', function () {
  return gulp.src("src/**/*.css")
    .pipe(gulp.dest('dist/'))
})
gulp.task('js', function () {
  return gulp.src("src/**/*.js")
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
  gulp.watch('src/scss/**/**.scss', gulp.task('sass'));
  gulp.watch('src/**/*.html', gulp.task('html'));
  gulp.watch('src/**/*.css', gulp.task('css'));
  gulp.watch('src/**/*.js', gulp.task('js'));
  
});

/// Gulpコマンドで動かすもの ////////////////////////////////////////////

gulp.task('default', gulp.series(
  gulp.parallel('watch', 'sass','html','css','js','browserSync')
));


