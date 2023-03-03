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
  const button = document.querySelector('.action-button');
  const title = document.querySelector('.step-title');

  const vid = document.querySelector('.da-video');
  vid.volume = 0.2;

  const vin = document.querySelector('.net-video');
  vin.volume = 0.2;

  function answer(text) {
    if (text === 'да') {
      $('.video-container').addClass('is-visible');
      setTimeout(() => {
        $(vid).addClass('is-active');
        vid.play();
      }, 400);
    } else if (text === 'нет') {
      $('.video-container').addClass('is-visible');
      setTimeout(() => {
        $(vin).addClass('is-active');
        vin.play();
      }, 400);
    }
  }

  // Создаем распознаватель
  var recognizer = new webkitSpeechRecognition();

  // Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
  recognizer.interimResults = true;

  // Какой язык будем распознавать?
  recognizer.lang = 'ru-Ru';

  // Используем колбек для обработки результатов
  recognizer.onresult = function (event) {
    var result = event.results[event.resultIndex];
    if (result.isFinal) {
      console.log('результат: ', result[0].transcript);
      if (stepsCounter === 1) {
        $('.name-input').val(result[0].transcript);
        $('.button__text-inner-text').text('Продолжить');
        $('.button__text-inner-text').fadeIn();
        $('.button__text-inner-icon').fadeOut('fast');
        stepsCounter++;
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
    // Начинаем слушать микрофон и распознавать голос
    recognizer.start();
  }

  var synth = window.speechSynthesis;

  function talk() {
    const name = $('.name-input').val();
    var utterance = new SpeechSynthesisUtterance(`Вас зовут ${name} ?`);
    speechSynthesis.speak(utterance);
  }

  function stop() {
    synth.cancel();
    console.log(synth);
  }

  $('.speech').click(function () {
    speech();
  });
  $('.talk').click(function () {
    talk();
  });
  $('.stop').click(function () {
    stop();
  });

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

  vid.addEventListener('ended', function (e) {
    $('.video-container').removeClass('is-visible');
    setTimeout(() => {
      $(vid).removeClass('is-active');
    }, 500);
  });

  vin.addEventListener('ended', function (e) {
    $('.video-container').removeClass('is-visible');
    setTimeout(() => {
      $(vin).removeClass('is-active');
    }, 500);
  });

  /* -------------------------------------------------------------------- */
};
