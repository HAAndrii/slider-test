// // import Swiper JS
// import Swiper from 'swiper';
  
//   // import Swiper styles
// import 'swiper/swiper.scss';

(() => {

    function swiperSlider() {
        const heroMain = document.querySelectorAll('[data-slider="response-slider"]');
        if (heroMain) {
            heroMain.forEach(slider => {
                let pagination = slider.querySelector('.swiper-pagination');
                swiper = new Swiper(slider.querySelector('.swiper'), {
                    speed: 1500,
                    centeredSlides: true,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    slidesPerView: 1,
                    spaceBetween: 30,
                    pagination: {
                        el: pagination,
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<li class="' + className + '"></li>';
                        },
                    },
                    on: {
                        transitionStart: function () {
                            let previousIndex = this.previousIndex;
                            let previousSlide = slider.getElementsByClassName('swiper-slide')[previousIndex];
                            if (previousSlide) {
                                setTimeout(function () {
                                    previousSlide.classList.remove('is-play');
                                }, 1000);
                            }
                        },
                        transitionEnd: function () {
                            let activeIndex = this.activeIndex;
                            let activeSlide = slider.getElementsByClassName('swiper-slide')[activeIndex];
                            activeSlide.classList.add('is-play');
                        },
                    }

                });
            });
        }
    }
    window.addEventListener('load', swiperSlider, false);
})();

