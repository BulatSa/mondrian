$(function () {
  const descr = document.querySelectorAll(".descr");
  const icons = document.querySelectorAll(".project_info-icon");
  const projectDraw = document.querySelectorAll(".project_draw");
  let projectHover = false;

  function showDescr(e) {
    const descr = this.querySelector(".project_descr");
    let { offsetX: x, offsetY: y } = e;
    descr.classList.add("active");
    descr.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    //console.log(x, y);
  }

  function hideDescr(e) {
    const descr = this.querySelector(".project_descr");
    descr.classList.remove("active");
    descr.style.transform = `translate3d(0, 0, 0)`;
    console.log(e);
  }

  icons.forEach(function (icon) {
    //project.addEventListener("mousemove", showDescr);
    //project.addEventListener("mouseleave", hideDescr);
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
