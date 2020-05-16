$(function () {
  const descr = document.querySelectorAll(".descr");
  const headphones = document.querySelectorAll(".project_info-headphones");
  const projectDraw = document.querySelectorAll(".project_draw");
  const speechMsg = new SpeechSynthesisUtterance();
  
  speechMsg.lang = 'ru-RU';

  function playInfo() {
    //const voices = window.speechSynthesis.getVoices();
    if (this.classList.contains('play')) {
      // pause
      speechSynthesis.pause();
      this.classList.remove('play');
      this.classList.add('pause');
      return;
    }
    if (this.classList.contains('pause')) {
      // resume
      speechSynthesis.resume();
      this.classList.remove('pause');
      this.classList.add('play');
      setTimeout(function(){

      }, 10000);
      return;
    }

    const speakNext = () => {
      if (arrText.length != 0) {
        arrText.splice(0,1);
        speechMsg.text = arrText[0];
        speechSynthesis.speak(speechMsg);
      } else {
        speechSynthesis.cancel();
        this.classList.remove('play');
      }
    }

    headphones.forEach(function(headphone){
      headphone.classList.remove('pause');
      headphone.classList.remove('play');
    });
    speechSynthesis.cancel();

    this.classList.add('play');
    
    const text = this.parentNode.querySelector(".project_descr").textContent;
    const arrText = text.split('. ');
    speechMsg.text = arrText[0];
    speechMsg.onend = speakNext;
    speechSynthesis.speak(speechMsg);
  }

  headphones.forEach(function (headphone) {
    headphone.addEventListener("click", playInfo);
  });
});

/***********************
 fancybox BEGIN
 ***********************/
$.fancybox.defaults.backFocus = false;
$.fancybox.defaults.autoFocus = false;
$.fancybox.defaults.lang = "ru";
$.fancybox.defaults.i18n = {
  ru: {
    CLOSE: "Закрыть",
    NEXT: "Дальше",
    PREV: "Назад",
    ERROR: "Не удается загрузить. <br/> Попробуйте позднее.",
    PLAY_START: "Начать слайдшоу",
    PLAY_STOP: "Остановить слайдшоу",
    FULL_SCREEN: "На весь экран",
    THUMBS: "Превью",
  },
};

function initFancy() {
  $(".fancy").fancybox({
    buttons: ["close"],
  });
  $(".fancy-modal").fancybox({
    selector: "",
    touch: false,
  });
  $(".fancy-map").fancybox({
    toolbar: false,
    smallBtn: true,
    defaultType: "iframe",
  });
  $(".fancy-video").fancybox({
    toolbar: false,
    smallBtn: true,
    youtube: {
      controls: 1,
      showinfo: 0,
      autoplay: 1,
    },
  });
}

$(function () {
  initFancy();
});
/***********************
 fancybox END
 ***********************/

/***********************
 Прокрутка к секциям BEGIN
 ***********************/
$(function () {
  $(".scrollto").on("click", function () {
    const elementClick = $(this).attr("href");
    const destination = $(elementClick).offset().top;
    $("html,body").stop().animate({ scrollTop: destination }, 1000);
    return false;
  });
});
/***********************
 Прокрутка к секциям END
 ***********************/

/***********************
 Waypoints BEGIN
 ***********************/
$(function () {
  $(".anim").waypoint(
    function () {
      $(this.element).toggleClass("animated");
    },
    {
      offset: "85%",
    }
  );
});
/***********************
 Waypoints END
 ***********************/
