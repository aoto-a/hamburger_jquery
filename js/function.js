$(function () {
    $('#nav-btn').on('click', function () { // ボタンをクリックすると
      $('span').toggleClass('open'); // spanタグに.openを付け外しする
      $("ul").slideToggle(200);// リストの開閉と速さを設定
    });
    return false;
});