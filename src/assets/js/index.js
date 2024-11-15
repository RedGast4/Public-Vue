var track = document.getElementById('track');

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else { 
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = ".play";
});
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const hero = document.querySelector('.hero');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    hero.classList.add('active-hero');
})

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    hero.classList.remove('active-hero');
})
$(".button.en_lang").click(function(){
    //alert("Нажата кнопка АНГЛИЙСКИЙ");
    var ruLang = document.getElementsByClassName("ru_lang");
    var enLang = document.getElementsByClassName("en_lang");
    for (i = 0; i < ruLang.length; i++) {
      enLang[i].style.transform = "scale(0)";
    }
});

$(".button.ru_lang").click(function(){
  //alert("Нажата кнопка АНГЛИЙСКИЙ");
    var ruLang = document.getElementsByClassName("ru_lang");
    var enLang = document.getElementsByClassName("en_lang");
    for (i = 0; i < enLang.length; i++) {
    ruLang[i].style.transform = "scale(1)";
    }
});