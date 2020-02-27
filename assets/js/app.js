(function($){
  $(document).ready(function() {
    var scrollTop = $(".top-btn");
  
    $(window).scroll(function() {
      var topPos = $(this).scrollTop();
      if (topPos > 100) {
        $(scrollTop).css("opacity", "1");
  
      } else {
        $(scrollTop).css("opacity", "0");
      }
  
    }); 
    $(scrollTop).click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
  
    });

    (function(){
      var containerMargin = $('.container').css('margin-left');
      var sliderContent = $('.slider__item-content');
      $(sliderContent).css('margin-left', containerMargin);

      $(window).resize(function(){
        var containerMargin = $('.container').css('margin-left');
        var sliderContent = $('.slider__item-content');
        $(sliderContent).css('margin-left', containerMargin);
      });
    })();
    

    (function(){
      $('.slider-container').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
      });
      var imgHeight = $('.slider-container .slider__item-img:first-child img').height();
      var img = $('.slider-container .slider__item-img img');
      var imgContainer = $('.slider-container .slider__item-img');
      var arrowRight = $('.slider__arrow-right');
      $(arrowRight).on('click', function(){
        $('.slider-container').slick('slickNext');
      });
      $(img).css('height', imgHeight);
      $(imgContainer).css('height', imgHeight);
    })();

    (function () {
      if ($('.nav__scrollable .nav-link.active').length) {
        var position = $('.nav__scrollable .nav-link.active').position(),
          positionLeft = position.left;
        $('.main__tabs-right_scroll-container').scrollLeft(positionLeft);
      }
    })();

    //Phone menu
    (function(){
      $('.phone__header-btn').on('click', function(){
        $('.phone__header-menu').css({
          'min-height': '100vh',
          'border': ' 25px solid #3EDDB4'
        });
      });
      $('.phone__header-close').on('click', function(){
        $('.phone__header-menu').css({
          'min-height': '0',
          'border': ' 0 solid #3EDDB4'
        });
      });
    })();

    (function(){
      var containerMargin = $('.container').css('margin-left');
      containerMargi = +containerMargin + +10;
      $('.services__how-tabs-nav_left-bg').css({
        'width': containerMargin
      });
      $(window).resize(function(){
        var containerMargin = $('.container').css('margin-left');
        containerMargi = +containerMargin + +10;
        $('.services__how-tabs-nav_left-bg').css({
          'width': containerMargin
        });
      })
    })();

    (function(){
      $(".carousel").swipe({

        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      
          if (direction == 'left') $(this).carousel('next');
          if (direction == 'right') $(this).carousel('prev');
      
        },
        allowPageScroll:"vertical"
      
      });
    })();

  });
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCl7XHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc2Nyb2xsVG9wID0gJChcIi50b3AtYnRuXCIpO1xyXG4gIFxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHRvcFBvcyA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgIGlmICh0b3BQb3MgPiAxMDApIHtcclxuICAgICAgICAkKHNjcm9sbFRvcCkuY3NzKFwib3BhY2l0eVwiLCBcIjFcIik7XHJcbiAgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChzY3JvbGxUb3ApLmNzcyhcIm9wYWNpdHlcIiwgXCIwXCIpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9KTsgXHJcbiAgICAkKHNjcm9sbFRvcCkuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgfSwgODAwKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIFxyXG4gICAgfSk7XHJcblxyXG4gICAgKGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciBjb250YWluZXJNYXJnaW4gPSAkKCcuY29udGFpbmVyJykuY3NzKCdtYXJnaW4tbGVmdCcpO1xyXG4gICAgICB2YXIgc2xpZGVyQ29udGVudCA9ICQoJy5zbGlkZXJfX2l0ZW0tY29udGVudCcpO1xyXG4gICAgICAkKHNsaWRlckNvbnRlbnQpLmNzcygnbWFyZ2luLWxlZnQnLCBjb250YWluZXJNYXJnaW4pO1xyXG5cclxuICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBjb250YWluZXJNYXJnaW4gPSAkKCcuY29udGFpbmVyJykuY3NzKCdtYXJnaW4tbGVmdCcpO1xyXG4gICAgICAgIHZhciBzbGlkZXJDb250ZW50ID0gJCgnLnNsaWRlcl9faXRlbS1jb250ZW50Jyk7XHJcbiAgICAgICAgJChzbGlkZXJDb250ZW50KS5jc3MoJ21hcmdpbi1sZWZ0JywgY29udGFpbmVyTWFyZ2luKTtcclxuICAgICAgfSk7XHJcbiAgICB9KSgpO1xyXG4gICAgXHJcblxyXG4gICAgKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoJy5zbGlkZXItY29udGFpbmVyJykuc2xpY2soe1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciBpbWdIZWlnaHQgPSAkKCcuc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyX19pdGVtLWltZzpmaXJzdC1jaGlsZCBpbWcnKS5oZWlnaHQoKTtcclxuICAgICAgdmFyIGltZyA9ICQoJy5zbGlkZXItY29udGFpbmVyIC5zbGlkZXJfX2l0ZW0taW1nIGltZycpO1xyXG4gICAgICB2YXIgaW1nQ29udGFpbmVyID0gJCgnLnNsaWRlci1jb250YWluZXIgLnNsaWRlcl9faXRlbS1pbWcnKTtcclxuICAgICAgdmFyIGFycm93UmlnaHQgPSAkKCcuc2xpZGVyX19hcnJvdy1yaWdodCcpO1xyXG4gICAgICAkKGFycm93UmlnaHQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLnNsaWRlci1jb250YWluZXInKS5zbGljaygnc2xpY2tOZXh0Jyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAkKGltZykuY3NzKCdoZWlnaHQnLCBpbWdIZWlnaHQpO1xyXG4gICAgICAkKGltZ0NvbnRhaW5lcikuY3NzKCdoZWlnaHQnLCBpbWdIZWlnaHQpO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICAoZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoJCgnLm5hdl9fc2Nyb2xsYWJsZSAubmF2LWxpbmsuYWN0aXZlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gJCgnLm5hdl9fc2Nyb2xsYWJsZSAubmF2LWxpbmsuYWN0aXZlJykucG9zaXRpb24oKSxcclxuICAgICAgICAgIHBvc2l0aW9uTGVmdCA9IHBvc2l0aW9uLmxlZnQ7XHJcbiAgICAgICAgJCgnLm1haW5fX3RhYnMtcmlnaHRfc2Nyb2xsLWNvbnRhaW5lcicpLnNjcm9sbExlZnQocG9zaXRpb25MZWZ0KTtcclxuICAgICAgfVxyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvL1Bob25lIG1lbnVcclxuICAgIChmdW5jdGlvbigpe1xyXG4gICAgICAkKCcucGhvbmVfX2hlYWRlci1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5waG9uZV9faGVhZGVyLW1lbnUnKS5jc3Moe1xyXG4gICAgICAgICAgJ21pbi1oZWlnaHQnOiAnMTAwdmgnLFxyXG4gICAgICAgICAgJ2JvcmRlcic6ICcgMjVweCBzb2xpZCAjZmZmMmYyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgJCgnLnBob25lX19oZWFkZXItY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5waG9uZV9faGVhZGVyLW1lbnUnKS5jc3Moe1xyXG4gICAgICAgICAgJ21pbi1oZWlnaHQnOiAnMCcsXHJcbiAgICAgICAgICAnYm9yZGVyJzogJyAwIHNvbGlkICNmZmYyZjInXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICAoZnVuY3Rpb24oKXtcclxuICAgICAgdmFyIGNvbnRhaW5lck1hcmdpbiA9ICQoJy5jb250YWluZXInKS5jc3MoJ21hcmdpbi1sZWZ0Jyk7XHJcbiAgICAgIGNvbnRhaW5lck1hcmdpID0gK2NvbnRhaW5lck1hcmdpbiArICsxMDtcclxuICAgICAgJCgnLnNlcnZpY2VzX19ob3ctdGFicy1uYXZfbGVmdC1iZycpLmNzcyh7XHJcbiAgICAgICAgJ3dpZHRoJzogY29udGFpbmVyTWFyZ2luXHJcbiAgICAgIH0pO1xyXG4gICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lck1hcmdpbiA9ICQoJy5jb250YWluZXInKS5jc3MoJ21hcmdpbi1sZWZ0Jyk7XHJcbiAgICAgICAgY29udGFpbmVyTWFyZ2kgPSArY29udGFpbmVyTWFyZ2luICsgKzEwO1xyXG4gICAgICAgICQoJy5zZXJ2aWNlc19faG93LXRhYnMtbmF2X2xlZnQtYmcnKS5jc3Moe1xyXG4gICAgICAgICAgJ3dpZHRoJzogY29udGFpbmVyTWFyZ2luXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICB9KSgpO1xyXG5cclxuICAgIChmdW5jdGlvbigpe1xyXG4gICAgICAkKFwiLmNhcm91c2VsXCIpLnN3aXBlKHtcclxuXHJcbiAgICAgICAgc3dpcGU6IGZ1bmN0aW9uKGV2ZW50LCBkaXJlY3Rpb24sIGRpc3RhbmNlLCBkdXJhdGlvbiwgZmluZ2VyQ291bnQsIGZpbmdlckRhdGEpIHtcclxuICAgICAgXHJcbiAgICAgICAgICBpZiAoZGlyZWN0aW9uID09ICdsZWZ0JykgJCh0aGlzKS5jYXJvdXNlbCgnbmV4dCcpO1xyXG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAncmlnaHQnKSAkKHRoaXMpLmNhcm91c2VsKCdwcmV2Jyk7XHJcbiAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWxsb3dQYWdlU2Nyb2xsOlwidmVydGljYWxcIlxyXG4gICAgICBcclxuICAgICAgfSk7XHJcbiAgICB9KSgpO1xyXG5cclxuICB9KTtcclxufSkoalF1ZXJ5KTsiXX0=
