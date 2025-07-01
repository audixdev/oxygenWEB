const dev_name = document.getElementById("name_dev");
if (
  !dev_name ||
  dev_name.textContent.trim() != "audixdev"
) {
  localStorage.clear();
  sessionStorage.clear();
  location.reload();
}

const dateElement = document.getElementById("dateText");
const dateElement2 = document.getElementById("dateText2");

const now = new Date();
const options = { weekday: "short", month: "short", day: "numeric" };
const formatted = now.toLocaleDateString("en-US", options);

dateElement.textContent = formatted;
dateElement2.textContent = formatted;
document.getElementById("dateText3").textContent = formatted;
document.getElementById("dateTextPreview").textContent = formatted;

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  document.getElementById(
    "lockclock"
  ).textContent = `${hours}:${minutes}`;
  document.getElementById(
    "lockclock2"
  ).textContent = `${hours}:${minutes}`;
  document.getElementById(
    "lockclock3"
  ).textContent = `${hours}:${minutes}`;
}
function updateTime2() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  document.getElementById(
    "clock-aod-preview"
  ).textContent = `${hours}:${minutes}`;
  document.getElementById(
    "lock-screen-preview"
  ).textContent = `${hours}:${minutes}`;
  document.getElementById(
    "clock_preview"
  ).textContent = `${hours}:${minutes}`;
}

updateTime();
setInterval(updateTime, 10000);

const boxes = {
  box1: document.getElementById("box1"),
  box2: document.getElementById("box2"),
  box3: document.getElementById("box3"),
  box4: document.getElementById("box4"),
  box5: document.getElementById("box5"),
  box6: document.getElementById("box6"),
  box7: document.getElementById("box7"),
  box8: document.getElementById("box8"),
  box9: document.getElementById("box9"),
  box10: document.getElementById("box10"),
  box11: document.getElementById("box11"),
  box12: document.getElementById("box12"),
  box13: document.getElementById("box13"),
};

boxes[`box1`].classList.add("lock");
boxes[`box2`].classList.add("lock");
boxes[`box3`].classList.add("lock");
boxes[`box4`].classList.add("lock");
boxes[`box5`].classList.add("lock");
boxes[`box6`].classList.add("lock");
boxes[`box7`].classList.add("lock");
boxes[`box8`].classList.add("lock");
boxes[`box9`].classList.add("lock");
boxes[`box10`].classList.add("lock");
boxes[`box11`].classList.add("lock");
document.querySelector(".khayapp").classList.add("lock");

const appopen = {
  box1: document.getElementById("app1"),
  box2: document.getElementById("app2"),
  box3: document.getElementById("app3"),
  box4: document.getElementById("app4main"),
  box5: document.getElementById("app5"),
  box6: document.getElementById("app6"),
  box7: document.getElementById("app7"),
  box8: document.getElementById("app8"),
  box9: document.getElementById("app9"),
  box10: document.getElementById("app10"),
  box11: document.getElementById("app11"),
  box12: document.getElementById("app12"),
  box13: document.getElementById("app13"),
};

const clickables = {
  box1: document.getElementById("clickableBox1"),
  box2: document.getElementById("clickableBox2"),
  box3: document.getElementById("clickableBox3"),
  box4: document.getElementById("clickableBox4"),
  box5: document.getElementById("clickableBox5"),
  box6: document.getElementById("clickableBox6"),
  box7: document.getElementById("clickableBox7"),
  box8: document.getElementById("clickableBox8"),
  box9: document.getElementById("clickableBox9"),
  box10: document.getElementById("clickableBox10"),
  box11: document.getElementById("clickableBox11"),
  box12: document.getElementById("clickableBox12"),
  box13: document.getElementById("clickableBox13"),
};

const thanh = document.getElementById("thanh");
const WallPaper = document.querySelector(".wallpaper");
const allApp = document.getElementById("allApp");
const lp = document.getElementById("lp");
const target = document.getElementById("name_dev");
// document.getElementById("name_dev").textContent = "";

let currentOpeningBtn = null;
let nav = null;
let isMo = false;
let autoHideClickablesTimer = null;
let hideBlur = null;
let closing = false;
let app = null;
let currentSpeed = 0.7;
let currentSpeed6 = 0.6 * currentSpeed;
let currentSpeed5 = 0.5 * currentSpeed;
let currentSpeed4 = 0.4 * currentSpeed;
let currentSpeed4_2 = 0.4 * currentSpeed * currentSpeed;
let currentSpeed3 = 0.3 * currentSpeed;
let currentSpeed2 = 0.2 * currentSpeed;

function hideAllClickables() {
  Object.values(clickables).forEach((el) => {
    el.style.display = "none";
  });
}

function openPopupFromCurrentButton() {
  if (!currentOpeningBtn) return;
  thanh.classList.add("open");
  if (app) app.classList.add("open");
  currentOpeningBtn.style.transition = `all ${currentSpeed5}s cubic-bezier(.26,.72,.33,.89), height ${currentSpeed5}s cubic-bezier(.31,.9,1,1)`;
  if (scale < 1)
    currentOpeningBtn.style.transition = `all ${currentSpeed4}s cubic-bezier(.26,.72,.33,.89), height ${currentSpeed4}s cubic-bezier(.31,.9,1,1)`;
  if (scale < 0.7)
    currentOpeningBtn.style.transition = `all ${currentSpeed3}s cubic-bezier(.26,.72,.33,.89), height ${currentSpeed3}s cubic-bezier(.31,.9,1,1)`;
  allApp.style.transition =
    wallpaper.style.transition = `all calc(0.5s * ${currentSpeed}) cubic-bezier(0.23, 0.55, 0.54, 0.97)`;

  wallpaper.style.filter = "blur(5px)";
  wallpaper.style.scale = `110%`;

  currentOpeningBtn.classList.add("open");
  currentOpeningBtn.classList.add("hien");
  currentOpeningBtn.style.scale = "100%";
  currentOpeningBtn.style.zIndex = "320";

  lp.style.transition = `all ${currentSpeed3}s cubic-bezier(0.2, 0.2, 0.12, 1)`;
  lp.classList.add("open");

  setTimeout(() => {
    currentOpeningBtn.style.transform = `translateX(0%) translateY(0%) scale(1.074)`;
  }, 50);

  clearTimeout(hide_app);
  app.style.display = "flex";
  allApp.classList.add("open");

  const boxId = Object.keys(boxes).find(
    (key) => boxes[key] === currentOpeningBtn
  );
  if (boxId) clickables[boxId].style.display = "none";

  nav = currentOpeningBtn.querySelector(".nav");
  if (nav) {
    nav.style.transition = `all ${currentSpeed3}s`;
    nav.classList.add("open");
  }

  isMo = true;
}

target.innerText += "Ti";
const scale = 1;
let hide_app = null;
function closePopup() {
  if (!currentOpeningBtn) return;
  app.classList.remove("open");
  currentOpeningBtn.style.transition = `all ${currentSpeed4}s, transform ${currentSpeed5}s cubic-bezier(.43,.25,.58,.67), height ${currentSpeed4}s`;
  clearTimeout(autoHideClickablesTimer);
  closing = true;
  setTimeout(() => {
    closing = false;
  }, 300);
  currentOpeningBtn.classList.remove("open");
  currentOpeningBtn.style.scale = `${scale_icon}%`;

  allApp.style.transition = `all ${currentSpeed5}s`;
  wallpaper.style.transition = `all ${currentSpeed5}s cubic-bezier(.35,.04,.69,.94)`;

  wallpaper.style.filter = "blur(0px)";
  wallpaper.style.scale = `100%`;
  currentOpeningBtn.style.zIndex = "5";

  thanh.style.transform = "translateX(-50%)";
  thanh.classList.remove("open");

  lp.style.transition = `all ${currentSpeed5}s cubic-bezier(0.2, 0.2, 0.12, 1)`;
  lp.classList.remove("open");

  hide_app = setTimeout(() => {
    app.style.display = "none";
  }, currentSpeed5 * 1000);

  allApp.classList.remove("open");

  if (nav) {
    nav.style.transition = `all ${currentSpeed3}s`;
    nav.classList.remove("open");
  }
  isMo = false;

  Object.values(clickables).forEach((el) => {
    el.style.display = "block";
  });
  currentOpeningBtn.style.transform = `translateX(0%) translateY(0%) scale(1)`;
  currentOpeningBtn.classList.remove("hien");
  currentOpeningBtn = null;
  scale = 1;
}

target.innerText += "kT";

function updateTransform(y, x) {
  if (y < 0) y = 0;
  if (y > 170) y = 170;

  const easedY = Math.sqrt(y);
  const maxEasedY = Math.sqrt(550);
  const ratio = easedY / maxEasedY;
  const displayY = ratio * 170;
  if (displayY > 100) displayY = 100;
  const scale = 1 - y / 200 + 0.074;

  currentOpeningBtn.style.transition = `all 0.1s`;
  currentOpeningBtn.style.transform = `translateX(${x}px) translateY(${-displayY}px) scale(${scale})`;

  thanh.style.transition = "none";
  thanh.style.transform = `translateX(calc(-50% + ${x}px)) translateY(${-y}px)`;
}

function resetpop() {
  thanh.classList.add("open");
  currentOpeningBtn.style.transition = `all ${currentSpeed3}s`;
  currentOpeningBtn.style.transform = `translateX(0%) translateY(0%) scale(1.074)`;
  thanh.style.transform = `translateX(-50%) translateY(0%) scale(1)`;
}

let startY = 0;
let startX = 0;
let deltaY = 0;
let deltaX = 0;
let dragging = false;

target.innerText += "ok";

thanh.addEventListener("touchstart", (e) => {
  if (!isMo) return;
  startY = e.touches[0].clientY;
  startX = e.touches[0].clientX;

  deltaY = 0;
  deltaX = 0;


  clearTimeout(hideBlur);
  lp.style.transition = `all 0s`;
  lp.classList.add("open");
  hideBlur = null;


  if (currentOpeningBtn === boxes["box4"]) {
    theme_option.style.pointerEvents = "auto";
    animationInSetting.style.pointerEvents = "auto";
    document.getElementById("scaling-box").style.animation = "none";

    AboutInSetting.style.pointerEvents = "auto";
    theme_option.style.pointerEvents = "auto";
    AboutInSetting.style.pointerEvents = "auto";
    animationInSetting.style.pointerEvents = "auto";

    hidePopup_open_close(app4);
    hidePopup_open_close(credits);
    hidePopup_open_close(app4_vesion);
    hidePopup_open_close(app4animation);
    hidePopup_open_close(app4_theme);
    hidePopup_open_close(app4_home);
    hidePopup_open_close(wallpaper_option);
    hidePopup_open_close(aod_option);
    hidePopup_open_close(lock_option);
    hidePopup_open_close(app4_finger);
    hidePopup_open_close(app4language);
  }
});

thanh.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
    if (!isMo) return;
    deltaY = startY - e.touches[0].clientY;
    deltaX = e.touches[0].clientX - startX;
    updateTransform(deltaY, deltaX);
  },
  {
    passive: false,
  }
);

target.innerText += ": ";

thanh.addEventListener("touchend", () => {
  if (deltaY > 40) closePopup();
  else resetpop();
  deltaY = 0;
  deltaX = 0;
});

thanh.addEventListener("mousedown", (e) => {
  deltaY = 0;
  deltaX = 0;
  startY = 0;
  startX = 0;

  if (!isMo) return;
  dragging = true;
  startY = e.clientY;
  startX = e.clientX;


  clearTimeout(hideBlur);
  lp.style.transition = `all 0s`;
  lp.classList.add("open");
  hideBlur = null;

  if (currentOpeningBtn === boxes["box4"]) {
    theme_option.style.pointerEvents = "auto";
    animationInSetting.style.pointerEvents = "auto";
    document.getElementById("scaling-box").style.animation = "none";

    AboutInSetting.style.pointerEvents = "auto";
    theme_option.style.pointerEvents = "auto";
    AboutInSetting.style.pointerEvents = "auto";
    animationInSetting.style.pointerEvents = "auto";

    hidePopup_open_close(app4);
    hidePopup_open_close(credits);
    hidePopup_open_close(app4_vesion);
    hidePopup_open_close(app4animation);
    hidePopup_open_close(app4_theme);
    hidePopup_open_close(app4_home);
    hidePopup_open_close(wallpaper_option);
    hidePopup_open_close(aod_option);
    hidePopup_open_close(lock_option);
    hidePopup_open_close(app4_finger);
    hidePopup_open_close(app4language);
  }
});

target.innerText += "@su";

window.addEventListener("mousemove", (e) => {
  if (!dragging || !isMo) return;
  deltaY = startY - e.clientY;
  deltaX = e.clientX - startX;
  updateTransform(deltaY, deltaX);
});

window.addEventListener("mouseup", () => {
  if (!dragging || !isMo) return;
  dragging = false;
  if (deltaY > 40) closePopup();
  else resetpop();
});

[
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
].forEach((num) => {
  document
    .getElementById(`clickableBox${num}`)
    .addEventListener("click", () => {
      clearTimeout(autoHideClickablesTimer);
      if (currentOpeningBtn) {
        currentOpeningBtn.style.transition = `all ${currentSpeed4} cubic-bezier(.64,.38,.33,.89), height ${currentSpeed4}s`;
        currentOpeningBtn.classList.remove("open");
        currentOpeningBtn.classList.remove("hien");
        currentOpeningBtn.style.scale = `${scale_icon}%`;

        Object.values(clickables).forEach((el) => {
          el.style.display = "block";
        });

        if (hideBlur) {
          clearTimeout(hideBlur);
          lp.style.transition = `all 0s`;
          lp.classList.add("open");
          hideBlur = null;
        }

        app.style.display = "none";
        app.classList.remove("open");
        app = appopen[`box${num}`];

        //lp.style.transition = "all 0.15s";
        //lp.classList.remove("open");

        if (nav) nav.classList.remove("open");

        currentOpeningBtn.style.transform = `scale(1)`;
        currentOpeningBtn.style.zIndex = "12";

        //lp.style.transition = "all 0.3s";
        //WallPaper.classList.remove("open");

        currentOpeningBtn = boxes[`box${num}`];

        openPopupFromCurrentButton();
        autoHideClickablesTimer = setTimeout(() => {
          if (isMo) hideAllClickables();
        }, 500 * currentSpeed);
        hideBlur = setTimeout(() => {
          lp.style.transition = `all 0s`;
          lp.classList.remove("open");
          hideBlur = null;
        }, 500 * currentSpeed);
      } else {
        currentOpeningBtn = boxes[`box${num}`];
        currentOpeningBtn.style.transition = `all ${currentSpeed5} cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
        app = appopen[`box${num}`];
        app.style.display = "none";
        openPopupFromCurrentButton();
        autoHideClickablesTimer = setTimeout(() => {
          if (isMo) hideAllClickables();
        }, 500 * currentSpeed);
        hideBlur = setTimeout(() => {
          lp.style.transition = `all 0s`;
          lp.classList.remove("open");
          hideBlur = null;
        }, 500 * currentSpeed);
      }
    });
});

target.innerText += "ngs";

// DOM elements
const lockscreen = document.getElementById("lockscreen");
const wallpaper = document.querySelector(".wallpaper");
const unlockBtn = document.getElementById("unlock-btn");
const powerbtn = document.querySelector(".power-button");
const fingerprint = document.querySelector(".lock-fingerprint");
const lockclock = document.querySelector(".lock-clock");
target.innerText += "amt";
const dateText = document.getElementById("dateText");
const clock = document.getElementById("lockclock2");
const battery3 = document.querySelector(".battery-num");
const battery2 = document.querySelector(".battery-small");
const battery1 = document.querySelector(".status-battery");
const phone = document.querySelector(".phone");

let ison = true;
let islock = true;
allApp.style.transition = "all 0s";
allApp.classList.add("lock");
hideAllClickables();

//lock();
clock.classList.add("hien");
let wallpaper_lock_off_height = 50; //%
let wallpaper_lock_off_scale = 40; //%
let wallpaper_lock_off_borderRadius = 0; //px
let wallpaper_lock_off_opacity = 1;
let wallpaper_lock_off_transform = "translateY(0px)";

let wallpaper_lock_height = 70; //%
let wallpaper_lock_scale = 80; //%
let wallpaper_lock_borderRadius = 20; //px
let wallpaper_lock_opacity = 1;
let wallpaper_lock_transform = "translateY(250px)";

let lockscreen_style_opacity = 1;

function lock() {
  if (!islock) {
    finger_print.stop();
    finger_print.play();
  }
  islock = true;
  dongnotification();

  lockscreen.style.transition = "all 0.3s";
  lockscreen.style.opacity = lockscreen_style_opacity;
  lockscreen.style.pointerEvents = "auto";
  lockscreen.style.scale = 1;

  //wallpaper.classList.add("open");

  allApp.style.transition = "all 0s";
  allApp.classList.add("lock");

  hideAllClickables();
  clock.classList.remove("hien");
  document.querySelector(
    ".khayapp"
  ).style.transition = `all 0s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
  document.querySelector(".khayapp").classList.add("lock");

  boxes["box1"].style.transform =
    "translateX(-40px) translateY(250px) scale(1.4)";
  boxes["box1"].style.opacity = "0.2";
  boxes["box1"].style.transition = "all 0s cubic-bezier(.07,1.33,1,1)";

  boxes["box2"].style.transform =
    "translateX(-13px) translateY(250px) scale(1.4)";
  boxes["box2"].style.opacity = "0.2";
  boxes["box2"].style.transition = "all 0s cubic-bezier(.07,1.33,1,1)";

  boxes["box3"].style.transform =
    "translateX(13px) translateY(250px) scale(1.4)";
  boxes["box3"].style.opacity = "0.2";
  boxes["box3"].style.transition = "all 0s cubic-bezier(.07,1.33,1,1)";

  boxes["box4"].style.transform =
    "translateX(40px) translateY(250px) scale(1.4)";
  boxes["box4"].style.opacity = "0.2";
  boxes["box4"].style.transition = "all 0s cubic-bezier(.07,1.33,1,1)";

  boxes["box5"].style.transform =
    "translateX(100px) translateY(190px) scale(1.5)";
  boxes["box5"].style.opacity = "0.2";
  boxes["box5"].style.transition = "all 0s cubic-bezier(.07,1.33,1,1)";

  boxes["box6"].style.transform =
    "translateX(40px) translateY(170px) scale(1.3)";
  boxes["box6"].style.opacity = "0.2";
  boxes["box6"].style.transition = "all 0s cubic-bezier(.07,1.33,1,1)";

  boxes["box7"].style.transform =
    "translateX(-40px) translateY(170px) scale(1.3)";
  boxes["box7"].style.opacity = "0.2";
  boxes["box7"].style.transition = "all 0s cubic-bezier(.07,1.33,1,1)";

  boxes["box8"].style.transform =
    "translateX(-100px) translateY(190px) scale(1.5)";
  boxes["box8"].style.opacity = "0.2";
  boxes["box8"].style.transition = "all 0s cubic-bezier(.07,1.33,1,1)";

  boxes["box9"].style.transform =
    "translateX(-70px) translateY(20px) scale(1.7)";
  boxes["box9"].style.opacity = "0.2";
  boxes["box9"].style.transition = "all 0s cubic-bezier(.07,1.33,1,1)";

  boxes["box10"].style.transform =
    "translateX(70px) translateY(20px) scale(1.7)";
  boxes["box10"].style.opacity = "0.2";
  boxes["box10"].style.transition = "all 0s cubic-bezier(.07,1.33,1,1)";

  boxes["box11"].style.transform =
    "translateX(0px) translateY(-200px) scale(1.4)";
  boxes["box11"].style.opacity = "0.2";
  boxes["box11"].style.transition = "all 0s cubic-bezier(.07,1.33,1,1)";
}

function unlock() {
  thanhS1.style.pointerEvents = "auto";

  animation.stop();
  animation.play();
  islock = false;
  ison = true;

  phone.style.background = phone_lock_background;
  lockscreen.style.opacity = 0;
  lockscreen.style.transition = "none";
  lockscreen.style.scale = 0.9;
  lockscreen.style.pointerEvents = "none";

  wallpaper.style.height = "100%";
  wallpaper.style.scale = "100%";
  wallpaper.style.borderRadius = "50px";
  wallpaper.style.opacity = 1;
  wallpaper.style.transform = "translateY(0px)";

  lockclock.style.transform = "none";
  lockclock.style.filter = "brightness(1)";
  dateText.style.filter = "brightness(1)";
  dateText.style.transform =
    "translateY(0px) translateX(-50%) scale(0.95)";

  allApp.style.transition = `all calc(1s * ${currentSpeed}) cubic-bezier(.12,1.43,.51,1.01)`;
  allApp.classList.remove("lock");

  battery2.classList.remove("close");
  battery1.classList.remove("close");
  battery3.classList.remove("close");
  battery3.style.opacity =
    battery2.style.opacity =
    battery1.style.opacity =
    1;

  clock.classList.add("hien");

  powerbtn.classList.add("hidden");
  setTimeout(() => {
    Object.values(clickables).forEach((el) => {
      el.style.display = "flex";
    });
    powerbtn.classList.remove("hidden");
  }, 440);

  setTimeout(() => {
    boxes["box11"].style.transform =
      "translateX(0px) translateY(0px) scale(1)";
    boxes["box11"].style.opacity = "1";
    boxes[
      "box11"
    ].style.transition = `all ${currentSpeed3}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
    setTimeout(() => {
      boxes["box9"].style.transform =
        "translateX(0px) translateY(0px) scale(1)";
      boxes["box9"].style.opacity = "1";
      boxes[
        "box9"
      ].style.transition = `all calc(0.35s * ${currentSpeed}) cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
      boxes["box10"].style.transform =
        "translateX(0px) translateY(0px) scale(1)";
      boxes["box10"].style.opacity = "1";
      boxes[
        "box10"
      ].style.transition = `all calc(0.35s * ${currentSpeed}) cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
      setTimeout(() => {
        boxes["box6"].style.transform =
          "translateX(0px) translateY(0px) scale(1)";
        boxes["box6"].style.opacity = "1";
        boxes[
          "box6"
        ].style.transition = `all ${currentSpeed4}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;

        boxes["box7"].style.transform =
          "translateX(0px) translateY(0px) scale(1)";
        boxes["box7"].style.opacity = "1";
        boxes[
          "box7"
        ].style.transition = `all ${currentSpeed4}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
        setTimeout(() => {
          boxes["box5"].style.transform =
            "translateX(0px) translateY(0px) scale(1)";
          boxes["box5"].style.opacity = "1";
          boxes[
            "box5"
          ].style.transition = `all calc(0.45s * ${currentSpeed}) cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
          boxes["box8"].style.transform =
            "translateX(0px) translateY(0px) scale(1)";
          boxes["box8"].style.opacity = "1";
          boxes[
            "box8"
          ].style.transition = `all calc(0.45s * ${currentSpeed}) cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
          setTimeout(() => {
            boxes[`box1`].style.transform =
              "translateX(0px) translateY(0px) scale(1)";
            boxes[`box1`].style.opacity = "1";
            boxes[
              `box1`
            ].style.transition = `all ${currentSpeed5}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;

            boxes[`box2`].style.transform =
              "translateX(0px) translateY(0px) scale(1)";
            boxes[`box2`].style.opacity = "1";
            boxes[
              `box2`
            ].style.transition = `all ${currentSpeed5}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;

            boxes[`box3`].style.transform =
              "translateX(0px) translateY(0px) scale(1)";
            boxes[`box3`].style.opacity = "1";
            boxes[
              `box3`
            ].style.transition = `all ${currentSpeed5}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;

            boxes[`box4`].style.transform =
              "translateX(0px) translateY(0px) scale(1)";
            boxes[`box4`].style.opacity = "1";
            boxes[
              `box4`
            ].style.transition = `all ${currentSpeed5}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
            document.querySelector(
              ".khayapp"
            ).style.transition = `all ${currentSpeed5}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
            document.querySelector(".khayapp").classList.remove("lock");
          }, 30);
        }, 30);
      }, 30);
    }, 30);
  }, 0);
}

target.innerText += "ech";

unlockBtn.addEventListener("touchstart", () => {
  unlock();
});
unlockBtn.addEventListener("mousedown", () => {
  unlock();
});

let phone_lock_off_background = "#000000";
let phone_lock_background =
  "linear-gradient(to bottom, rgb(0, 53, 53), rgb(0, 141, 141))";
wallpaper.style.height = `${wallpaper_lock_height}%`;
wallpaper.style.scale = `${wallpaper_lock_scale}%`;
wallpaper.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
wallpaper.style.opacity = 1;

let lockclock_style_transform = "scale(0.95) translateY(160px)";
let dateText_style_transform =
  "translateY(150px) translateX(-50%) scale(0.95)";

wallpaper.style.transform = "translateY(250px)";
phone.style.background = phone_lock_background;
powerbtn.addEventListener("click", () => {
  lock();
  if (ison) {
    battery3.style.transition =
      battery2.style.transition =
      battery1.style.transition =
      dateText.style.transition =
      lockclock.style.transition =
      wallpaper.style.transition =
      `all calc(0.5s * ${currentSpeed}) cubic-bezier(0.23, 0.55, 0.54, 0.97)`;

    battery3.style.opacity =
      battery2.style.opacity =
      battery1.style.opacity =
      lockscreen.style.opacity =
      lockscreen_style_opacity;

    wallpaper.style.transition =
      "all 0.4s cubic-bezier(0.23, 0.55, 0.54, 0.97)";
    wallpaper.style.filter = "blur(0px)";
    wallpaper.style.height = `${wallpaper_lock_off_height}%`;
    wallpaper.style.scale = `${wallpaper_lock_off_scale}%`;
    wallpaper.style.borderRadius = `${wallpaper_lock_off_borderRadius}px`;
    wallpaper.style.opacity = `${wallpaper_lock_off_opacity}`;

    wallpaper.style.transform = wallpaper_lock_off_transform;
    phone.style.background = phone_lock_off_background;

    ison = false;
    lockclock.style.transform = lockclock_style_transform;
    lockclock.style.filter = "brightness(3)";
    dateText.style.transform = dateText_style_transform;
    dateText.style.filter = "brightness(3)";

    battery2.classList.add("close");
    battery1.classList.add("close");
    battery3.classList.add("close");
    thanhS1.style.pointerEvents = "none";
    closePopup_noanim();
  } else {
    battery3.style.opacity =
      battery2.style.opacity =
      battery1.style.opacity =
      lockscreen.style.opacity =
      1;

    wallpaper.style.transition =
      "all 0.4s cubic-bezier(0.23, 0.55, 0.54, 0.97)";
    wallpaper.style.height = `${wallpaper_lock_height}%`;
    wallpaper.style.scale = `${wallpaper_lock_scale}%`;
    wallpaper.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
    wallpaper.style.opacity = 1;

    wallpaper.style.transform = wallpaper_lock_transform;
    phone.style.background = phone_lock_background;

    ison = true;
    lockclock.style.transform = "none";
    lockclock.style.filter = "brightness(1)";
    dateText.style.filter = "brightness(1)";
    dateText.style.transform =
      "translateY(0px) translateX(-50%) scale(0.95)";

    battery2.classList.remove("close");
    battery1.classList.remove("close");
    battery3.classList.remove("close");
    thanhS1.style.pointerEvents = "auto";
  }
});

target.innerText += " -";

lockscreen.addEventListener("click", () => {
  battery3.style.opacity =
    battery2.style.opacity =
    battery1.style.opacity =
    lockscreen.style.opacity =
    1;
  battery2.classList.remove("close");
  battery1.classList.remove("close");
  battery3.classList.remove("close");

  wallpaper.style.height = `${wallpaper_lock_height}%`;
  wallpaper.style.scale = `${wallpaper_lock_scale}%`;
  wallpaper.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
  wallpaper.style.opacity = 1;

  wallpaper.style.transform = wallpaper_lock_transform;
  phone.style.background = phone_lock_background;

  ison = true;
  lockclock.style.transform = "none";
  lockclock.style.filter = "brightness(1)";
  dateText.style.filter = "brightness(1)";
  dateText.style.transform =
    "translateY(0px) translateX(-50%) scale(0.95)";
  thanhS1.style.pointerEvents = "auto";
});

// in setting
let duration = 1.7 * currentSpeed;

const AboutInSetting = document.getElementById("about_setting");
const animationInSetting = document.getElementById("animation_setting");
const app4animation = document.getElementById("app4animation");
const khaysetting1_2 = document.getElementById("khaysetting1-2");
const credits = document.getElementById("app4credits");
const back7 = document.getElementById("back_to_setting7");

const back = document.getElementById("back_to_setting");
const back2 = document.getElementById("back_to_setting2");
const selectSpeed = document.querySelector(".select-speed-wrapper");

const app4 = document.getElementById("app4");
const app4main = document.getElementById("app4main");

const app4_theme = document.getElementById("app4theme");
const theme_option = document.getElementById("theme_setting");
const back3 = document.getElementById("back_to_setting3");

const wallpaper_btn = document.getElementById("wallpaper-btn");
const wallpaper_option = document.getElementById("app4wallpaper");
const back4 = document.getElementById("back_to_setting4");

const aod_option = document.getElementById("app4aod");
const aod_btn = document.getElementById("aod-btn");
const back5 = document.getElementById("back_to_setting5");

const lock_btn = document.getElementById("lock-btn");
const back6 = document.getElementById("back_to_setting6");
target.innerText += " ga";
const lock_option = document.getElementById("app4lock");
const wallpaper_btn2 = document.querySelector(".wallpaper-btn-2");

const home_btn = document.getElementById("home-btn");
const app4_home = document.getElementById("app4home");
const back8 = document.getElementById("back_to_setting8");

const finger = document.getElementById("finger-btn");
const app4_finger = document.getElementById("app4finger");
const back9 = document.getElementById("back_to_setting9");

const vesion_setting = document.querySelector(".khaysetting1-1");
const app4_vesion = document.getElementById("app4vesion");
const back10 = document.getElementById("back_to_setting10");

const language_btn = document.querySelector(".khaysetting5");
const app4_language = document.getElementById("app4language");
const back11 = document.getElementById("back_to_setting11");

const hideTimeouts_open_close = {};

function showPopup_open_close(target) {
  const el =
    typeof target === "string" ? document.getElementById(target) : target;
  if (!el) return;

  const id = el.id;

  // Nếu đang ẩn dở, huỷ setTimeout ẩn
  if (hideTimeouts_open_close[id]) {
    clearTimeout(hideTimeouts_open_close[id]);
    hideTimeouts_open_close[id] = null;
  }

  // Tránh hiển thị lại nếu đã hiển thị rồi
  if (!el.classList.contains("open")) {
    el.style.display = "flex";

    // Bắt đầu animation
    requestAnimationFrame(() => {
      el.classList.remove("close");
      el.classList.add("open");
    });
  }
}

target.innerText += "lax";

function hidePopup_open_close(target) {
  const el =
    typeof target === "string" ? document.getElementById(target) : target;
  if (!el) return;

  const id = el.id;

  el.classList.remove("open");

  hideTimeouts_open_close[id] = setTimeout(() => {
    el.style.display = "none";
    hideTimeouts_open_close[id] = null;
  }, 500);
}

function hidePopup_open_close(target) {
  const el =
    typeof target === "string" ? document.getElementById(target) : target;
  if (!el) return;

  const id = el.id;

  el.classList.remove("open");

  hideTimeouts_open_close[id] = setTimeout(() => {
    el.style.display = "none";
    hideTimeouts_open_close[id] = null;
  }, 500);
}

//about option
AboutInSetting.addEventListener("click", () => {
  showPopup_open_close(app4);

  theme_option.style.pointerEvents = "none";
  animationInSetting.style.pointerEvents = "none";
});
back.addEventListener("click", () => {
  hidePopup_open_close(app4);

  theme_option.style.pointerEvents = "auto";
  animationInSetting.style.pointerEvents = "auto";
});
khaysetting1_2.addEventListener("click", () => {
  showPopup_open_close(credits);
});
back7.addEventListener("click", () => {
  hidePopup_open_close(credits);
});

//animation option
animationInSetting.addEventListener("click", () => {
  showPopup_open_close(app4animation);
  document.getElementById(
    "scaling-box"
  ).style.animation = `scaleUpDown ${duration}s ease-out infinite`;

  AboutInSetting.style.pointerEvents = "none";
  theme_option.style.pointerEvents = "none";
});
back2.addEventListener("click", () => {
  hidePopup_open_close(app4animation);
  document.getElementById("scaling-box").style.animation = "none";

  AboutInSetting.style.pointerEvents = "auto";
  theme_option.style.pointerEvents = "auto";
});

language_btn.addEventListener("click", () => {
  showPopup_open_close(app4_language);

  AboutInSetting.style.pointerEvents = "none";
  theme_option.style.pointerEvents = "none";
});
back11.addEventListener("click", () => {
  hidePopup_open_close(app4_language);

  AboutInSetting.style.pointerEvents = "auto";
  theme_option.style.pointerEvents = "auto";
});

let blur_app = 0;
document.getElementById("blurApp").addEventListener("click", function () {
  this.classList.toggle("active");
  blur_app = this.classList.contains("active") ? 1 : 0;

  if (blur_app) {
    lp.style.filter = "blur(20px)";
    localStorage.setItem("blur_App_saved", blur_app);
  } else {
    lp.style.filter = "blur(0px)";
    localStorage.setItem("blur_App_saved", blur_app);
  }
});

//theme option
theme_option.addEventListener("click", () => {
  showPopup_open_close(app4_theme);

  AboutInSetting.style.pointerEvents = "none";
  animationInSetting.style.pointerEvents = "none";
  updateTime2();
});
back3.addEventListener("click", () => {
  hidePopup_open_close("app4theme");
  AboutInSetting.style.pointerEvents = "auto";
  animationInSetting.style.pointerEvents = "auto";
});

wallpaper_btn.addEventListener("click", () => {
  showPopup_open_close(wallpaper_option);
});
wallpaper_btn2.addEventListener("click", () => {
  showPopup_open_close(wallpaper_option);
});
back4.addEventListener("click", () => {
  hidePopup_open_close(wallpaper_option);
});

const buttons = document.querySelectorAll(".img-button");
const wallpaper_preview = document.querySelector(".wallpaper-preview");
const wallpaper_preview2 = document.querySelector(".wallpaper-preview2");
const addBtn = document.getElementById("addBtn");

function setActive(btn, imageUrl) {
  wallpaper.style.backgroundImage = `url(${imageUrl})`;
  wallpaper_preview.style.backgroundImage = `url(${imageUrl})`;
  wallpaper_preview2.style.backgroundImage = `url(${imageUrl})`;
  wallPaper2.style.backgroundImage = `url(${imageUrl})`;

  localStorage.setItem("savedWallpaper", imageUrl);
  buttons.forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
}

buttons.forEach((btn) => {
  if (btn !== addBtn) {
    btn.addEventListener("click", () => {
      const img = btn.getAttribute("data-img");
      setActive(btn, img);
    });
  }
});

addBtn.addEventListener("click", () => {
  fileInput.value = "";
  fileInput.click();
});

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const dataUrl = e.target.result;
      setActive(addBtn, dataUrl);
      addBtn.setAttribute("data-img", dataUrl);
    };
    reader.readAsDataURL(file);
  } else {
    alert("Vui lòng chọn ảnh hợp lệ.");
  }
});

// Mặc định chọn ảnh đầu tiên
buttons[0].click();

aod_btn.addEventListener("click", () => {
  showPopup_open_close(aod_option);
});
back5.addEventListener("click", () => {
  hidePopup_open_close(aod_option);
});

let always_on_displays = 1;
document
  .getElementById("Alway-on-displays")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    always_on_displays = this.classList.contains("active") ? 1 : 0;

    localStorage.setItem("always_on_displays_saved", always_on_displays);

    if (always_on_displays) {
      document.getElementById("setting-item-hide-wall").style.filter =
        " brightness(1)";
      document.getElementById(
        "setting-item-hide-wall"
      ).style.pointerEvents = "auto";

      lockscreen_style_opacity = 1;
      hide_wallpaper = 0;

      wallpaper_lock_off_opacity = 1;
      wallpaper_lock_off_height = 50;
      wallpaper_lock_off_scale = 40;
      wallpaper_lock_off_borderRadius = 0;
      wallpaper_lock_off_transform = "translateY(0px)";

      lockclock_style_transform = "scale(0.95) translateY(160px)";
      dateText_style_transform =
        "translateY(150px) translateX(-50%) scale(0.95)";

      localStorage.removeItem("always_on_displays_saved");
      localStorage.removeItem("hide_wallpaper_saved");
    } else {
      document.getElementById("setting-item-hide-wall").style.filter =
        " brightness(0.7)";
      document.getElementById(
        "setting-item-hide-wall"
      ).style.pointerEvents = "none";

      document
        .getElementById("Hide-wallPaper")
        .classList.remove("active");
      hide_wallpaper = 1;
      lockscreen_style_opacity = 0;

      wallpaper_lock_off_opacity = 0;
      wallpaper_lock_off_height = wallpaper_lock_height;
      wallpaper_lock_off_scale = wallpaper_lock_scale;
      wallpaper_lock_off_borderRadius = wallpaper_lock_borderRadius;
      wallpaper_lock_off_transform = wallpaper_lock_transform;

      dateText_style_transform =
        "translateX(-50%) scale(0.9) translateY(10px)";
      lockclock_style_transform = "scale(0.95) translateY(10px)";
    }
  });

let hide_wallpaper = 0;
document
  .getElementById("Hide-wallPaper")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    hide_wallpaper = this.classList.contains("active") ? 1 : 0;

    localStorage.setItem("hide_wallpaper_saved", hide_wallpaper);
    if (hide_wallpaper) {
      wallpaper_lock_off_opacity = 0;
      wallpaper_lock_off_height = wallpaper_lock_height;
      wallpaper_lock_off_scale = wallpaper_lock_scale;
      wallpaper_lock_off_borderRadius = wallpaper_lock_borderRadius;
      wallpaper_lock_off_transform = wallpaper_lock_transform;

      dateText_style_transform =
        "translateX(-50%) scale(0.9) translateY(10px)";
      lockclock_style_transform = "scale(0.95) translateY(10px)";
    } else {
      wallpaper_lock_off_opacity = 1;
      wallpaper_lock_off_height = 50;
      wallpaper_lock_off_scale = 40;
      wallpaper_lock_off_borderRadius = 0;
      wallpaper_lock_off_transform = "translateY(0px)";

      lockclock_style_transform = "scale(0.95) translateY(160px)";
      dateText_style_transform =
        "translateY(150px) translateX(-50%) scale(0.95)";

      localStorage.removeItem("hide_wallpaper_saved");
    }
  });

//lock screen option
lock_btn.addEventListener("click", () => {
  showPopup_open_close(lock_option);
});
back6.addEventListener("click", () => {
  hidePopup_open_close(lock_option);
});
const clock_preview = document.getElementById("clock_preview");
const colorCircles = document.querySelectorAll(".color-circle");
const customColorBtn = document.getElementById("customColor");
const colorPicker = document.getElementById("colorPicker");
const sizeSlider = document.getElementById("sizeSlider");
target.innerText += "yA";
const date_preview = document.getElementById("dateTextPreview");

colorCircles.forEach((circle) => {
  circle.addEventListener("click", () => {
    const color = circle.getAttribute("data-color");
    if (color) {
      clock_preview.style.color = color;
      lockclock.style.color = color;
      dateText.style.color = color;
      date_preview.style.color = color;

      localStorage.setItem("color_lock_saved", color);
    }
  });
});

customColorBtn.addEventListener("click", () => {
  colorPicker.click();
});

colorPicker.addEventListener("input", () => {
  clock_preview.style.color = colorPicker.value;
  lockclock.style.color = colorPicker.value;
  dateText.style.color = colorPicker.value;
  date_preview.style.color = colorPicker.value;
});

sizeSlider.addEventListener("input", () => {
  clock_preview.style.fontSize = `${sizeSlider.value}px`;
  lockclock.style.fontSize = `${sizeSlider.value}px`;
  //date_preview.style.fontSize = `calc(${sizeSlider.value}px / 5)`;
  //dateText.style.fontSize = `calc(${sizeSlider.value}px / 5)`;
});

const wallPaper2 = document.querySelector(".wallpaper2");
document.getElementById("btn1").addEventListener("click", () => {
  wallpaper_lock_height = 70; //%
  wallpaper_lock_scale = 80; //%
  wallpaper_lock_borderRadius = 20; //px
  wallpaper_lock_opacity = 1;
  wallpaper_lock_transform = "translateY(250px)";
  document.getElementById("btn1").style.border = "2px solid aqua";
  document.getElementById("btn1").style.boxShadow =
    "0 0 10px rgba(0, 255, 255, 0.5)";
  document.getElementById("btn2").style.border = "2px solid #ffffff";
  document.getElementById("btn2").style.boxShadow = "none";

  wallpaper2.style.height = `${wallpaper_lock_height}%`;
  wallpaper2.style.scale = `${wallpaper_lock_scale}%`;
  wallpaper2.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
  wallpaper2.style.opacity = 1;
  wallpaper2.style.transform = wallpaper_lock_transform;

  if (hide_wallpaper) {
    wallpaper_lock_off_opacity = 0;
    wallpaper_lock_off_height = wallpaper_lock_height;
    wallpaper_lock_off_scale = wallpaper_lock_scale;
    wallpaper_lock_off_borderRadius = wallpaper_lock_borderRadius;
    wallpaper_lock_off_transform = wallpaper_lock_transform;
  }

  localStorage.setItem("btn1_2_saved", "1");
});
document.getElementById("btn2").addEventListener("click", () => {
  wallpaper_lock_height = 100; //%
  wallpaper_lock_scale = 100; //%
  wallpaper_lock_borderRadius = 50; //px
  wallpaper_lock_opacity = 1;
  wallpaper_lock_transform = "translateY(0px)";
  document.getElementById("btn2").style.border = "2px solid aqua";
  document.getElementById("btn2").style.boxShadow =
    "0 0 10px rgba(0, 255, 255, 0.5)";
  document.getElementById("btn1").style.border = "2px solid #ffffff";
  document.getElementById("btn1").style.boxShadow = "none";

  wallpaper2.style.height = `${wallpaper_lock_height}%`;
  wallpaper2.style.scale = `${wallpaper_lock_scale}%`;
  wallpaper2.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
  wallpaper2.style.opacity = 1;
  wallpaper2.style.transform = wallpaper_lock_transform;

  if (hide_wallpaper) {
    wallpaper_lock_off_opacity = 0;
    wallpaper_lock_off_height = wallpaper_lock_height;
    wallpaper_lock_off_scale = wallpaper_lock_scale;
    wallpaper_lock_off_borderRadius = wallpaper_lock_borderRadius;
    wallpaper_lock_off_transform = wallpaper_lock_transform;
  }

  localStorage.setItem("btn1_2_saved", "0");
});

target.innerText += "15";

home_btn.addEventListener("click", () => {
  showPopup_open_close(app4_home);
});
back8.addEventListener("click", () => {
  hidePopup_open_close(app4_home);
});
let scale_icon = 100; // Biến mặc định ban đầu là 120

document.addEventListener("DOMContentLoaded", () => {
  const buttons_size = document.querySelectorAll(".scale-button");
  const acctive_button_size = document.querySelector(
    '.scale-button[data-scale="120"]'
  );

  // Đảm bảo nút 120% được chọn mặc định khi tải trang
  if (acctive_button_size) {
    acctive_button_size.classList.add("active");
  }

  buttons_size.forEach((button2) => {
    button2.addEventListener("click", function () {
      buttons_size.forEach((btn) => btn.classList.remove("active"));

      this.classList.add("active");

      scale_icon = parseInt(this.dataset.scale);
      localStorage.setItem("scale_icon_saved", scale_icon);

      console.log("scale_icon:", scale_icon);

      for (let i = 1; i <= 11; i++) {
        boxes[`box${i}`].style.scale = `${scale_icon}%`;
      }
      currentOpeningBtn.style.scale = `100%`;
    });
  });
});
let dock_bar = 1;
document
  .getElementById("dock-bar")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    dock_bar = this.classList.contains("active") ? 1 : 0;

    if (dock_bar) {
      document.querySelector(".khayapp").style.opacity = 1;
      localStorage.removeItem("dock_bar_saved");
    } else {
      document.querySelector(".khayapp").style.opacity = 0;
      localStorage.setItem("dock_bar_saved", 1);
    }
  });
let dark_mode = 1;
document
  .getElementById("dark-mode")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    dark_mode = this.classList.contains("active") ? 1 : 0;

    localStorage.setItem("dark_mode_saved", dark_mode);
    if (!dark_mode) localStorage.removeItem("dark_mode_saved");
    set_dark_mode(dark_mode);
  });

function set_dark_mode(mode) {
  if (mode) {
    aod_btn.style.background = "#171719";
    lock_btn.style.background = "#171719";
    home_btn.style.background = "#171719";
    wallpaper_btn.style.background = "#171719";

    aod_btn.style.color = "#eaeaea";
    lock_btn.style.color = "#eaeaea";
    home_btn.style.color = "#eaeaea";
    wallpaper_btn.style.color = "#eaeaea";

    document.querySelectorAll(".finger-btn").forEach((el) => {
      el.style.color = "#eaeaea";
      el.style.background = "#171719";
    });

    app4.style.background = "#010101";
    app4_finger.style.background = "#010101";
    app4_home.style.background = "#010101";
    app4_theme.style.background = "#010101";
    app4_vesion.style.background = "#010101";
    app4animation.style.background = "#010101";
    app4main.style.background = "#010101";
    app4_language.style.background = "#010101";
    aod_option.style.background = "#010101";
    wallpaper_option.style.background = "#010101";
    document.getElementById("app4credits").style.background = "#010101";

    for (let i = 1; i <= 11; i++) {
      appopen[`box${i}`].style.background = "#010101";
      appopen[`box${i}`].style.color = "#eaeaea";
    }

    document.querySelectorAll(".setting-item").forEach((el) => {
      el.style.color = "#ffffff";
      el.style.background = "#171719";
    });

    document.querySelectorAll(".setting-item3").forEach((el) => {
      el.style.color = "#ffffff";
    });

    document.querySelectorAll(".settings-box").forEach((el) => {
      el.style.color = "#ffffff";
      el.style.background = "#171719";
    });

    document.querySelectorAll(".speed-box").forEach((el) => {
      el.style.color = "#ffffff";
      el.style.background = "#171719";
    });

    document.querySelectorAll(".btn_calc").forEach((el) => {
      el.style.color = "#aba9ab";
      el.style.background = "#272627";
    });

    document.querySelectorAll(".equal_calc").forEach((el) => {
      el.style.color = "#ffeff6";
      el.style.background = "#f45e5a";
    });

    document.querySelectorAll(".orange_calc").forEach((el) => {
      el.style.color = "#e85f5c";
      el.style.background = "#341414";
    });

    document.querySelectorAll(".gray_calc").forEach((el) => {
      el.style.color = "#db5e61";
    });

    document.querySelectorAll(".btn_phone").forEach((el) => {
      el.style.color = "#b5b5b5";
    });

    document.querySelectorAll(".scale-button").forEach((el) => {
      el.style.background = "#171719";
      el.style.color = "#ffffff";
    });
    document.querySelectorAll(".lang_button").forEach((el) => {
      el.style.background = "#171719";
      el.style.color = "#ffffff";
    });

    document.querySelectorAll(".content-box-vesion").forEach((el) => {
      el.style.background = "#171719";
      el.style.color = "#ffffff";
    });

    document.querySelector(".add-button").style.background = "#171719";
    document.querySelector(".add-button").style.color = "#eaeaea";
    document.querySelector(".controls").style.background =
      "rgba(0, 0, 0, 0.85)";
    document.getElementById("btn1").style.background = "#171719";
    document.getElementById("btn2").style.background = "#171719";
    document.getElementById("btn1").style.color = "#ffffff";
    document.getElementById("btn2").style.color = "#ffffff";

    app4.style.color = "#eaeaea";
    app4_finger.style.color = "#eaeaea";
    app4_home.style.color = "#eaeaea";
    app4_theme.style.color = "#eaeaea";
    app4_vesion.style.color = "#eaeaea";
    app4animation.style.color = "#eaeaea";
    app4main.style.color = "#eaeaea";
    app4_language.style.color = "#eaeaea";
    document.getElementById("app4credits").style.color = "#eaeaea";

    aod_option.style.color = "#eaeaea";
    wallpaper_option.style.color = "#eaeaea";

    document.querySelectorAll(".button-finger").forEach((el) => {
      el.style.background = "#171719";
      el.style.color = "#ffffff";
    });

    document.querySelector(".khaysetting1").style.background = "#171719";
    document.querySelector(".khaysetting1-2").style.background =
      "#171719";
    document.querySelector(".khaysetting3").style.background = "#171719";
    document.querySelector(".khaysetting5").style.background = "#171719";
    document.querySelector(".khaysetting4").style.background = "#171719";
    document.querySelector(".khaysetting1-1").style.background =
      "#171719";
  } else {
    aod_btn.style.background = "#ffffff";
    lock_btn.style.background = "#ffffff";
    home_btn.style.background = "#ffffff";
    wallpaper_btn.style.background = "#ffffff";

    aod_btn.style.color = "#000000";
    lock_btn.style.color = "#000000";
    home_btn.style.color = "#000000";
    wallpaper_btn.style.color = "#000000";

    document.querySelectorAll(".finger-btn").forEach((el) => {
      el.style.color = "#000000";
      el.style.background = "#ffffff";
    });

    app4.style.background = "#eaeaea";
    app4_finger.style.background = "#eaeaea";
    app4_home.style.background = "#eaeaea";
    app4_theme.style.background = "#eaeaea";
    app4_vesion.style.background = "#eaeaea";
    app4animation.style.background = "#eaeaea";
    app4main.style.background = "#eaeaea";
    wallpaper_option.style.background = "#eaeaea";
    aod_option.style.background = "#eaeaea";
    app4language.style.background = "#eaeaea";
    document.getElementById("app4credits").style.background = "#eaeaea";

    for (let i = 1; i <= 11; i++) {
      appopen[`box${i}`].style.color = "#010101";
      appopen[`box${i}`].style.background = "#eaeaea";
    }

    document.querySelectorAll(".setting-item").forEach((el) => {
      el.style.background = "#ffffff";
      el.style.color = "#000000";
    });

    document.querySelectorAll(".setting-item3").forEach((el) => {
      el.style.color = "#000000";
    });

    document.querySelectorAll(".finger-btn").forEach((el) => {
      el.style.background = "#ffffff";
      el.style.color = "#000000";
    });

    document.querySelectorAll(".settings-box").forEach((el) => {
      el.style.background = "#ffffff";
      el.style.color = "#000000";
    });

    document.querySelectorAll(".speed-box").forEach((el) => {
      el.style.background = "#ffffff";
      el.style.color = "#000000";
    });

    document.querySelectorAll(".btn_calc").forEach((el) => {
      el.style.color = "#353535";
      el.style.background = "#f3f3f3";
    });

    document.querySelectorAll(".equal_calc").forEach((el) => {
      el.style.color = "#ffffff";
      el.style.background = "#f0625d";
    });

    document.querySelectorAll(".orange_calc").forEach((el) => {
      el.style.color = "#de4315";
      el.style.background = "#fbc4ab";
    });

    document.querySelectorAll(".gray_calc").forEach((el) => {
      el.style.color = "#d84315";
    });

    document.querySelectorAll(".btn_phone").forEach((el) => {
      el.style.color = "rgb(70, 70, 70)";
    });

    document.querySelectorAll(".scale-button").forEach((el) => {
      el.style.color = "#000000";
      el.style.background = "#ffffff";
    });

    document.querySelectorAll(".lang_button").forEach((el) => {
      el.style.color = "#000000";
      el.style.background = "#ffffff";
    });

    document.querySelectorAll(".button-finger").forEach((el) => {
      el.style.color = "#171719";
      el.style.background = "#ffffff";
    });

    document.querySelectorAll(".content-box-vesion").forEach((el) => {
      el.style.color = "#171719";
      el.style.background = "#ffffff";
    });

    app4.style.color = "#010101";
    app4_finger.style.color = "#010101";
    app4_home.style.color = "#010101";
    app4_theme.style.color = "#010101";
    app4_vesion.style.color = "#010101";
    app4animation.style.color = "#010101";
    app4main.style.color = "#010101";
    wallpaper_option.style.color = "#010101";
    aod_option.style.color = "#010101";
    document.getElementById("app4credits").style.color = "#010101";

    document.querySelectorAll(".nav").forEach((el) => {
      el.style.background = "#171719";
    });

    document.querySelector(".add-button").style.background = "#ffffff";
    document.querySelector(".add-button").style.color = "#000000";
    document.querySelector(".controls").style.background =
      "rgba(255, 255, 255, 0.85)";
    document.getElementById("btn1").style.background = "#ffffff";
    document.getElementById("btn2").style.background = "#ffffff";
    document.getElementById("btn1").style.color = "#000000";
    document.getElementById("btn2").style.color = "#000000";

    document.querySelector(".khaysetting1").style.background = "#ffffff";
    document.querySelector(".khaysetting1-2").style.background =
      "#ffffff";
    document.querySelector(".khaysetting3").style.background = "#ffffff";
    document.querySelector(".khaysetting5").style.background = "#ffffff";
    document.querySelector(".khaysetting4").style.background = "#ffffff";
    document.querySelector(".khaysetting1-1").style.background =
      "#ffffff";
  }
}

finger.addEventListener("click", () => {
  showPopup_open_close(app4_finger);
});
back9.addEventListener("click", () => {
  hidePopup_open_close(app4_finger);
});
const fingerprint_preview = document.getElementById(
  "fingerprint_preview"
);
const btnWhite = document.getElementById("btn-white");
const btnBlue = document.getElementById("btn-blue");

fingerprint_preview.style.filter = "brightness(1000%) grayscale(100%)";
fingerprint.style.filter = "brightness(1000%) grayscale(100%)";
btnWhite.style.border = "2px solid aqua";

btnWhite.addEventListener("click", () => {
  fingerprint_preview.style.filter = "brightness(1000%) grayscale(100%)";
  fingerprint.style.filter = "brightness(1000%) grayscale(100%)";
  btnWhite.classList.add("active");
  btnBlue.classList.remove("active");
  btnBlue.style.border = "2px solid rgb(225, 225, 225)";
  btnWhite.style.border = "2px solid aqua";

  localStorage.setItem("btn_finger_saved", "btnWhite");
});

btnBlue.addEventListener("click", () => {
  fingerprint_preview.style.filter =
    "brightness(0) saturate(100%) invert(72%) sepia(35%) saturate(1172%) hue-rotate(174deg) brightness(104%) contrast(104%)";
  fingerprint.style.filter =
    "brightness(0) saturate(100%) invert(72%) sepia(35%) saturate(1172%) hue-rotate(174deg) brightness(104%) contrast(104%)";
  btnWhite.style.border = "2px solid rgb(225, 225, 225)";
  btnBlue.style.border = "2px solid aqua";

  localStorage.setItem("btn_finger_saved", "btnBlue");
});

vesion_setting.addEventListener("click", () => {
  showPopup_open_close(app4_vesion);
});
back10.addEventListener("click", () => {
  hidePopup_open_close(app4_vesion);
});

// -- nofication --
const thanhS1 = document.querySelector(".thanh-status");
const thanhS2 = document.querySelector(".thanh-status2");
const lp2 = document.querySelector(".lp2");
const notificationcenter = document.querySelector(".left-text-tb");

let draggingS = false;
let isMoS = false;
let startYS = 0;
let startXS = 0;
let deltaYS = 0;
let deltaXS = 0;

function updateTransformS(y, x) {
  const y2 = y;
  if (y2 < -90) y2 = -90;
  if (y2 > 0) y2 = 0;
  //if (y < -50) y = -50;
  if (y > 0) y = 0;

  const scale = 1 + -y / 60;

  clock.style.transition = "all 0.2s";
  clock.style.transform = `translateX(calc(${-y}px / 3)) translateY(${-y2}px) scale(${scale})`;
  lp2.style.transition = "all 0.1s";
  lp2.style.opacity = `${scale - 1} `;
  lp2.style.zIndex = 19999;

  thanhS1.style.transition = "none";
  thanhS1.style.transform = `translateX(50%) translateY(${-y}px)`;
}

thanhS1.addEventListener("touchstart", (e) => {
  if (!ison) return;

  isMoS = true;
  startYS = e.touches[0].clientY;
  startXS = e.touches[0].clientX;
  clock.classList.add("hien");
  notificationcenter.style.transform = "translateY(0px)";
});

thanhS1.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
    if (!isMoS) return;
    deltaYS = startYS - e.touches[0].clientY;
    deltaXS = e.touches[0].clientX - startXS;
    updateTransformS(deltaYS, deltaXS);
  },
  {
    passive: false,
  }
);

thanhS1.addEventListener("touchend", () => {
  if (deltaYS < -70) monotification();
  else dongnotification();
  deltaYS = 0;
  deltaXS = 0;
  thanhS1.style.transform = `translateX(50%)`;
});

thanhS1.addEventListener("mousedown", (e) => {
  if (!ison) return;

  deltaYS = 0;
  deltaXS = 0;
  startYS = 0;
  startXS = 0;

  isMoS = true;
  draggingS = true;

  startYS = e.clientY;
  startXS = e.clientX;
  clock.classList.add("hien");
  notificationcenter.style.transform = "translateY(0px)";
});

window.addEventListener("mousemove", (e) => {
  if (!draggingS || !isMoS) return;
  deltaYS = startYS - e.clientY;
  deltaXS = e.clientX - startXS;
  updateTransformS(deltaYS, deltaXS);
});

window.addEventListener("mouseup", () => {
  if (!draggingS || !isMoS) return;
  draggingS = false;
  thanhS1.style.transform = `translateX(50%)`;
  if (deltaYS < -70) monotification();
  else dongnotification();
});

lp2.addEventListener("click", () => {
  dongnotification();
});
lp2.addEventListener("touchend", () => {
  dongnotification();
});

function monotification() {
  clock.style.transition =
    "all 0.5s cubic-bezier(0.23, 0.55, 0.54, 0.97)";
  clock.style.transform = `translateX(25px) translateY(50px) scale(calc(1 + 50 / 40))`;
  lp2.style.transition = "all 0s";
  notificationcenter.classList.add("open");
  lp2.style.opacity = `1`;
  lp2.style.zIndex = 19999;
  clock.classList.add("open");
  thanhS1.style.pointerEvents = "none";
}
function dongnotification() {
  clock.style.transition =
    "all 0.4s cubic-bezier(0.23, 0.55, 0.54, 0.97)";
  clock.style.transform = `none`;
  lp2.style.transition = "all 0.3s";
  lp2.style.opacity = `0`;
  lp2.style.zIndex = 1;
  notificationcenter.style.transform = "translateY(-60px)";
  notificationcenter.classList.remove("open");
  clock.classList.remove("open");
  if (islock) clock.classList.remove("hien");
  thanhS1.style.pointerEvents = "auto";
}
function closePopup_noanim() {
  if (!currentOpeningBtn) return;
  app.classList.remove("open");
  currentOpeningBtn.style.transition = `all 0s`;
  clearTimeout(autoHideClickablesTimer);
  closing = true;
  setTimeout(() => {
    closing = false;
  }, 300);
  currentOpeningBtn.classList.remove("open");
  currentOpeningBtn.style.scale = `${scale_icon}%`;

  allApp.style.transition = `all 0s`;
  currentOpeningBtn.style.zIndex = "5";

  thanh.style.transform = "translateX(-50%)";
  thanh.classList.remove("open");
  lp.classList.remove("open");

  hide_app = setTimeout(() => {
    app.style.display = "none";
  }, 0);

  allApp.classList.remove("open");

  if (nav) {
    nav.style.transition = `all 0s`;
    nav.classList.remove("open");
  }
  isMo = false;

  Object.values(clickables).forEach((el) => {
    el.style.display = "block";
  });
  currentOpeningBtn.classList.remove("hien");
  currentOpeningBtn = null;
  scale = 1;
}

const speedBoxes = document.querySelectorAll(".speed-box");
speedBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Bỏ class 'active' ở tất cả box
    speedBoxes.forEach((b) => b.classList.remove("active"));

    // Gắn class 'active' cho box được bấm
    box.classList.add("active");

    // Cập nhật biến tốc độ
    currentSpeed = parseFloat(box.dataset.speed);
    currentSpeed6 = 0.6 * currentSpeed;
    currentSpeed5 = 0.5 * currentSpeed;
    currentSpeed4 = 0.4 * currentSpeed;
    currentSpeed3 = 0.3 * currentSpeed;
    currentSpeed2 = 0.2 * currentSpeed;
    duration = 1.7 * currentSpeed;
    document.getElementById(
      "scaling-box"
    ).style.animation = `scaleUpDown ${duration}s ease-out infinite`;
  });
});

const animation = lottie.loadAnimation({
  container: document.getElementById("lottie"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "originos_data/Artboard_1.json",
});
animation.setSpeed(0.4 * currentSpeed);
animation.goToAndStop(animation.totalFrames - 1, true);

const finger_print = lottie.loadAnimation({
  container: document.getElementById("unlock-btn2"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "originos_data/finger_print.json",
});
finger_print.setSpeed(currentSpeed);
finger_print.goToAndStop(animation.totalFrames - 1, true);

// battery
let battery_level = 100;
let charging = false;
const battery4 = document.querySelector(".battery-small2");
const battery_num = document.querySelector(".battery-num");

function updateBatteryInfo(battery) {
  battery_level = Math.round(battery.level * 100);
  charging = battery.charging;
  battery4.style.width = `calc(${battery_level}% / 1.25)`;
  if (battery_level <= 20) battery4.style.background = "red";
  if (battery_level > 20) battery4.style.background = "white";
  battery_num.textContent = `${battery_level}`;
  if (charging) {
    battery4.style.background = "#26bd44";
  }
}

if ("getBattery" in navigator) {
  navigator.getBattery().then((battery) => {
    updateBatteryInfo(battery);

    battery.addEventListener("levelchange", () =>
      updateBatteryInfo(battery)
    );
    battery.addEventListener("chargingchange", () =>
      updateBatteryInfo(battery)
    );
  });
} else {
  console.warn("Trình duyệt không hỗ trợ Battery API.");
}