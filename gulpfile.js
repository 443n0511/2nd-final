// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");

// style.scssの監視タスクを作成する
gulp.task("default", function() {
  // ★ style.scssファイルを監視
  return gulp.watch("scss/**/**.scss", function() {
    // style.scssの更新があった場合の処理

    // style.scssファイルを取得
    return (
      gulp
        .src("scss/style.scss")
        // Sassのコンパイルを実行
        .pipe(
          sass({
            outputStyle: "expanded"
          })
            // Sassのコンパイルエラーを表示
            // (これがないと自動的に止まってしまう)
            .on("error", sass.logError)
        )
        // cssフォルダー以下に保存
        .pipe(gulp.dest("css"))
    );
  });
});


const autoprefixer =require('gulp-autoprefixer');  //プラグインの定義


gulp.task('sass', function () {
  return gulp.src("scss/**/**.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({  //autoprefixerの実行
        browsers: ["last 2 versions"],
        cascade: false
    }))
    .pipe(gulp.dest('css'));
});