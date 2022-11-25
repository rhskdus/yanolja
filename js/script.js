// 상단 이벤트

$(document).ready(function(){

  AOS.init();

  var swiper = new Swiper(".firstSwiper", {
      loop:true,
      // slidesPerView: 3.5,
      // slidesPerGroups:1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay:{
          delay:1500,
          disableOnInteraction: false,
      },
      breakpoints:{
        1500:{
          slidesPerView: 3,
          slidesPerGroups:1,
          spaceBetween: 20,
        },
        960:{
          slidesPerView: 2,
          slidesPerGroups:1,
          spaceBetween: 20,

        },
        760:{
          slidesPerView: 1,
          slidesPerGroups:1,
          spaceBetween: 20,
          
        }
      }
    });

// 오션뷰

  var swiper = new Swiper(".secondSwiper", {
    loop:true,
    // slidesPerView: 4,
    // slidesPerGroups:1,
    autoplay:{
        delay:2000,
        disableOnInteraction: false,
    },
    breakpoints:{
      1500:{
        slidesPerView: 4,
        slidesPerGroups:1,
        spaceBetween: 20,
      },

      960:{
        slidesPerView: 3,
        slidesPerGroups:1,
        spaceBetween: 20,
      },
      760:{
        slidesPerView: 1,
        slidesPerGroups:1,
        spaceBetween: 20,
      }
    }
  });

// 쿠폰

  var swiper = new Swiper(".thirdSwiper", {
    loop:true,
    // slidesPerView: 4,
    // slidesPerGroups:4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },    
      breakpoints:{
      1500:{
        slidesPerView: 4,
        slidesPerGroups:1,
        // slidesPerView : 'auto'
        // spaceBetween: 3,
      
      },
      960:{
        slidesPerView: 3,
        slidesPerGroups:1,
        // slidesPerView : 'auto',
        centeredSlides: true,
        spaceBetween: 10,
      },
      760:{
        slidesPerView: 1,
        slidesPerGroups:1,
        // slidesPerView : 'auto',
        centeredSlides: true,
        spaceBetween: 10,
      }
    },
    // autoplay:{
    //     delay:2000,
    //     disableOnInteraction: false,
    // }
  });

//인기여행지

  /* 1 */
  $(window).scroll( function(){
      /* 2 */
      $('.sec_2').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          /* 3 */
          if( bottom_of_window > bottom_of_object/2 ){
              $(this).animate({'opacity':'1'},1000);
          }
      }); 
  });



  
});

