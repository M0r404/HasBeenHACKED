// Clear current page
document.head.innerHTML = `
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
`;
document.body.innerHTML = "";
document.body.style = "margin:0;padding:0;background:#000;color:#00ffaa;font-family:'Courier New',Courier,monospace;overflow:hidden;";

// Inject styles
const style = document.createElement("style");
style.innerHTML = `
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Courier New', Courier, monospace;
    background: #000;
    color: #00ffaa;
    overflow: hidden;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1200px;
  }
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .box {
    position: relative;
    z-index: 2;
    width: 95vw;
    max-width: 680px;
    padding: 20px 15px;
    background: rgba(0, 0, 0, 0.85);
    border: 2px solid #00ffaa;
    border-radius: 16px;
    box-shadow: 0 0 40px #00ffaa55, 0 0 100px #00ffaa33, inset 0 0 30px #00ffaa22;
    transform-style: preserve-3d;
    transition: transform 0.1s ease-out;
    text-align: center;
  }
  .logo {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 3px solid #ff0040;
    box-shadow: 0 0 25px #ff0040aa, 0 0 60px #ff0040cc;
    margin-bottom: 20px;
  }
  h1 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    color: #00ffee;
    text-shadow: 0 0 12px #00ffee, 0 0 25px #00ffeeaa;
    margin-bottom: 18px;
  }
  .signature {
    font-size: clamp(0.9rem, 2.5vw, 1.2rem);
    color: #ff0040;
    margin-bottom: 20px;
    text-shadow: 0 0 10px #ff0040, 0 0 25px #ff0040aa;
  }
  .terminal {
    font-size: clamp(0.85rem, 2.2vw, 1rem);
    background: rgba(0, 0, 0, 0.3);
    border: 1px dashed #00ffaa;
    padding: 10px;
    color: #00ffcc;
    margin-bottom: 20px;
    text-align: left;
    white-space: pre-wrap;
    box-shadow: 0 0 10px #00ffaa55;
  }
  .message {
    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
    margin: 20px 0 10px;
    color: #00ffee;
    text-shadow: 0 0 8px #00ffee;
    white-space: pre-wrap;
    min-height: 80px;
  }
  .twitter-link {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 18px;
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    color: #ff0040;
    text-decoration: none;
    border: 1px solid #ff0040;
    border-radius: 6px;
    box-shadow: 0 0 12px #ff004088;
    transition: 0.3s ease;
  }
  .twitter-link:hover {
    background: #ff0040;
    color: #000;
    box-shadow: 0 0 30px #ff0040;
  }
  #manifesto {
    display: none;
    position: fixed;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    color: #00ffaa;
    background: rgba(0, 0, 0, 0.85);
    padding: 10px 16px;
    border: 1px solid #00ffaa;
    text-shadow: 0 0 10px #00ffaa;
    z-index: 999;
  }
  #secret-btn {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    z-index: 1000;
  }
`;
document.head.appendChild(style);

// Inject HTML
document.body.innerHTML = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML>
 <HEAD>
  <TITLE> MINH IT </TITLE>
  <META NAME="Generator" CONTENT="EditPlus">
  <META NAME="Author" CONTENT="">
  <META NAME="Keywords" CONTENT="">
  <META NAME="Description" CONTENT="">
  <link rel="stylesheet" href="style.css">
  <style>
  html, body {
  height: 100%;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.851);
}
canvas {
  position: absolute;
  width: 100%;
  height: 100%;
}
  </style>
 </HEAD>
 <BODY>
  <div class="box">
    <canvas id="pinkboard"></canvas>
  </div>
<script>
var settings = {
  particles: {
    length:   10000, // maximum amount of particles
    duration:   4, // particle duration in sec
    velocity: 80, // particle velocity in pixels/sec
    effect: -1.3, // play with this for a nice effect
    size:      8, // particle size in pixels
  },
};
/*
 */
(function(){var b=0;var c=["ms","moz","webkit","o"];for(var a=0;a<c.length&&!window.requestAnimationFrame;++a){window.requestAnimationFrame=window[c[a]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[c[a]+"CancelAnimationFrame"]||window[c[a]+"CancelRequestAnimationFrame"]}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(h,e){var d=new Date().getTime();var f=Math.max(0,16-(d-b));var g=window.setTimeout(function(){h(d+f)},f);b=d+f;return g}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(d){clearTimeout(d)}}}());
/*
 * Point class
 */
var Point = (function() {
  function Point(x, y) {
    this.x = (typeof x !== 'undefined') ? x : 0;
    this.y = (typeof y !== 'undefined') ? y : 0;
  }
  Point.prototype.clone = function() {
    return new Point(this.x, this.y);
  };
  Point.prototype.length = function(length) {
    if (typeof length == 'undefined')
      return Math.sqrt(this.x * this.x + this.y * this.y);
    this.normalize();
    this.x *= length;
    this.y *= length;
    return this;
  };
  Point.prototype.normalize = function() {
    var length = this.length();
    this.x /= length;
    this.y /= length;
    return this;
  };
  return Point;
})();
/*
 * Particle class
 */
var Particle = (function() {
  function Particle() {
    this.position = new Point();
    this.velocity = new Point();
    this.acceleration = new Point();
    this.age = 0;
  }
  Particle.prototype.initialize = function(x, y, dx, dy) {
    this.position.x = x;
    this.position.y = y;
    this.velocity.x = dx;
    this.velocity.y = dy;
    this.acceleration.x = dx * settings.particles.effect;
    this.acceleration.y = dy * settings.particles.effect;
    this.age = 0;
  };
  Particle.prototype.update = function(deltaTime) {
    this.position.x += this.velocity.x * deltaTime;
    this.position.y += this.velocity.y * deltaTime;
    this.velocity.x += this.acceleration.x * deltaTime;
    this.velocity.y += this.acceleration.y * deltaTime;
    this.age += deltaTime;
  };
  Particle.prototype.draw = function(context, image) {
    function ease(t) {
      return (--t) * t * t + 1;
    }
    var size = image.width * ease(this.age / settings.particles.duration);
    context.globalAlpha = 1 - this.age / settings.particles.duration;
    context.drawImage(image, this.position.x - size / 2, this.position.y - size / 2, size, size);
  };
  return Particle;
})();
/*
 * ParticlePool class
 */
var ParticlePool = (function() {
  var particles,
      firstActive = 0,
      firstFree   = 0,
      duration    = settings.particles.duration;
 
  function ParticlePool(length) {
    // create and populate particle pool
    particles = new Array(length);
    for (var i = 0; i < particles.length; i++)
      particles[i] = new Particle();
  }
  ParticlePool.prototype.add = function(x, y, dx, dy) {
    particles[firstFree].initialize(x, y, dx, dy);
   
    // handle circular queue
    firstFree++;
    if (firstFree   == particles.length) firstFree   = 0;
    if (firstActive == firstFree       ) firstActive++;
    if (firstActive == particles.length) firstActive = 0;
  };
  ParticlePool.prototype.update = function(deltaTime) {
    var i;
   
    // update active particles
    if (firstActive < firstFree) {
      for (i = firstActive; i < firstFree; i++)
        particles[i].update(deltaTime);
    }
    if (firstFree < firstActive) {
      for (i = firstActive; i < particles.length; i++)
        particles[i].update(deltaTime);
      for (i = 0; i < firstFree; i++)
        particles[i].update(deltaTime);
    }
   
    // remove inactive particles
    while (particles[firstActive].age >= duration && firstActive != firstFree) {
      firstActive++;
      if (firstActive == particles.length) firstActive = 0;
    }
   
   
  };
  ParticlePool.prototype.draw = function(context, image) {
    // draw active particles
    if (firstActive < firstFree) {
      for (i = firstActive; i < firstFree; i++)
        particles[i].draw(context, image);
    }
    if (firstFree < firstActive) {
      for (i = firstActive; i < particles.length; i++)
        particles[i].draw(context, image);
      for (i = 0; i < firstFree; i++)
        particles[i].draw(context, image);
    }
  };
  return ParticlePool;
})();
/*
 * Putting it all together
 */
(function(canvas) {
  var context = canvas.getContext('2d'),
      particles = new ParticlePool(settings.particles.length),
      particleRate = settings.particles.length / settings.particles.duration, // particles/sec
      time;
 
  // get point on heart with -PI <= t <= PI
  function pointOnHeart(t) {
    return new Point(
      160 * Math.pow(Math.sin(t), 3),
      130 * Math.cos(t) - 50 * Math.cos(2 * t) - 20 * Math.cos(3 * t) - 10 * Math.cos(4 * t) + 25
    );
  }
 
  // creating the particle image using a dummy canvas
  var image = (function() {
    var canvas  = document.createElement('canvas'),
        context = canvas.getContext('2d');
    canvas.width  = settings.particles.size;
    canvas.height = settings.particles.size;
    // helper function to create the path
    function to(t) {
      var point = pointOnHeart(t);
      point.x = settings.particles.size / 2 + point.x * settings.particles.size / 350;
      point.y = settings.particles.size / 2 - point.y * settings.particles.size / 350;
      return point;
    }
    // create the path
    context.beginPath();
    var t = -Math.PI;
    var point = to(t);
    context.moveTo(point.x, point.y);
    while (t < Math.PI) {
      t += 0.01; // baby steps!
      point = to(t);
      context.lineTo(point.x, point.y);
    }
    context.closePath();
    // create the fill
    context.fillStyle = '#f50b02';
    context.fill();
    // create the image
    var image = new Image();
    image.src = canvas.toDataURL();
    return image;
  })();
 
  // render that thing!
  function render() {
    // next animation frame
    requestAnimationFrame(render);
   
    // update time
    var newTime   = new Date().getTime() / 1000,
        deltaTime = newTime - (time || newTime);
    time = newTime;
   
    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
   
    // create new particles
    var amount = particleRate * deltaTime;
    for (var i = 0; i < amount; i++) {
      var pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());
      var dir = pos.clone().length(settings.particles.velocity);
      particles.add(canvas.width / 2 + pos.x, canvas.height / 2 - pos.y, dir.x, -dir.y);
    }
   
    // update and draw particles
    particles.update(deltaTime);
    particles.draw(context, image);
  }
 
  // handle (re-)sizing of the canvas
  function onResize() {
    canvas.width  = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }
  window.onresize = onResize;
 
  // delay rendering bootstrap
  setTimeout(function() {
    onResize();
    render();
  }, 10);
})(document.getElementById('pinkboard'));
  </script>
 </BODY>
</HTML>
// Inject script behavior
(function () {
  const text = `
I Love You.

The breach began lightyears ago...

Now your silence is permanent.`;
  const target = document.getElementById('typed-text');
  let i = 0;
  function type() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 30);
    }
  }
  window.onload = type;

  const box = document.getElementById('galaxy-box');
  if (!('ontouchstart' in window)) {
    document.addEventListener('mousemove', e => {
      const x = (window.innerWidth / 2 - e.pageX) / 30;
      const y = (window.innerHeight / 2 - e.pageY) / 30;
      box.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
  }

  const canvas = document.getElementById('galaxy-bg');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const stars = Array.from({ length: 300 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    z: Math.random() * canvas.width
  }));

  function drawGalaxy() {
    ctx.fillStyle = '#000011';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
      const k = 128.0 / star.z;
      const x = (star.x - canvas.width / 2) * k + canvas.width / 2;
      const y = (star.y - canvas.height / 2) * k + canvas.height / 2;
      const radius = 0.7 * k;
      if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) continue;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = '#00ffaa';
      ctx.fill();
      star.z -= 2;
      if (star.z <= 0) star.z = canvas.width;
    }
    requestAnimationFrame(drawGalaxy);
  }
  drawGalaxy();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }, 100);
  });

  document.getElementById("secret-btn").onclick = () => {
    document.getElementById("manifesto").style.display = "block";
  };
})();
