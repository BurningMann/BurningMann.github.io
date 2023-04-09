/* Проверка на моб девайс */
function iOS() {
  return (
    ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  );
}
const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  ) || iOS();
if (isMobile) {
  document.querySelector('html').classList.add('is-mobile');
}

/* Проверка на safari */
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) {
  document.querySelector('html').classList.add('is-safari');
}

/* Проверка на ios */
const isIos = navigator.platform.match('Mac') !== null;
if (isIos) {
  document.querySelector('html').classList.add('is-OSX');
}

/* Проверка ширины экрана */
function checkInnerWidth(width) {
  if (window.innerWidth <= width) {
    return true;
  } else {
    return false;
  }
}

window.onload = function () {
  $('.lang-switcher__main').click(function () {
    $('.lang-switcher__list').slideToggle('fast');
  });

  $('.tabs__button').click(function () {
    const tab = $(this).data('tab');
    const content = $(this).closest('.tabs').find('.tabs__content');
    $(this).siblings('.is-active').removeClass('is-active');
    $(this).addClass('is-active');

    $(content).find('.is-active').removeClass('is-active');
    $(content).find(`.tab-${tab}`).addClass('is-active');
  });

  const previewSlider = new Swiper('.preview-slider .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    allowTouchMove: true,
    centeredSlides: false,
    autoplay: true,
    speed: 700,
    navigation: {
      nextEl: '.gallery-slider-navigation .swiper-navigation-next',
      prevEl: '.gallery-slider-navigation .swiper-navigation-prev',
    },
  });

  const reviewSlider = new Swiper('.reviews-slider .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    allowTouchMove: true,
    centeredSlides: false,
    navigation: {
      nextEl: '.reviews-slider-navigation .swiper-navigation-next',
      prevEl: '.reviews-slider-navigation .swiper-navigation-prev',
    },
    breakpoints: {
      1440: {
        slidesPerView: 3,
      },
    },
  });

  gsap.registerPlugin(ScrollTrigger);

  const logoWidth = document.querySelector('.main-logo__text');
  const logoImgWidth = document.querySelector('.main-logo__text img');
  gsap.to('.main-logo__text', {
    scrollTrigger: {
      trigger: '.main-logo',
      start: 'top-=66 top',
      end: 'bottom+=200 top',
      pin: true,
      scrub: 1,
    },
    left: `-${logoImgWidth.getBoundingClientRect().width - logoWidth.getBoundingClientRect().width}px`,
  });

  if (!checkInnerWidth(780)) {
    const gameSections = document.querySelectorAll('.games-section');

    gameSections.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        pin: true,
        start: 'top top',
        end: 'bottom top ',
      });
    });
  }

  /* -------------------------------------------------------------------- */
};
