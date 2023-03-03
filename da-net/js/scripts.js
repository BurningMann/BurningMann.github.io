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
  let stepsCounter = 1;
  const synth = window.speechSynthesis;
  const button = document.querySelector('.action-button');
  const title = document.querySelector('.step-title');

  const variables = {
    да: {
      url: './video/piz.mp4',
      type: 'video',
    },
    нет: {
      url: './video/pid.mp4',
      type: 'video',
    },
    'х**': {
      url: './img/present.png',
      type: 'image',
    },
    капибара: {
      url: './video/capybara.mp4',
      type: 'video',
    },
    васзовутпавел: {
      url: './video/pavel.mp4',
      type: 'video',
    },
    павел: {
      url: './video/pavel.mp4',
      type: 'video',
    },
  };

  function createVideo(url) {
    const video = document.createElement('video');
    video.src = url;
    video.controls = false;
    video.muted = false;
    video.volume = 0.5;
    const box = document.querySelector('.video-container');
    box.appendChild(video);
    $('.video-container').addClass('is-visible');
    video.play();
    video.addEventListener('ended', function (e) {
      $('.video-container').removeClass('is-visible');
      video.remove();
    });
  }

  function createImage(url) {
    const image = document.createElement('img');
    image.src = url;
    const box = document.querySelector('.video-container');
    box.appendChild(image);
    $('.video-container').addClass('is-visible');
    setTimeout(() => {
      $('.video-container').removeClass('is-visible');
      image.remove();
    }, 3000);
  }

  function answer(text) {
    const realText = text.replace(/\s/g, '').toLowerCase();
    if (variables[realText]) {
      variables[realText].type === 'video'
        ? createVideo(variables[realText].url)
        : createImage(variables[realText].url);
    }
  }

  const recognizer = new webkitSpeechRecognition();
  recognizer.interimResults = true;
  recognizer.lang = 'ru-Ru';

  recognizer.onresult = function (event) {
    var result = event.results[event.resultIndex];
    if (result.isFinal) {
      console.log('результат: ', result[0].transcript);
      if (stepsCounter === 1) {
        $('.name-input').val(result[0].transcript);
        /*  $('.button__text-inner-text').text('Продолжить');
        $('.button__text-inner-text').fadeIn();
        $('.button__text-inner-icon').fadeOut('fast'); */
        answer(result[0].transcript);
      } else if (stepsCounter === 4) {
        answer(result[0].transcript);
      }
    } else {
      if (stepsCounter === 1) {
        $('.name-input').val(result[0].transcript);
      }
      console.log('Промежуточный результат: ', result[0].transcript);
    }
  };

  function speech() {
    recognizer.start();
  }

  function talk() {
    const name = $('.name-input').val();
    var utterance = new SpeechSynthesisUtterance(`Вас зовут ${name} ?`);
    speechSynthesis.speak(utterance);
  }

  function stop() {
    synth.cancel();
  }

  button.addEventListener('click', function (e) {
    if (stepsCounter === 1) {
      speech();
    } else if (stepsCounter === 2) {
      $(title).text('Прослушать вопрос');
      $('.name-input').fadeOut('fast');
      $('.button__text-inner-text').text('Слушать');
      stepsCounter++;
    } else if (stepsCounter === 3) {
      talk();
      $('.button__text-inner-text').text('Продолжить');
      $('.button__text-inner-text').fadeOut('fast');
      $('.button__text-inner-icon').fadeIn();
      $(title).text('Ответить на вопрос');
      stepsCounter++;
    } else if (stepsCounter === 4) {
      speech();
    }
  });

  /* -------------------------------------------------------------------- */
};
