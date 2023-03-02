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
  const waterFriction = 0.05;
  const fishSpeed = 1;

  const logoWidth = window.innerWidth >= 1400 ? window.innerWidth : 1400;
  const logoHeight = 360;
  let coefficient = logoWidth / window.innerWidth;

  const mainlogo = document.getElementById('mainlogo');
  const ctx = mainlogo.getContext('2d');
  ctx.scale(15, 15);

  mainlogo.width = logoWidth;
  mainlogo.height = logoHeight;
  const lightning = document.querySelector('.mainlogo__lightning');
  const mainlogoContainer = document.querySelector('.mainlogo__container');
  lightning.style.setProperty('transform', `scale(${1 / coefficient})`);
  $(window).resize(function () {
    coefficient = logoWidth / window.innerWidth;
    lightning.style.setProperty('transform', `scale(${1 / coefficient})`);
  });

  var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Common = Matter.Common,
    Constraint = Matter.Constraint,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Sleeping = Matter.Sleeping,
    Vertices = Matter.Vertices,
    Svg = Matter.Svg;

  var engine = Engine.create(),
    world = engine.world;

  var render = Render.create({
    canvas: mainlogo,
    engine: engine,
    options: {
      pixelRatio: 1,
      wireframes: false,

      width: logoWidth,
      height: logoHeight,

      showAngleIndicator: false,
      showIds: false,
      showBroadphase: false,
      showPositions: false,
      showBounds: false,

      showDebug: false,
    },
  });

  const bodiesArr = [];
  const mouseObject = Bodies.circle(0, 0, 10, {
    render: {
      /*       fillStyle: 'transparent',
      strokeStyle: 'transparent', */
    },
  });
  bodiesArr.push(mouseObject);

  const wallsThickness = 10;
  const wallOptions = [
    /*     {
      x: 0,
      y: 0,
      width: wallsThickness,
      height: logoHeight * 2,
    },
    {
      x: logoWidth,
      y: 0,
      width: wallsThickness,
      height: logoHeight * 2,
    }, */
    {
      x: 0,
      y: 0,
      width: logoWidth * 2,
      height: wallsThickness,
    },
    /* {
      x: 0,
      y: logoHeight,
      width: logoWidth * 2,
      height: wallsThickness,
    }, */
  ];

  wallOptions.forEach((item) => {
    const wall = Bodies.rectangle(item.x, item.y, item.width, item.height, {
      isStatic: true,
      render: {
        visible: false,
      },
    });
    bodiesArr.push(wall);
  });

  var mouseConstraint = MouseConstraint.create(engine, {
    element: mainlogoContainer,
    constraint: {
      stiffness: 1,
      render: {
        visible: false,
      },
    },
  });

  World.add(engine.world, bodiesArr);
  Render.run(render);
  const runner = Runner.create();
  Runner.run(runner, engine);

  if (checkInnerWidth(980)) {
    // add gyro control
    if (typeof window !== 'undefined') {
      const updateGravity = function (event) {
        var orientation = window.orientation || 0,
          gravity = engine.gravity;
        $('.orientation').text(orientation);
        if (orientation === 0) {
          gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
          gravity.y = Common.clamp(event.beta, -90, 90) / 90;
        } else if (orientation === 180) {
          gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
          gravity.y = Common.clamp(-event.beta, -90, 90) / 90;
        } else if (orientation === 90) {
          gravity.x = Common.clamp(event.beta, -90, 90) / 90;
          gravity.y = Common.clamp(-event.gamma, -90, 90) / 90;
        } else if (orientation === -90) {
          gravity.x = Common.clamp(-event.beta, -90, 90) / 90;
          gravity.y = Common.clamp(event.gamma, -90, 90) / 90;
        }
      };
      window.addEventListener('deviceorientation', updateGravity);
    }

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;
  } else {
    mainlogoContainer.addEventListener('mouseover', function () {
      World.add(engine.world, mouseConstraint);
    });
    mainlogoContainer.addEventListener('mouseleave', function () {
      Composite.remove(engine.world, mouseConstraint);
    });
    MouseConstraint.update = function (mouseConstraint, bodies) {
      var mouse = mouseConstraint.mouse,
        constraint = mouseConstraint.constraint,
        body = Composite.allBodies(engine.world)[0];
      constraint.pointA = { x: mouse.position.x * coefficient, y: mouse.position.y * coefficient };
      constraint.bodyB = mouseConstraint.body = body;
      constraint.angleB = body.angle;
    };
  }

  // fit the render viewport to the scene
  Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: logoWidth, y: logoHeight },
  });

  const logoObjects = [
    {
      width: 118,
      rwidth: 118,
      height: 164,
      texture: './img/vector-p.svg',
      isStatic: false,
      x: 100,
    },
    {
      width: 94,
      rwidth: 94,
      height: 164,
      texture: './img/vector-l.svg',
      isStatic: false,
      x: 100,
    },
    {
      width: 153,
      rwidth: 153,
      height: 164,
      texture: './img/vector-a.svg',
      isStatic: false,
    },
    {
      width: 190,
      rwidth: 0,
      height: 360,
      texture: '',
      isStatic: true,
      isLightning: true,
    },
    {
      width: 115,
      rwidth: 115,
      height: 164,
      texture: './img/vector-s.svg',
      isStatic: false,
    },
    {
      width: 115,
      rwidth: 115,
      height: 164,
      texture: './img/vector-t.svg',
      isStatic: false,
    },
    {
      width: 133,
      rwidth: 133,
      height: 164,
      texture: './img/vector-r.svg',
      isStatic: false,
    },
    {
      width: 173,
      rwidth: 173,
      height: 164,
      texture: './img/vector-o.svg',
      isStatic: false,
    },
    {
      width: 164,
      rwidth: 164,
      height: 164,
      texture: './img/vector-m.svg',
      isStatic: false,
    },
  ];

  const letterMargin = 15;
  let logoContainer = 0 - letterMargin;
  logoObjects.forEach((item) => {
    logoContainer += item.width + letterMargin;
  });
  let startPosition = (logoWidth - logoContainer) / 2;
  let position = startPosition + logoObjects[0].width / 2;

  setTimeout(() => {
    lightning.classList.add('is-visible');
  }, 300);

  mainlogoContainer.addEventListener('mouseenter', function (e) {
    e.stopPropagation();
    lightning.classList.add('is-active');
  });
  mainlogoContainer.addEventListener('mouseleave', function () {
    lightning.classList.remove('is-active');
  });

  logoObjects.forEach((item, index) => {
    if (item.isLightning) {
      lightning.style.top = `10px`;
      lightning.style.left = `${(position - letterMargin - item.width / 2) / coefficient}px`;
    }

    var body = Bodies.rectangle(
      position + (index < 3 ? -50 : 50),
      item.isLightning ? item.height / 2 + 10 : logoHeight / 3 + 10,
      item.rwidth,
      item.height,
      {
        isStatic: item.isStatic,
        render: {
          strokeStyle: 'transparent',
          fillStyle: 'transparent',
          sprite: {
            texture: item.texture,
          },
        },
      }
    );

    var constraint = Constraint.create({
      pointA: { x: position, y: 10 },
      bodyB: body,
      pointB: { x: 0, y: 0 - item.height / 2 },
      stiffness: 0.001,
      render: {
        visible: false,
      },
    });

    Composite.add(world, [body, constraint]);

    position =
      position + item.width / 2 + (logoObjects[index + 1] ? logoObjects[index + 1].width / 2 : 0) + letterMargin;
  });

  function radiansToDegrees(n) {
    return n * (180 / Math.PI);
  }

  function degreesToRadius(n) {
    return n * (Math.PI / 180);
  }

  /* -------------------------------------------------------------------- */
};
