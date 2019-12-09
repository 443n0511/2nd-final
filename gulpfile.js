// gulpプラグインを読み込みます
const { src, dest, watch, parallel } = require("gulp");
// Sassをコンパイルするプラグインを読み込みます
const sass = require("gulp-sass");
//ベンダープレフィックス
const autoprefixer = require('gulp-autoprefixer');
// browser-syncのプラグインの読み込み
const browserSync = require("browser-sync");


/// sassのコンパイル ////////////////////////////////////////////

const compileSass = () =>
  // style.scssファイルを取得
  src("src/scss/**/**.scss")
    .pipe(sass().on('error', sass.logError))
    // Sassのコンパイルを実行
    .pipe(
      // コンパイル後のCSSを展開
      sass({
        outputStyle: "expanded" //CSSの出力形式
      })
    )
    .pipe(autoprefixer({ cascade: false }))
    // cssフォルダー以下に保存
    .pipe(dest("src/css"))

/// ファイルをdistにコピー ////////////////////////////////////////////

const html = () =>
  src("src/**/*.html")
    .pipe(browserSync.reload({ stream: true })) 
    .pipe(dest('dist/'))

const css = () =>
  src("src/**/*.css")
    .pipe(browserSync.reload({ stream: true })) 
    .pipe(dest('dist/'))


const js = () =>
  src("src/**/*.js")
    .pipe(browserSync.reload({ stream: true })) 
    .pipe(dest('dist/'))


/// 監視 ////////////////////////////////////////////

const watchSassFiles = () =>
watch("src/**/**/**.scss", compileSass)
watch('src/**/*.html', html)
watch('src/**/*.css', css)
watch('src/**/*.js', js)


/// ファイルをdistにコピー ////////////////////////////////////////////

const browsersync = () =>
  browserSync({
    server: {
      baseDir: 'dist', // 対象となるディレクトリ
      index: 'html/index.html', // リロードするHTMLファイル
    }
  })

// npx gulpというコマンドを実行した時、watchSassFilesが実行されるようにします
exports.default = parallel(watchSassFiles,browsersync)
