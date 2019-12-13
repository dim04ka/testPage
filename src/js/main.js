

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