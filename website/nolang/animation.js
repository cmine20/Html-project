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
    }, 5000); // 5 seconds
  });

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
