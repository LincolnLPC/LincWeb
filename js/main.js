var tab_first =document.querySelector('.tab');
var tabs = document.querySelectorAll('.tab');
var content_first = document.querySelector('.content_tabs');
var content = document.querySelectorAll('.content_tabs');
var form = document.querySelector('.modal_background');
var close = document.querySelectorAll('.cl-btn-6-txt');
var btn_menu = document.querySelectorAll('.btn_menu');
var btn_about = document.querySelectorAll('.btn_about');
var about = document.querySelector('.modal_background_about');
var inputs = document.querySelectorAll('input');

// ТАБЫ
+function(){
    content_first.classList.add('content_tabs_active');
    tab_first.classList.add('active_tab');

    function selectPanel(e){
        var target = e.target.dataset.target;
        tabs.forEach(el =>{
            el.classList.remove('active_tab');
            e.target.classList.add('active_tab');
        });
        content.forEach(el =>{
            el.classList.remove('content_tabs_active');
            document.querySelector('.'+target).classList.add('content_tabs_active');
        });
    }

    tabs.forEach(el =>{
        el.addEventListener('click',selectPanel);
    });
}();

var elements = document.querySelectorAll(".circular");
var elements_span = [];
elements.forEach((element, index) => {
    if (!elements_span[index])
    elements_span[index] = element.querySelector("span");
    element.addEventListener("mouseover", e => {
        elements_span[index].style.left = e.pageX - element.getBoundingClientRect().left - window.scrollX + "px";
        elements_span[index].style.top = e.pageY - element.getBoundingClientRect().top - window.scrollY + "px";
    });
    element.addEventListener("mouseout", e => {
        elements_span[index].style.left = e.pageX - element.getBoundingClientRect().left - window.scrollX + "px";
        elements_span[index].style.top = e.pageY - element.getBoundingClientRect().top - window.scrollY + "px";
    });
});

function CloseModals (){
    form.style.display = 'none';
    about.style.display = 'none';
}
function OpenForm(){
    form.style.display = 'block';
}
function OpenAbout(){
    about.style.display = 'block';
}


btn_menu.forEach(el =>{
    el.addEventListener('click',OpenForm);
});

btn_about.forEach(el =>{
    el.addEventListener('click',OpenAbout);
});

close.forEach(el =>{
    el.addEventListener('click',CloseModals);
});





















































// Инициальзация через JQuery
$(document).ready   (($)=>{

    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
         type: 'POST',
         url: 'smart.php',
         data: $(this).serialize()
        }).done(function(){
            $(this).find('input').val('');
            $('.modal_background').fadeOut();
            $('form').trigger('reset');
        });
        return false;
    });




    // $('.valid_form').validate({
    //     rules:{
    //         name: "required",
    //         phone: "required",
    //         email: {
    //             required: true,
    //             email:true
    //         }
    //     },
    //     messages:{
    //         name: "Имя",
    //         phone: "Телефона",
    //         email: {
    //             required: "Электронная почта",
    //             email: "Неверный формат"
    //         }
    //     }
    // });

    $('.block_photos').lightGallery();

    $('.carousel_tabs').slick({
        prevArrow:'<img class="left_arrow" src="/img/left.svg" alt="">',
        nextArrow: '<img class="right_arrow" src="/img/right.svg" alt="">',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                autoplay: false,
                slidesToShow: 1,
                variableWidth: true
              }
            },
          ]
      });

      $('.feedbacks_block').slick({
        settings: 'unslick',
        responsive: [
            {
              breakpoint: 9999,
              settings: 'unslick'
            },
            {
                breakpoint: 900,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  autoplay: false,
                  slidesToShow: 1,
                  adaptiveHeight:true,
                  variableWidth: true
                }
              },
          ]
      });
});
