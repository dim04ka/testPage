(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


 //плавный скролл к тегу
$(function(){
  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 800);
      return false;
  });
})



//картинка в новом окне
$(function(){
  $(".works__item img").click(function(){	// Событие клика на маленькое изображение
  
    var img = $(this);	// Получаем изображение, на которое кликнули
  var src = img.attr('src'); // Достаем из этого изображения путь до картинки
  $("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
           "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
           "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
           "</div>"); 
  $(".popup").fadeIn(800); // Медленно выводим изображение
  $(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
    $(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
    setTimeout(function() {	// Выставляем таймер
      $(".popup").remove(); // Удаляем разметку всплывающего окна
    }, 800);
  });
});
})



//навигация отзыва
$(function(){
  $('.card-btn__left').click(function(){
    $('.owl-carousel-reviews').trigger('prev.owl.carousel');
  })
  $('.card-btn__right').click(function(){
    $('.owl-carousel-reviews').trigger('next.owl.carousel');
  })
})



//смена отзыва
$(document).ready(function(){
  $('.owl-carousel-about').owlCarousel({
    items:1,
  });
  $('.owl-carousel-reviews').owlCarousel({
    items:1,
    onTranslated: callback
  });

  function callback(event) {
    let index = event.item.index;

    $('.card__item').each( (inx,el) => {
      
      
      if ( el.dataset.value == index ){
        el.style.cssText = 'display: block';
      } else {
        el.style.cssText = 'display: none'
      }
       

    });

  }
});

//services show/hide block
$(function(){
  $('.showMessage').each(function() {
    $(this).click(function(){
      $(this).closest('.services__wrapper').find('.modalMessage-active').removeClass('modalMessage-active');
      $(this).closest('.services__item').find('.modalMessage').addClass('modalMessage-active');
      
    })
  });
  $('.hideMessage').each(function(){
    $(this).click(function(){
      $(this).closest('.modalMessage').removeClass('modalMessage-active');
    })
  })
})



//menu btn
$(function(){
  let $btn = $('.header__btnMenu');
  let $menu = $('.header__menu');
  let $link = $('.header__menu a');
  
  $link.click(function(){
    toggleMenu();
  })



  $btn.click(function(){
    toggleMenu();
  })

  function toggleMenu(){
    $btn.toggleClass('header__btnMenu-active');
    $menu.toggleClass('header__menu-active');
  }
})
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcclxuXHJcbiAvL9C/0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LvQuyDQuiDRgtC10LPRg1xyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgdmFyICRwYWdlID0gJCgnaHRtbCwgYm9keScpO1xyXG4gICQoJ2FbaHJlZio9XCIjXCJdJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICRwYWdlLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiAkKCQuYXR0cih0aGlzLCAnaHJlZicpKS5vZmZzZXQoKS50b3BcclxuICAgICAgfSwgODAwKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG59KVxyXG5cclxuXHJcblxyXG4vL9C60LDRgNGC0LjQvdC60LAg0LIg0L3QvtCy0L7QvCDQvtC60L3QtVxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgJChcIi53b3Jrc19faXRlbSBpbWdcIikuY2xpY2soZnVuY3Rpb24oKXtcdC8vINCh0L7QsdGL0YLQuNC1INC60LvQuNC60LAg0L3QsCDQvNCw0LvQtdC90YzQutC+0LUg0LjQt9C+0LHRgNCw0LbQtdC90LjQtVxyXG4gIFxyXG4gICAgdmFyIGltZyA9ICQodGhpcyk7XHQvLyDQn9C+0LvRg9GH0LDQtdC8INC40LfQvtCx0YDQsNC20LXQvdC40LUsINC90LAg0LrQvtGC0L7RgNC+0LUg0LrQu9C40LrQvdGD0LvQuFxyXG4gIHZhciBzcmMgPSBpbWcuYXR0cignc3JjJyk7IC8vINCU0L7RgdGC0LDQtdC8INC40Lcg0Y3RgtC+0LPQviDQuNC30L7QsdGA0LDQttC10L3QuNGPINC/0YPRgtGMINC00L4g0LrQsNGA0YLQuNC90LrQuFxyXG4gICQoXCJib2R5XCIpLmFwcGVuZChcIjxkaXYgY2xhc3M9J3BvcHVwJz5cIisgLy/QlNC+0LHQsNCy0LvRj9C10Lwg0LIg0YLQtdC70L4g0LTQvtC60YPQvNC10L3RgtCwINGA0LDQt9C80LXRgtC60YMg0LLRgdC/0LvRi9Cy0LDRjtGJ0LXQs9C+INC+0LrQvdCwXHJcbiAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdwb3B1cF9iZyc+PC9kaXY+XCIrIC8vINCR0LvQvtC6LCDQutC+0YLQvtGA0YvQuSDQsdGD0LTQtdGCINGB0LvRg9C20LjRgtGMINGE0L7QvdC+0Lwg0LfQsNGC0LXQvNC90LXQvdC90YvQvFxyXG4gICAgICAgICAgIFwiPGltZyBzcmM9J1wiK3NyYytcIicgY2xhc3M9J3BvcHVwX2ltZycgLz5cIisgLy8g0KHQsNC80L4g0YPQstC10LvQuNGH0LXQvdC90L7QtSDRhNC+0YLQvlxyXG4gICAgICAgICAgIFwiPC9kaXY+XCIpOyBcclxuICAkKFwiLnBvcHVwXCIpLmZhZGVJbig4MDApOyAvLyDQnNC10LTQu9C10L3QvdC+INCy0YvQstC+0LTQuNC8INC40LfQvtCx0YDQsNC20LXQvdC40LVcclxuICAkKFwiLnBvcHVwX2JnXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHQvLyDQodC+0LHRi9GC0LjQtSDQutC70LjQutCwINC90LAg0LfQsNGC0LXQvNC90LXQvdC90YvQuSDRhNC+0L1cdCAgIFxyXG4gICAgJChcIi5wb3B1cFwiKS5mYWRlT3V0KDgwMCk7XHQvLyDQnNC10LTQu9C10L3QvdC+INGD0LHQuNGA0LDQtdC8INCy0YHQv9C70YvQstCw0Y7RidC10LUg0L7QutC90L5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHQvLyDQktGL0YHRgtCw0LLQu9GP0LXQvCDRgtCw0LnQvNC10YBcclxuICAgICAgJChcIi5wb3B1cFwiKS5yZW1vdmUoKTsgLy8g0KPQtNCw0LvRj9C10Lwg0YDQsNC30LzQtdGC0LrRgyDQstGB0L/Qu9GL0LLQsNGO0YnQtdCz0L4g0L7QutC90LBcclxuICAgIH0sIDgwMCk7XHJcbiAgfSk7XHJcbn0pO1xyXG59KVxyXG5cclxuXHJcblxyXG4vL9C90LDQstC40LPQsNGG0LjRjyDQvtGC0LfRi9Cy0LBcclxuJChmdW5jdGlvbigpe1xyXG4gICQoJy5jYXJkLWJ0bl9fbGVmdCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcub3dsLWNhcm91c2VsLXJldmlld3MnKS50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xyXG4gIH0pXHJcbiAgJCgnLmNhcmQtYnRuX19yaWdodCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcub3dsLWNhcm91c2VsLXJldmlld3MnKS50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xyXG4gIH0pXHJcbn0pXHJcblxyXG5cclxuXHJcbi8v0YHQvNC10L3QsCDQvtGC0LfRi9Cy0LBcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAkKCcub3dsLWNhcm91c2VsLWFib3V0Jykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgaXRlbXM6MSxcclxuICB9KTtcclxuICAkKCcub3dsLWNhcm91c2VsLXJldmlld3MnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICBpdGVtczoxLFxyXG4gICAgb25UcmFuc2xhdGVkOiBjYWxsYmFja1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBjYWxsYmFjayhldmVudCkge1xyXG4gICAgbGV0IGluZGV4ID0gZXZlbnQuaXRlbS5pbmRleDtcclxuXHJcbiAgICAkKCcuY2FyZF9faXRlbScpLmVhY2goIChpbngsZWwpID0+IHtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBpZiAoIGVsLmRhdGFzZXQudmFsdWUgPT0gaW5kZXggKXtcclxuICAgICAgICBlbC5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6IGJsb2NrJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbC5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6IG5vbmUnXHJcbiAgICAgIH1cclxuICAgICAgIFxyXG5cclxuICAgIH0pO1xyXG5cclxuICB9XHJcbn0pO1xyXG5cclxuLy9zZXJ2aWNlcyBzaG93L2hpZGUgYmxvY2tcclxuJChmdW5jdGlvbigpe1xyXG4gICQoJy5zaG93TWVzc2FnZScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQodGhpcykuY2xvc2VzdCgnLnNlcnZpY2VzX193cmFwcGVyJykuZmluZCgnLm1vZGFsTWVzc2FnZS1hY3RpdmUnKS5yZW1vdmVDbGFzcygnbW9kYWxNZXNzYWdlLWFjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5zZXJ2aWNlc19faXRlbScpLmZpbmQoJy5tb2RhbE1lc3NhZ2UnKS5hZGRDbGFzcygnbW9kYWxNZXNzYWdlLWFjdGl2ZScpO1xyXG4gICAgICBcclxuICAgIH0pXHJcbiAgfSk7XHJcbiAgJCgnLmhpZGVNZXNzYWdlJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5tb2RhbE1lc3NhZ2UnKS5yZW1vdmVDbGFzcygnbW9kYWxNZXNzYWdlLWFjdGl2ZScpO1xyXG4gICAgfSlcclxuICB9KVxyXG59KVxyXG5cclxuXHJcblxyXG4vL21lbnUgYnRuXHJcbiQoZnVuY3Rpb24oKXtcclxuICBsZXQgJGJ0biA9ICQoJy5oZWFkZXJfX2J0bk1lbnUnKTtcclxuICBsZXQgJG1lbnUgPSAkKCcuaGVhZGVyX19tZW51Jyk7XHJcbiAgbGV0ICRsaW5rID0gJCgnLmhlYWRlcl9fbWVudSBhJyk7XHJcbiAgXHJcbiAgJGxpbmsuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIHRvZ2dsZU1lbnUoKTtcclxuICB9KVxyXG5cclxuXHJcblxyXG4gICRidG4uY2xpY2soZnVuY3Rpb24oKXtcclxuICAgIHRvZ2dsZU1lbnUoKTtcclxuICB9KVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVNZW51KCl7XHJcbiAgICAkYnRuLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX2J0bk1lbnUtYWN0aXZlJyk7XHJcbiAgICAkbWVudS50b2dnbGVDbGFzcygnaGVhZGVyX19tZW51LWFjdGl2ZScpO1xyXG4gIH1cclxufSkiXX0=
