//Animation from Left to Right Entry

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

    //loading Screen

    window.addEventListener("load", function () {
      setTimeout(function () {
        document.getElementById("loading-screen").style.display = "none";
      }, 10000); // 10 seconds
    });
    var t = 0;
    var c = document.querySelector("canvas");
    var $ = c.getContext("2d");
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    $.fillStyle = "hsla(0,0%,0%,1)";

    window.addEventListener(
      "resize",
      function () {
        c.width = window.innerWidth;
        c.height = window.innerHeight;
      },
      false
    );

    function draw() {
      $.globalCompositeOperation = "source-over";
      $.fillStyle = "hsla(0,0%,0%,.1)";
      $.fillRect(0, 0, c.width, c.height);
      var foo, i, j, r;
      foo = Math.sin(t) * 2 * Math.PI;
      for (i = 0; i < 400; ++i) {
        r = 400 * Math.sin(i * foo);
        $.globalCompositeOperation = "";
        $.fillStyle = "hsla(" + i + 12 + ",100%, 60%,1)";
        $.beginPath();
        $.arc(
          Math.sin(i) * r + c.width / 2,
          Math.cos(i) * r + c.height / 2,
          1.5,
          0,
          Math.PI * 2
        );
        $.fill();
      }
      t += 0.000005;
      return (t %= 2 * Math.PI);
    }

    function run() {
      window.requestAnimationFrame(run);
      draw();
    }
    run();
  //Jumping Word Effects

const letters = document.querySelectorAll("#loading-screen p span");

let i = 0;
setInterval(function() {
  letters.forEach(function(letter) {
    letter.style.top = Math.sin(i + letter.offsetLeft / 100) * 20 + "px";
    letter.style.left = Math.cos(i + letter.offsetTop / 100) * 20 + "px";
  });
  i += 0.1;
}, 50);
