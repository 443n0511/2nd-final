//スライダー
$(function () {
  var mySwiper = new Swiper('.swiper-container', {

    loop: true, // ループをするかどうか
    speed: 600, // スライドが切り替わる時間(ミリ秒)。
    slidesPerView: 1.27, // 何枚スライドを出すか ここには一番小さい画面のサイズが入る
    spaceBetween: 24, // スライド間の余白　ここには一番小さい画面のサイズが入る
    direction: 'horizontal', // スライドの方向。
    effect: 'slide', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)

    // 自動再生
    autoplay: {
      delay: 3000, //表示時間(ミリ秒)
      stopOnLast: true, // 最後のスライドまで表示されたら自動再生を中止するか
      disableOnInteraction: true // ユーザーのスワイプ操作を検出したら自動再生を中止するか
    },

    // レスポンシブ
    breakpoints: {
      1920: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 2.6,
        spaceBetween: 40
      },

      640: {
        slidesPerView: 2,
        spaceBetween: 24
      }
    },

    // ページネーション
    pagination: {
      el: '.swiper-pagination',
    }

  });
});

//ナビゲーションバーのリンクをクリックしたら線を引く
$('.l-header--nav-list__anchor').click(function () {
  $(this).addClass('nav-item-border');
  $('.l-header--nav-list__anchor').removeClass('nav-item-border');

});




$(function () {
  //WOWをこれで動かしてる
  new WOW().init();

});


$(document).ready(function () {
  $('.drawer').drawer();
});


$(function () {
  var headerHight = 80; //ヘッダの高さ
  $('a[href^=#]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHight; //ヘッダの高さ分位置をずらす
    $("html, body").animate({ scrollTop: position }, 'slow', "swing");
    return false;
  });
});






//トップに戻るボタン
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $('.floating').fadeIn('slow');
  } else {
    $('.floating').fadeOut('slow');
  }
});

$('.floating').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 'slow');
  return false;
});




$(function() {

  //チェックボックス操作時
  $('#c-contact--form__check-id').click(function(){
    if($(this).prop('checked')) { //もし、checkedのプロパティを取得したら
      $('#button').removeClass('c-contact--form__button-disable').addClass('.c-button--orange');//disableを外す
    } else {
      $('#button').addClass('c-contact--form__button-disable').removeClass('.c-button--orange');//disableをつける
    }
  });
  $('#c-contact--form__check-id').click(function(){
    if($(this).prop('checked')) { //もし、checkedのプロパティを取得したら
      $('#button').addClass('.c-button--orange');//disableを外す
    } else {
      $('#button').removeClass('.c-button--orange');//disableをつける
    }
  });
  

  //ボタン押下時
  $('#button').click(function(){
    if($('#c-contact--form__check-id').prop('checked')) {
      window.location.href = 'http://localhost:3000/?';
    }else{
      alert('個人情報保護方針に同意するにチェックして下さい');
    };
  });

});

$('＃button').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 'slow');
  return false;
});


$(function () {
  //.accordion1の中のp要素がクリックされたら
  $('.c-accordion-list--title').click(function () {
    //クリックされた.accordionの中の要素に隣接する要素が開いたり閉じたりする。
    $(this).next('div').slideToggle();
    //クリックされたtitle以外のcontentを閉じる（.accordion-titleの次の要素）
    $(".c-accordion-list--title").not(this).removeClass("open");
    $(".c-accordion-list--title").not(this).next().slideUp(400);
    //thisにopenクラスを付与
    $(this).toggleClass("open");
  });
});
