// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");


const autoprefixer =require('gulp-autoprefixer');  //プラグインの定義


gulp.task("sass", function () {
  return gulp.src("scss/**/**.scss")//sassファイルを読み込む
    .pipe(sass().on('error', sass.logError))
   
    .pipe(gulp.dest('css'));//書き出し
});

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
        .pipe(autoprefixer({  //autoprefixerの実行
         
      }))   
        // cssフォルダー以下に保存
        .pipe(gulp.dest("css"))
    );
  });
});

