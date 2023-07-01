$(document).ready(function(){
  $('#toggleSltLan').off('click').on('click', function(){
    $('.toggleWrap').toggleClass('active');
  })

  $('.gnb .btn-callnav').off('click').on('click', function(){
    $('.gnb .menu').toggleClass('active');
  })
});