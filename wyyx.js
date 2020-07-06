// var spanArr = $('.nav-we>span')
var ul = $('.nav-es')
var aArr = $('.nav-es li')
console.log(aArr)
 console.log(aArr.offsetWith)


aArr.hover(function(){
   
   
    $(this).css("border-bottom", "3px solid #cc9756"); 
    $(this).css("color", "#cc9756");    
    $(this).css("padding-bottom", "7px");    
          
    },function(){
        $(this).css("border-bottom", "white"); 
        $(this).css("color", "black");   
    })

    $('.newul>li a').css({'background':'#e36844', 'color': 'white', 'width' : '80px' ,'height': '20px','display': 'block', 'font-size': '12px','margin':' auto', 'padding': '5px 0', 'text-align': 'center'})

    console.log($('.newul>li h3'))
 
 $('.newul>li h3').css({ 'color': 'black', 'width' : '256px' ,'display': 'block', 'font-size': '20px','margin':' auto', 'text-align':'center' ,'padding':'8px 0'})

 $('.newul>li b').css({ 'color': '#e36844', 'width' : '256px' ,'display': 'block', 'margin':' auto', 'text-align':'center' })     


// $('#box li img').css({'width':'100%','display':'block'})
console.log($('#box li img'))


var navTop = $('.navTop')
$('navTop').scrollTop   


    $(function(){ 
var winHeight = $(document).scrollTop();

$(window).scroll(function() {
var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少

if (scrollY <170){ //如果滚动距离小于190px则隐藏，不添加类型
// $('.topNav').removeClass('hiddened');
$('.topNav').removeClass('showed');
} 

if (scrollY > 170){ //如果滚动到高度为190，则添加显示类
// $('.topNav').removeClass('showed');

$('.topNav').addClass('showed');
}    

});
});


// newNav固定导航

var newNav = $('.newNav')
var restTop = $('.restTop')
$('newNav').scrollTop   
$('restTop').scrollTop

    $(function(){ 
var winHeight = $(document).scrollTop();

$(window).scroll(function() {
var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少

if (scrollY <557){ //如果滚动距离小于190px则隐藏，不添加类型
// $('.topNav').removeClass('hiddened');
$('.newNav').removeClass('show');
$('.restTop').removeClass('show');

} 

if (scrollY > 557){ //如果滚动到高度为190，则添加显示类
// $('.topNav').removeClass('showed');

$('.newNav').addClass('show');
$('.restTop').addClass('show');
// $('.newNav').css({'position': 'sticky'})
}

if(scrollY < 1400){
    $('.restTop>li:last-child').css({'opacity':'0'})
}
if(scrollY > 1400){
    $('.restTop>li:last-child').css({'opacity':'1'})
}

$('.restTop>li:last-child').on('click',function(){
    $('body,html').stop().animate({
        scrollTop: 0
      },500);
        // return false
})

});
});


// foot 脚页轮播 


//  初始化
var mySwiper = new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    //   disabledClass:'my-button-disabled',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        

  


  

    
  var appendNumber = 3;
  var prependNumber = 1;
  var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 3,
      centeredSlides: true,
      paginationClickable: true,
      spaceBetween: 30,
  });
  document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.prependSlide([
          '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
          '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
      ]);
  });
  document.querySelector('.prepend-slide').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
  });
  document.querySelector('.append-slide').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
  });
  document.querySelector('.append-2-slides').addEventListener('click', function (e) {
      e.preventDefault();
      swiper.appendSlide([
          '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
          '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
      ]);
  });
   



