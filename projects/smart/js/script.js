$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow:'<button type="button" class="slick-prev"><img src="/projects/smart/img/left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/projects/smart/img/right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                arrows: false
                }
            }
        ]
      });
    

    function toggleSlide(item) {
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault(); // Отмена стандарного поведения браузера
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
            });
        });

        
    }

    //   $('.catalog__tab').on('click',(event)=>{
    //       $('.catalog__tabs').find('.catalog__tab').removeClass('catalog__tab_active')
    //       $(event.currentTarget).addClass('catalog__tab_active')
          
    //   })

        toggleSlide('.catalog-item__link');
        toggleSlide('.catalog-item__back');

        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
            $(this)
              .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
              .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
          });

          $('[data-modal=consultation]').on('click', function(){
              $('.overlay, #consultation').fadeIn(600);
          })
          $('.modal__close').on('click', function(){
              $('.overlay, #consultation, #order, #thanks').fadeOut(600)
          })
          
          $('.catalog-item__btn').each(function(i){
            $(this).on('click',function(){
                $('#order .modal_subheader').text($('.catalog-item__subtitle').eq(i).text());
                $('.overlay, #order').fadeIn(600)
            })
           });
           function hideUl(class1,class2) {
            $
        }


        function validForm(form){
            $(form).validate({
                rules: {
                    name: "required",
                    phone: "required",
                    email: {
                        required: true,
                        email: true,
                    }
                },
                 
                messages: {
                    name: "Введите свое Имя",
                    phone: "Введите номер телефона",
                    email: {
                      required: "Введите почтовый адрес",
                      email: "неправильный формат 'name@domain.com'"
                    }
                }
            });
        }
        validForm('#consultation-form')
        validForm('#consultation form')
        validForm('#order form')

        $('input[name=phone]').mask("+7(999) 999-99-99");
      

        $('form').submit(function(e) {
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "/mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $('#consultation, #order').fadeOut();
                $('.overlay, #thanks').fadeIn('slow');
    
                $('form').trigger('reset');
            });
            return false;
        });

        $(window).scroll(function(){
         if ($(this).scrollTop()> 1600){
          $('.pageup').fadeIn();
         } else {
            $('.pageup').fadeOut();
          }
        });
        $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});

  