$(document).ready(function(){
    $('.carousel__inner').slick({
        centerPadding: '100px',
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="/projects/bs/img/left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/projects/bs/img/right.png" alt=""></button>',

        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              speed: 300,
              variableWidth: true,
              prevArrow: '<button type="button" class="slick-prev" style="display: inline-block"><img src="/projects/bs/img/left.png" alt=""></button>',
              nextArrow: '<button type="button" class="slick-next"><img src="/projects/bs/img/right.png" alt=""></button>',
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    $('.hamburger').on('click',()=>{
      $('.header_menu').toggleClass('header_menu_active')
    })
  });

