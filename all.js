const dev_name = document.getElementById("name_dev");
if (
  !dev_name ||
  dev_name.textContent.trim() != "TikTok: @sungsamtech - galaxyA15"
) {
  localStorage.clear();
  sessionStorage.clear();
  location.reload();
}

const dateElement = document.getElementById("dateText");
const dateElement2 = document.getElementById("dateText2");

const now = new Date();
const options = {
  weekday: "short",
  month: "short",
  day: "numeric",
};
const formatted = now.toLocaleDateString("en-US", options);

dateElement.textContent = formatted;
dateElement2.textContent = formatted;
document.getElementById("dateText3").textContent = formatted;
document.getElementById("dateTextPreview").textContent = formatted;

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  document.getElementById("lockclock").textContent = `${hours}:${minutes}`;
  document.getElementById("lockclock2").textContent = `${hours}:${minutes}`;
  document.getElementById("lockclock3").textContent = `${hours}:${minutes}`;
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
  document.getElementById("clock_preview").textContent = `${hours}:${minutes}`;
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
document.getElementById("name_dev").textContent = "";

let currentOpeningBtn = null;
let nav = null;
let isMo = false;
let autoHideClickablesTimer = null;
let scale_app = null;
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
  currentOpeningBtn.style.transition = `all ${currentSpeed5}s cubic-bezier(.26,.72,.33,.89), height ${currentSpeed5}s cubic-bezier(.31,.9,1,1), top ${currentSpeed5}s cubic-bezier(.18,.55,.29,.78)`;

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

  scale_app = setTimeout(() => {
    currentOpeningBtn.style.transform = `translateX(0%) translateY(0%) scale(1.077)`;
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
  currentOpeningBtn.style.transform = `translateX(0%) translateY(0%) scale(1.077)`;
  thanh.style.transform = `translateX(-50%) translateY(0%) scale(1)`;
}

let actions;
let handlersMap = new Map();

function updateActionsMap() {
  actions = new Map([
    [boxes["box3"], isPlaying_music ? closePopupToIsland3 : closePopup],
    [boxes["box9"], isRunning_clock ? closePopupToIsland : closePopup],
  ]);
  handlersMap.clear();
  if (isRunning_clock) handlersMap.set(boxes["box9"], handlers.box9);
  if (isPlaying_music) handlersMap.set(boxes["box3"], handlers.box3);
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

  if (currentOpeningBtn === boxes["box4"]) {
    document.getElementById("scaling-box").style.animation = "none";

    theme_option.style.pointerEvents = "auto";
    AboutInSetting.style.pointerEvents = "auto";
    animationInSetting.style.pointerEvents = "auto";

    removeAllUIEventListeners();

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
    hidePopup_open_close(app4icon);
    hidePopup_open_close(app4language);
    hidePopup_open_close(app4_lock_style);
    hidePopup_open_close(crea_pass);
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
  if (deltaY > 40) (actions.get(currentOpeningBtn) || closePopup)();
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

  if (currentOpeningBtn === boxes["box4"]) {
    document.getElementById("scaling-box").style.animation = "none";

    theme_option.style.pointerEvents = "auto";
    AboutInSetting.style.pointerEvents = "auto";
    animationInSetting.style.pointerEvents = "auto";

    removeAllUIEventListeners();

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
    hidePopup_open_close(app4icon);
    hidePopup_open_close(app4language);
    hidePopup_open_close(app4_lock_style);
    hidePopup_open_close(crea_pass);
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
  if (deltaY > 40) (actions.get(currentOpeningBtn) || closePopup)();
  else resetpop();
});

function openPopupFromCurrentButton2() {
  if (!currentOpeningBtn) return;
  thanh.classList.add("open");
  if (app) app.classList.add("open");
  currentOpeningBtn.style.transition = `all ${currentSpeed5}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;

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
    currentOpeningBtn.style.transform = `translateX(0%) translateY(0%) scale(1.077)`;
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

const handlers = {
  box9: () => {
    Object.assign(island.style, {
      height: "25px",
      borderRadius: "25px",
      width: "120px",
    });
    buttons_island.classList.remove("show");
    time_island.classList.remove("show");
    image_island_right.classList.add("show");

    if (isPlaying_music) {
      island2.style.transition =
        "transform 0.3s, width 1.2s cubic-bezier(1,-0.13,.27,1.34)";
      island2.style.width = "25px";
      island2.style.transform = "translateX(-50%) translateY(0px) scale(1)";
      clickables["box3"].style.pointerEvents = "auto";

      island.style.width = "120px";
      island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
      island_circle.style.transform = "translateX(calc(-50% - 77px)) scale(1)";

      clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
      clock.style.scale = "0.8";
      clock.style.left = "25px";
    }
  },
  box3: () => {
    Object.assign(island2.style, {
      height: "25px",
      borderRadius: "25px",
      width: "120px",
    });

    image_island_right2.classList.remove("show");
    controls_music2.classList.remove("show");
    popupAuthor_music2.classList.remove("show");
    popupTitle_music2.classList.remove("show");
    progressBar_music2.classList.remove("show");

    if (isRunning_clock) {
      island_circle.style.transform = "translateX(calc(-50% - 77px)) scale(1)";
      clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
      clock.style.scale = "0.8";
      clock.style.left = "25px";
    }
  },
};

["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"].forEach(
  (num) => {
    document
      .getElementById(`clickableBox${num}`)
      .addEventListener("pointerup", () => {
        clearTimeout(autoHideClickablesTimer);
        clearTimeout(scale_app);
        if (currentOpeningBtn) {
          currentOpeningBtn.style.transition = `all ${currentSpeed5}s cubic-bezier(.26,.89,.7,1.01)`;
          currentOpeningBtn.classList.remove("open");
          currentOpeningBtn.classList.remove("hien");
          currentOpeningBtn.style.scale = `${scale_icon}%`;

          Object.values(clickables).forEach((el) => {
            el.style.display = "block";
          });

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

          // Dùng 1 lần gọi duy nhất:
          const handler = handlersMap.get(currentOpeningBtn);
          if (handler) handler();

          currentOpeningBtn = boxes[`box${num}`];
          openPopupFromCurrentButton2();
          autoHideClickablesTimer = setTimeout(() => {
            if (isMo) hideAllClickables();
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
        }
      });
  }
);

target.innerText += "ngs";

const island = document.getElementById("island");
const island_circle = document.getElementById("island_circle");
const buttons_island = document.querySelector(".buttons_island");
const time_island = document.querySelector(".time_island");
const image_island_right = document.querySelector(".image_island_right");
let timeHideIsland = null;

island.addEventListener("click", () => {
  if (island.offsetWidth >= 120) {
    hideAllClickables();
    if (timeHideIsland) clearTimeout(timeHideIsland);
    island.style.transition = `all 0.56s cubic-bezier(.14,1.34,.41,1)`;
    island.style.width = "310px";
    island.style.height = "75px";
    island.style.borderRadius = "75px";
    buttons_island.classList.add("show");
    time_island.classList.add("show");
    image_island_right.classList.remove("show");

    battery1.style.transition = `transform 0.3s`;
    battery1.style.transform = "translateX(100px)";
    clock.style.transition = `transform 0.3s`;
    clock.style.transform = "translateX(-100px)";

    if (isPlaying_music) {
      island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
      island_circle.style.transform = "translateX(-50%) scale(1)";
    }
  }
});

document.addEventListener("pointerdown", function (e) {
  if (!island.contains(e.target) && island.offsetWidth >= 290) {
    island.style.transition = `all 0.35s ease-out, width 0.7s cubic-bezier(.14,1.34,.41,1)`;

    island.style.height = "25px";
    island.style.borderRadius = "25px";
    island.style.width = "120px";
    buttons_island.classList.remove("show");
    time_island.classList.remove("show");
    image_island_right.classList.add("show");

    battery1.style.transition = `transform 0.7s cubic-bezier(.14,1.34,.41,1)`;
    battery1.style.transform = "translateX(0px)";
    clock.style.transition = `transform 0.7s cubic-bezier(.14,1.34,.41,1)`;
    clock.style.transform = "translateX(0px)";

    if (!isRunning_clock) {
      setTimeout(() => {
        island.style.transition = `all ${currentSpeed5}s ease-out`;
        island.style.height = "25px";
        island.style.borderRadius = "25px";
        island.style.width = "25px";
        image_island_right.classList.remove("show");

        if (isPlaying_music) {
          clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
          clock.style.scale = "1";
          clock.style.left = "30px";

          island_circle.style.transition =
            "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
          island_circle.style.transform = "translateX(-50%) scale(1)";
          island2.style.transition = `transform 0.3s, width 0.6s cubic-bezier(.67,.2,.38,1.27)`;
          island2.style.width = "120px";
        }
      }, 20);
    }

    if (isPlaying_music) {
      island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
      island_circle.style.transform = "translateX(calc(-50% - 77px)) scale(1)";
    }

    if (!currentOpeningBtn) {
      Object.values(clickables).forEach((el) => {
        el.style.display = "block";
      });
    }
  }
});

clickables["box9"].addEventListener("pointerup", () => {
  if (isPlaying_music) {
    island.style.transition = `all 0.2s ease-out`;
    island.style.height = "25px";
    island.style.borderRadius = "25px";
    island.style.width = "25px";

    island_circle.style.transition = "all 0.3s";
    island_circle.style.transform = "translateX(-50%) scale(1)";

    island2.style.transition = "all 0.5s cubic-bezier(.68,.01,.62,.14)";
    island2.style.width = "120px";
    island2.style.transform = "translateX(-50%) translateY(0) scale(1)";

    clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
    clock.style.scale = "1";
    clock.style.left = "30px";
  } else {
    island.style.transition = `all 0.35s ease-out`;
    island.style.height = "25px";
    island.style.borderRadius = "25px";
    island.style.width = "25px";
  }
});

function closePopupToIsland() {
  if (!currentOpeningBtn) return;
  app.classList.remove("open");
  currentOpeningBtn.style.transition = `all ${currentSpeed3}s, opacity ${currentSpeed2}s cubic-bezier(1,0,1,0.2)`;
  clearTimeout(autoHideClickablesTimer);
  clearTimeout(timeHideIsland);

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
  island.style.transition = `transform 0.3s, width 0.6s cubic-bezier(.67,.2,.38,1.27)`;
  island.style.transform = "translateX(-50%) translateY(-1px) scale(1.15)";
  if (!isPlaying_music) {
    island.style.width = "120px";
  }
  if (isPlaying_music) {
    island2.style.transition = "all 0.4s";
    island2.style.width = "25px";
    island2.style.transition = `transform 0.3s, width 0.6s cubic-bezier(.67,.2,.38,1.27)`;
    island2.style.transform = "translateX(-50%) translateY(-1px) scale(1.15)";
    clickables["box3"].style.pointerEvents = "none";
  }

  battery1.style.transition = `transform 0.3s`;
  battery1.style.transform = "translateX(-7px)";
  clock.style.transition = `transform 0.3s`;
  clock.style.transform = "translateX(7px)";

  Object.values(clickables).forEach((el) => {
    el.style.display = "block";
  });
  boxes["box9"].style.transform = `translateY(-45%) scale(0.1)`;
  boxes["box9"].classList.remove("hien");
  boxes["box9"].style.opacity = 0;
  currentOpeningBtn = null;

  clickables["box9"].style.pointerEvents = "none";

  setTimeout(() => {
    boxes["box9"].style.scale = `${scale_icon}%`;
    boxes["box9"].style.transition = "all 0s, opacity 0.3s";
    boxes["box9"].classList.remove("open");
    boxes["box9"].style.transform = `translateX(0%) translateY(0%) scale(1)`;
    boxes["box9"].style.opacity = 1;

    clickables["box9"].style.pointerEvents = "auto";
    island.style.transform = "translateX(-50%) translateY(0) scale(1)";
    if (isPlaying_music) {
      island2.style.transition = `transform 0.3s, width 1.2s cubic-bezier(1,-0.13,.27,1.34)`;
      island.style.width = "120px";
      island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
      island_circle.style.transform = "translateX(calc(-50% - 77px)) scale(1)";
      island2.style.transform = "translateX(-50%) translateY(0px) scale(1)";
      clickables["box3"].style.pointerEvents = "auto";
      clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
      clock.style.scale = "0.8";
      clock.style.left = "25px";
    }
    image_island_right.classList.add("show");
    battery1.style.transform = "translateX(0px)";
    clock.style.transform = "translateX(0px)";
  }, 300 * currentSpeed);
}

const island2 = document.getElementById("island2");
const image_island_right2 = document.querySelector(".image_island_right2");
const controls_music2 = document.querySelector(".controls_music2");

island_circle.addEventListener("click", () => {
  island.style.transition = `all 0.35s ease-out`;
  island.style.height = "25px";
  island.style.borderRadius = "25px";
  island.style.width = "25px";

  island_circle.style.transition = "all 0.3s";
  island_circle.style.transform = "translateX(-50%) scale(1)";

  setTimeout(() => {
    hideAllClickables();
    if (timeHideIsland) clearTimeout(timeHideIsland);
    island2.style.transition = `all 0.56s cubic-bezier(.14,1.34,.41,1)`;
    island2.style.width = "312px";
    island2.style.height = "150px";
    island2.style.borderRadius = "42px";

    image_island_right2.classList.add("show");
    controls_music2.classList.add("show");
    popupAuthor_music2.classList.add("show");
    popupTitle_music2.classList.add("show");
    progressBar_music2.classList.add("show");

    battery1.style.transition = `transform 0.3s`;
    battery1.style.transform = "translateX(100px)";
    clock.style.transition = `transform 0.3s`;
    clock.style.transform = "translateX(-100px)";
  }, 200);
});

island2.addEventListener("click", () => {
  if (island2.offsetWidth >= 120) {
    hideAllClickables();
    if (timeHideIsland) clearTimeout(timeHideIsland);
    island2.style.transition = `all 0.56s cubic-bezier(.14,1.34,.41,1)`;
    island2.style.width = "312px";
    island2.style.height = "150px";
    island2.style.borderRadius = "42px";

    image_island_right2.classList.add("show");
    controls_music2.classList.add("show");
    popupAuthor_music2.classList.add("show");
    popupTitle_music2.classList.add("show");
    progressBar_music2.classList.add("show");

    battery1.style.transition = `transform 0.3s`;
    battery1.style.transform = "translateX(100px)";
    clock.style.transition = `transform 0.3s`;
    clock.style.transform = "translateX(-100px)";
  }
});

document.addEventListener("pointerdown", function (e) {
  if (!island2.contains(e.target) && island2.offsetWidth >= 290) {
    if (!currentOpeningBtn) {
      Object.values(clickables).forEach((el) => {
        el.style.display = "block";
      });
    }
    if (!isRunning_clock) {
      island2.style.height = "25px";
      island2.style.borderRadius = "25px";

      if (!isPlaying_music) {
        island2.style.transition = `all 0.3s, width 0.4s`;
        island2.style.width = "25px";
        image_island_right2.classList.remove("show");
        controls_music2.classList.remove("show");
        popupAuthor_music2.classList.remove("show");
        popupTitle_music2.classList.remove("show");
        progressBar_music2.classList.remove("show");
      } else {
        island2.style.transition = `all 0.35s ease-out, width 0.7s cubic-bezier(.14,1.34,.41,1)`;
        island2.style.width = "120px";
        image_island_right2.classList.remove("show");
        controls_music2.classList.remove("show");
        popupAuthor_music2.classList.remove("show");
        popupTitle_music2.classList.remove("show");
        progressBar_music2.classList.remove("show");
      }

      battery1.style.transition = `transform 0.7s cubic-bezier(.14,1.34,.41,1)`;
      battery1.style.transform = "translateX(0px)";
      clock.style.transition = `transform 0.7s cubic-bezier(.14,1.34,.41,1)`;
      clock.style.transform = "translateX(0px)";
    } else {
      island2.style.transition = `all 0.35s ease-out, width 1.2s cubic-bezier(.14,1.34,.41,1)`;
      island2.style.height = "25px";
      island2.style.borderRadius = "25px";
      island2.style.width = "25px";
      image_island_right2.classList.remove("show");
      controls_music2.classList.remove("show");
      popupAuthor_music2.classList.remove("show");
      popupTitle_music2.classList.remove("show");
      progressBar_music2.classList.remove("show");

      battery1.style.transform = "translateX(0px)";
      clock.style.transform = "translateX(0px)";
      setTimeout(() => {
        island.style.transform = "translateX(-50%) translateY(0) scale(1)";
        island2.style.transition = `transform 0.3s, width 1.2s cubic-bezier(1,-0.13,.27,1.34)`;
        island.style.width = "120px";
        island_circle.style.transition =
          "all 0.7s cubic-bezier(.67,.2,.38,1.27)";

        if (!isPlaying_music) {
          island2.style.transition = `all 0.3s`;
          island2.style.width = "25px";
          island_circle.style.transform = "translateX(-50%) scale(1)";
        } else {
          island_circle.style.transform =
            "translateX(calc(-50% - 77px)) scale(1)";
        }
        island2.style.transform = "translateX(-50%) translateY(0px) scale(1)";
        clickables["box3"].style.pointerEvents = "auto";
        clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
        clock.style.scale = "0.8";
        clock.style.left = "25px";
        image_island_right.classList.add("show");
      }, 300);
    }
  }
});

clickables["box3"].addEventListener("pointerup", () => {
  if (isRunning_clock) {
    island_circle.style.transform = "translateX(-50%) scale(1)";

    clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
    clock.style.scale = "1";
    clock.style.left = "30px";
  } else {
    island2.style.transition = `all ${currentSpeed5}s ease-out`;
    island2.style.height = "25px";
    island2.style.borderRadius = "25px";
    island2.style.width = "25px";
  }
});

function closePopupToIsland3() {
  if (!currentOpeningBtn) return;
  app.classList.remove("open");
  currentOpeningBtn.style.transition = `all ${currentSpeed3}s, opacity ${currentSpeed2}s cubic-bezier(1,0,1,0.2)`;
  clearTimeout(autoHideClickablesTimer);
  clearTimeout(timeHideIsland);

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

  island2.style.transform = "translateX(-50%) translateY(-1px) scale(1.15)";
  if (isRunning_clock) {
    island2.style.transition = `all 0.3s`;

    island2.style.transform = "";
    island.style.transition = `transform 0.3s, width 0.6s cubic-bezier(.67,.2,.38,1.27)`;
    island.style.transform = "translateX(-50%) translateY(-1px) scale(1.15)";
    island.style.width = "80px";
    clickables["box9"].style.pointerEvents = "none";

    clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";

    island2.style.width = clock.style.left = "25px";
    clock.style.scale = "0.8";
  } else {
    island2.style.transition = `transform 0.3s, width 0.6s cubic-bezier(.67,.2,.38,1.27)`;
    island2.style.width = "120px";
  }

  battery1.style.transition = `transform 0.3s`;
  battery1.style.transform = "translateX(-7px)";
  clock.style.transition = `transform 0.3s`;
  clock.style.transform = "translateX(7px)";

  Object.values(clickables).forEach((el) => {
    el.style.display = "block";
  });
  boxes["box3"].style.transform = `translateY(-45%) scale(0.1)`;
  boxes["box3"].classList.remove("hien");
  boxes["box3"].style.opacity = 0;
  currentOpeningBtn = null;

  clickables["box3"].style.pointerEvents = "none";

  setTimeout(() => {
    boxes["box3"].style.scale = `${scale_icon}%`;
    boxes["box3"].style.transition = "all 0s, opacity 0.3s";
    boxes["box3"].classList.remove("open");
    boxes["box3"].style.transform = `translateX(0%) translateY(0%) scale(1)`;
    boxes["box3"].style.opacity = 1;

    clickables["box3"].style.pointerEvents = "auto";
    if (isRunning_clock) {
      island.style.width = "120px";
      island.style.transform = "translateX(-50%) translateY(0) scale(1)";
      clickables["box9"].style.pointerEvents = "auto";
    } else {
      island2.style.width = "120px";
      island2.style.transform = "translateX(-50%) translateY(0) scale(1)";
    }
    battery1.style.transform = "translateX(0px)";
    clock.style.transform = "translateX(0px)";
    if (isRunning_clock) {
      island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
      island_circle.style.transform = "translateX(calc(-50% - 77px)) scale(1)";
    }
  }, 300 * currentSpeed);
}

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
const footerText = document.querySelector(".footer-text2");

let finger_biometrics = 0;
const saved_finger_local = localStorage.getItem("finger_saved");
if (saved_finger_local !== null) {
  finger_biometrics = parseInt(saved_finger_local);
}

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
  lockscreen.style.display = "flex";

  islock = true;
  dongnotification();

  lockscreen.style.transition = "all 0.3s";
  lockscreen.style.opacity = lockscreen_style_opacity;
  lockscreen.style.pointerEvents = "auto";

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
    "translateX(100px) translateY(190px) scale(1.4)";
  boxes["box5"].style.opacity = "0.2";
  boxes["box5"].style.transition = "all 0s cubic-bezier(.07,1.33,1,1)";

  boxes["box6"].style.transform =
    "translateX(40px) translateY(175px) scale(1.3)";
  boxes["box6"].style.opacity = "0.2";
  boxes["box6"].style.transition = "all 0s cubic-bezier(.07,1.33,1,1)";

  boxes["box7"].style.transform =
    "translateX(-40px) translateY(175px) scale(1.3)";
  boxes["box7"].style.opacity = "0.2";
  boxes["box7"].style.transition = "all 0s cubic-bezier(.07,1.33,1,1)";

  boxes["box8"].style.transform =
    "translateX(-100px) translateY(190px) scale(1.4)";
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
  fingerprint.style.pointerEvents = "auto";

  if (!pass_password || !finger_biometrics) fingerprint.style.display = "none";
  if (pass_password && finger_biometrics) fingerprint.style.display = "flex";
}

function unlock() {
  fingerprint.style.pointerEvents = "none";
  island.style.pointerEvents = "auto";
  island2.style.pointerEvents = "auto";
  island_circle.style.pointerEvents = "auto";

  thanhS1.style.pointerEvents = "auto";

  islock = false;
  ison = true;

  phone.style.background = phone_lock_background;
  lockscreen.style.opacity = 0;
  lockscreen.style.transition = "none";
  lockscreen.style.display = "none";
  lockscreen.style.pointerEvents = "none";

  wallpaper.style.height = "100%";
  wallpaper.style.width = `100%`;
  wallpaper.style.scale = "100%";
  wallpaper.style.borderRadius = "50px";
  wallpaper.style.opacity = 1;
  wallpaper.style.transform = "translateY(0px)";

  lockclock.style.transform = "none";
  lockclock.style.filter = "brightness(1)";
  dateText.style.filter = "brightness(1)";
  dateText.style.transform = "translateY(0px) translateX(-50%) scale(0.95)";

  allApp.style.transition = `all calc(1s * ${currentSpeed}) cubic-bezier(.12,1.43,.51,1.01)`;
  allApp.classList.remove("lock");

  battery2.classList.remove("close");
  battery1.classList.remove("close");
  battery3.classList.remove("close");
  battery3.style.opacity = battery2.style.opacity = battery1.style.opacity = 1;

  clock.classList.add("hien");

  footerText.classList.remove("shake-animate");
  footerText.style.opacity = 0;

  powerbtn.classList.add("hidden");
  setTimeout(() => {
    Object.values(clickables).forEach((el) => {
      el.style.display = "flex";
    });
    powerbtn.classList.remove("hidden");
  }, 440);

  input_password = "";
  updateDots_password();
  removeSwipeEvents();

  setTimeout(() => {
    boxes["box11"].style.transform = "translateX(0px) translateY(0px) scale(1)";
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
          ].style.transition = `all calc(0.41s * ${currentSpeed}) cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
          boxes["box8"].style.transform =
            "translateX(0px) translateY(0px) scale(1)";
          boxes["box8"].style.opacity = "1";
          boxes[
            "box8"
          ].style.transition = `all calc(0.41s * ${currentSpeed}) cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
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

let unlock_time = null;
unlockBtn.addEventListener("pointerdown", () => {
  unlock_time = setTimeout(() => {
    unlock();
    animation.stop();
    animation.play();
  }, 200);
});
unlockBtn.addEventListener("pointerup", () => {
  clearTimeout(unlock_time);

  // Reset lại animation nếu đã từng chạy trước đó
  footerText.classList.remove("shake-animate");
  void footerText.offsetWidth; // trigger reflow
  footerText.classList.add("shake-animate");
});

let phone_lock_off_background = "#000000";
let phone_lock_background =
  "linear-gradient(to bottom, rgb(0, 53, 53), rgb(0, 141, 141))";
wallpaper.style.height = `${wallpaper_lock_height}%`;
wallpaper.style.scale = `${wallpaper_lock_scale}%`;
wallpaper.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
wallpaper.style.opacity = 1;

let lockclock_style_transform = "scale(0.95) translateY(160px)";
let dateText_style_transform = "translateY(150px) translateX(-50%) scale(0.95)";

wallpaper.style.transform = "translateY(250px)";
phone.style.background = phone_lock_background;
powerbtn.addEventListener("click", () => {
  lock();
  lock_content.style.opacity = `1`;
  swipeHandle.style.opacity = "1";
  if (ison) {
    swipeHandle.style.opacity = `0`;
    swipeHandle.style.pointerEvents = `none`;

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

    wallpaper.style.transition = `all ${currentSpeed5}s cubic-bezier(0.23, 0.55, 0.54, 0.97)`;
    wallpaper.style.filter = "blur(0px)";
    wallpaper.style.height = `${wallpaper_lock_off_height}%`;
    wallpaper.style.width = `330px`;
    wallpaper.style.scale = `${wallpaper_lock_off_scale}%`;
    wallpaper.style.borderRadius = `${wallpaper_lock_off_borderRadius}px`;
    wallpaper.style.opacity = `${wallpaper_lock_off_opacity}`;

    wallpaper.style.transform = wallpaper_lock_off_transform;
    phone.style.background = phone_lock_off_background;

    ison = false;
    removeSwipeEvents();
    lockclock.style.transform = lockclock_style_transform;
    lockclock.style.filter = "brightness(3)";
    dateText.style.transform = dateText_style_transform;
    dateText.style.filter = "brightness(3)";

    battery2.classList.add("close");
    battery1.classList.add("close");
    battery3.classList.add("close");
    thanhS1.style.pointerEvents = "none";
    closePopup_noanim();

    island.style.pointerEvents = "none";
    island2.style.pointerEvents = "none";
    island_circle.style.pointerEvents = "none";

    container_password.style.animation = "fadeOut_password 0s";
    container_password.style.display = "none";
    container_password.style.pointerEvents = "none";
    container_password.style.animation = "";
  } else {
    swipeHandle.style.opacity = `1`;
    swipeHandle.style.pointerEvents = `auto`;

    battery3.style.opacity =
      battery2.style.opacity =
      battery1.style.opacity =
      lockscreen.style.opacity =
        1;

    wallpaper.style.transition = `all ${currentSpeed5}s cubic-bezier(0.23, 0.55, 0.54, 0.97)`;
    wallpaper.style.height = `${wallpaper_lock_height}%`;
    wallpaper.style.width = `100%`;
    wallpaper.style.scale = `${wallpaper_lock_scale}%`;
    wallpaper.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
    wallpaper.style.opacity = 1;

    wallpaper.style.transform = wallpaper_lock_transform;
    phone.style.background = phone_lock_background;

    ison = true;
    addSwipeEvents();
    lockclock.style.transform = "none";
    lockclock.style.filter = "brightness(1)";
    dateText.style.filter = "brightness(1)";
    dateText.style.transform = "translateY(0px) translateX(-50%) scale(0.95)";

    battery2.classList.remove("close");
    battery1.classList.remove("close");
    battery3.classList.remove("close");
    thanhS1.style.pointerEvents = "auto";

    island.style.pointerEvents = "auto";
    island2.style.pointerEvents = "auto";
    island_circle.style.pointerEvents = "auto";
  }

  footerText.classList.remove("shake-animate");
  footerText.style.opacity = 0;
});

target.innerText += " -";

lockscreen.addEventListener("click", () => {
  if (!ison) {
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
    dateText.style.transform = "translateY(0px) translateX(-50%) scale(0.95)";
    thanhS1.style.pointerEvents = "auto";

    swipeHandle.style.opacity = `1`;
    swipeHandle.style.pointerEvents = `auto`;

    island.style.pointerEvents = "auto";
    island2.style.pointerEvents = "auto";
    island_circle.style.pointerEvents = "auto";
  }

  addSwipeEvents();
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

const icon_btn = document.getElementById("icon_btn");
const app4_icon = document.getElementById("app4icon");
const back12 = document.getElementById("back_to_setting12");

const lock_style_btn = document.getElementById("lock_style");
const app4_lock_style = document.getElementById("app4lockstyle");
const back13 = document.getElementById("back_to_setting13");

const crea_pass = document.querySelector(".container_crea_pass");
const box_pass1 = document.getElementById("box_pass1");
const box_pass2 = document.getElementById("box_pass2");
const pass_icon_btn = document.getElementById("icon_pass1");
const finger_icon_btn = document.getElementById("icon_pass2");
const back14 = document.getElementById("back_to_setting14");

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

  vesion_setting.addEventListener("click", handleShowVersion);
  back10.addEventListener("click", handleHideVersion);

  khaysetting1_2.addEventListener("click", handleShowCredits);
  back7.addEventListener("click", handleHideCredits);
});
back.addEventListener("click", () => {
  hidePopup_open_close(app4);

  theme_option.style.pointerEvents = "auto";
  animationInSetting.style.pointerEvents = "auto";

  vesion_setting.removeEventListener("click", showPopup_open_close(credits));
  back10.removeEventListener("click", handleHideVersion);

  khaysetting1_2.removeEventListener("click", handleShowCredits);
  back7.removeEventListener("click", handleHideCredits);
});

function handleShowCredits() {
  showPopup_open_close(credits);
}
function handleHideCredits() {
  hidePopup_open_close(credits);
}
function handleShowVersion() {
  showPopup_open_close(app4_vesion);
}
function handleHideVersion() {
  hidePopup_open_close(app4_vesion);
}

const blurAppBtn = document.getElementById("blurApp");

//animation option
animationInSetting.addEventListener("click", () => {
  showPopup_open_close(app4animation);
  document.getElementById(
    "scaling-box"
  ).style.animation = `scaleUpDown ${duration}s ease-out infinite`;

  AboutInSetting.style.pointerEvents = "none";
  theme_option.style.pointerEvents = "none";

  blurAppBtn.addEventListener("click", handleBlurAppToggle);
});
back2.addEventListener("click", () => {
  hidePopup_open_close(app4animation);
  document.getElementById("scaling-box").style.animation = "none";

  AboutInSetting.style.pointerEvents = "auto";
  theme_option.style.pointerEvents = "auto";

  blurAppBtn.removeEventListener("click", handleBlurAppToggle);
});

lock_style_btn.addEventListener("click", () => {
  showPopup_open_close(app4_lock_style);

  theme_option.style.pointerEvents = "none";
  animationInSetting.style.pointerEvents = "none";
  AboutInSetting.style.pointerEvents = "none";

  add_pass_events();
});
back13.addEventListener("click", () => {
  hidePopup_open_close(app4_lock_style);

  theme_option.style.pointerEvents = "auto";
  animationInSetting.style.pointerEvents = "auto";
  AboutInSetting.style.pointerEvents = "auto";

  remove_pass_events();
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

function handleBoxPass1() {
  remove_pass_btn.style.display = "none";
  showPopup_open_close(crea_pass);
  if (pass_password == "") {
    stage_crea_pass = 1;
    document.getElementById("title_crea_pass").textContent = "Tạo mật mã mới";
  }
}

function handleBack14() {
  stage_crea_pass = 0;
  input_crea_pass = "";
  newPass_crea_pass = "";
  document.getElementById("title_crea_pass").textContent =
    pass_password === "" ? "Tạo mật mã mới" : "Nhập mật mã cũ";
  document.getElementById("error_crea_pass").textContent = "";
  updateDots_crea_pass();
  hidePopup_open_close(crea_pass);
  remove_pass_btn.style.display = "none";
}

function handleBoxPass2() {
  if (pass_password != "") {
    box_pass2.classList.toggle("off");
    status_pass2.textContent = box_pass2.classList.contains("off")
      ? "OFF"
      : "ON";
    finger_biometrics = box_pass2.classList.contains("off") ? 0 : 1;
    localStorage.setItem("finger_saved", finger_biometrics.toString());
  } else tb_system("create password first");
}

function add_pass_events() {
  box_pass1.addEventListener("click", handleBoxPass1);
  back14.addEventListener("click", handleBack14);
  box_pass2.addEventListener("click", handleBoxPass2);
}

function remove_pass_events() {
  box_pass1.removeEventListener("click", handleBoxPass1);
  back14.removeEventListener("click", handleBack14);
  box_pass2.removeEventListener("click", handleBoxPass2);
}

if (saved_finger_local == 0) {
  box_pass2.classList.add("off");
  finger_icon_btn.style.fill = "#000000";
  status_pass2.textContent = box_pass2.classList.contains("off") ? "OFF" : "ON";
  finger_biometrics = box_pass2.classList.contains("off") ? 0 : 1;
}

let blur_app = 0;

function handleBlurAppToggle() {
  blurAppBtn.classList.toggle("active");
  blur_app = blurAppBtn.classList.contains("active") ? 1 : 0;

  if (blur_app) {
    lp.style.filter = "blur(20px)";
    localStorage.setItem("blur_App_saved", "1");
  } else {
    lp.style.filter = "blur(0px)";
    localStorage.removeItem("blur_App_saved");
  }
}

//theme option
theme_option.addEventListener("click", () => {
  showPopup_open_close(app4_theme);

  AboutInSetting.style.pointerEvents = "none";
  animationInSetting.style.pointerEvents = "none";
  updateTime2();

  wallpaper_btn.addEventListener("click", handleOpenWallpaperPopup);
  wallpaper_btn2.addEventListener("click", handleOpenWallpaperPopup);
  back4.addEventListener("click", handleCloseWallpaperPopup);

  aod_btn.addEventListener("click", handleOpenAODOption);
  back5.addEventListener("click", handleCloseAODOption);

  lock_btn.addEventListener("click", handleShowLockOption);
  back6.addEventListener("click", handleHideLockOption);

  home_btn.addEventListener("click", showHomeApp);
  back8.addEventListener("click", hideHomeApp);

  finger.addEventListener("click", showFingerPopup);
  back9.addEventListener("click", hideFingerPopup);
});
back3.addEventListener("click", () => {
  hidePopup_open_close("app4theme");

  AboutInSetting.style.pointerEvents = "auto";
  animationInSetting.style.pointerEvents = "auto";

  wallpaper_btn.removeEventListener("click", handleOpenWallpaperPopup);
  wallpaper_btn2.removeEventListener("click", handleOpenWallpaperPopup);
  back4.removeEventListener("click", handleCloseWallpaperPopup);

  aod_btn.removeEventListener("click", handleOpenAODOption);
  back5.removeEventListener("click", handleCloseAODOption);

  lock_btn.removeEventListener("click", handleShowLockOption);
  back6.removeEventListener("click", handleHideLockOption);

  home_btn.removeEventListener("click", showHomeApp);
  back8.removeEventListener("click", hideHomeApp);

  finger.removeEventListener("click", showFingerPopup);
  back9.removeEventListener("click", hideFingerPopup);
});

function handleOpenWallpaperPopup() {
  showPopup_open_close(wallpaper_option);
  addWallpaperImageListeners();
}
function handleCloseWallpaperPopup() {
  hidePopup_open_close(wallpaper_option);
  removeWallpaperImageListeners();
}

const buttons = document.querySelectorAll(".img-button");
const wallpaper_preview = document.querySelector(".wallpaper-preview");
const wallpaper_preview2 = document.querySelector(".wallpaper-preview2");
const wallPaper2 = document.querySelector(".wallpaper2");
const addBtn = document.getElementById("addBtn");

function setActive(btn, imageUrl) {
  wallpaper.style.backgroundImage = `url(${imageUrl})`;
  wallpaper_preview.style.backgroundImage = `url(${imageUrl})`;
  wallpaper_preview2.style.backgroundImage = `url(${imageUrl})`;
  wallpaper2.style.backgroundImage = `url(${imageUrl})`;

  localStorage.setItem("savedWallpaper", imageUrl);
  buttons.forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
}

function handleImageButtonClick(e) {
  const img = e.currentTarget.getAttribute("data-img");
  setActive(e.currentTarget, img);
}

function handleAddButtonClick() {
  fileInput.value = "";
  fileInput.click();
}

function handleFileInputChange(event) {
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
}

buttons[0].click();

function addWallpaperImageListeners() {
  buttons.forEach((btn) => {
    if (btn !== addBtn) {
      btn.addEventListener("click", handleImageButtonClick);
    }
  });

  addBtn.addEventListener("click", handleAddButtonClick);
  fileInput.addEventListener("change", handleFileInputChange);
}

function removeWallpaperImageListeners() {
  buttons.forEach((btn) => {
    if (btn !== addBtn) {
      btn.removeEventListener("click", handleImageButtonClick);
    }
  });

  addBtn.removeEventListener("click", handleAddButtonClick);
  fileInput.removeEventListener("change", handleFileInputChange);
}

function handleOpenAODOption() {
  showPopup_open_close(aod_option);
  addWallpaperSettingListeners();
}
function handleCloseAODOption() {
  hidePopup_open_close(aod_option);
  removeWallpaperSettingListeners();
}

let always_on_displays = 1;
let hide_wallpaper = 0;

function handleToggleAlwaysOnDisplays() {
  const el = document.getElementById("Alway-on-displays");
  el.classList.toggle("active");
  always_on_displays = el.classList.contains("active") ? 1 : 0;

  localStorage.setItem("always_on_displays_saved", always_on_displays);

  const hideWallEl = document.getElementById("setting-item-hide-wall");

  if (always_on_displays) {
    hideWallEl.style.filter = "brightness(1)";
    hideWallEl.style.pointerEvents = "auto";

    lockscreen_style_opacity = 1;
    hide_wallpaper = 0;

    wallpaper_lock_off_opacity = 1;
    wallpaper_lock_off_height = 50;
    wallpaper_lock_off_scale = 40;
    wallpaper_lock_off_borderRadius = 0;
    wallpaper_lock_off_transform = "translateY(0px)";

    lockclock_style_transform = "scale(0.95) translateY(160px)";
    dateText_style_transform = "translateY(150px) translateX(-50%) scale(0.95)";

    localStorage.removeItem("always_on_displays_saved");
    localStorage.removeItem("hide_wallpaper_saved");
  } else {
    hideWallEl.style.filter = "brightness(0.7)";
    hideWallEl.style.pointerEvents = "none";

    document.getElementById("Hide-wallPaper").classList.remove("active");
    hide_wallpaper = 1;
    lockscreen_style_opacity = 0;

    wallpaper_lock_off_opacity = 0;
    wallpaper_lock_off_height = wallpaper_lock_height;
    wallpaper_lock_off_scale = wallpaper_lock_scale;
    wallpaper_lock_off_borderRadius = wallpaper_lock_borderRadius;
    wallpaper_lock_off_transform = wallpaper_lock_transform;

    dateText_style_transform = "translateX(-50%) scale(0.9) translateY(10px)";
    lockclock_style_transform = "scale(0.95) translateY(10px)";
  }
}

function handleToggleHideWallpaper() {
  const el = document.getElementById("Hide-wallPaper");
  el.classList.toggle("active");
  hide_wallpaper = el.classList.contains("active") ? 1 : 0;

  localStorage.setItem("hide_wallpaper_saved", hide_wallpaper);

  if (hide_wallpaper) {
    wallpaper_lock_off_opacity = 0;
    wallpaper_lock_off_height = wallpaper_lock_height;
    wallpaper_lock_off_scale = wallpaper_lock_scale;
    wallpaper_lock_off_borderRadius = wallpaper_lock_borderRadius;
    wallpaper_lock_off_transform = wallpaper_lock_transform;

    dateText_style_transform = "translateX(-50%) scale(0.9) translateY(10px)";
    lockclock_style_transform = "scale(0.95) translateY(10px)";
  } else {
    wallpaper_lock_off_opacity = 1;
    wallpaper_lock_off_height = 50;
    wallpaper_lock_off_scale = 40;
    wallpaper_lock_off_borderRadius = 0;
    wallpaper_lock_off_transform = "translateY(0px)";

    lockclock_style_transform = "scale(0.95) translateY(160px)";
    dateText_style_transform = "translateY(150px) translateX(-50%) scale(0.95)";

    localStorage.removeItem("hide_wallpaper_saved");
  }
}

function addWallpaperSettingListeners() {
  document
    .getElementById("Alway-on-displays")
    .addEventListener("click", handleToggleAlwaysOnDisplays);
  document
    .getElementById("Hide-wallPaper")
    .addEventListener("click", handleToggleHideWallpaper);
}
function removeWallpaperSettingListeners() {
  document
    .getElementById("Alway-on-displays")
    .removeEventListener("click", handleToggleAlwaysOnDisplays);
  document
    .getElementById("Hide-wallPaper")
    .removeEventListener("click", handleToggleHideWallpaper);
}

//lock screen option
function handleShowLockOption() {
  showPopup_open_close(lock_option);

  colorCircles.forEach((circle) => {
    circle.addEventListener("click", handleColorCircleClick);
  });

  customColorBtn.addEventListener("click", handleCustomColorClick);
  colorPicker.addEventListener("input", handleColorPickerInput);
  sizeSlider.addEventListener("input", handleSizeSliderInput);

  document.getElementById("btn1").addEventListener("click", handleBtn1Click);
  document.getElementById("btn2").addEventListener("click", handleBtn2Click);
}
function handleHideLockOption() {
  hidePopup_open_close(lock_option);

  colorCircles.forEach((circle) => {
    circle.removeEventListener("click", handleColorCircleClick);
  });

  customColorBtn.removeEventListener("click", handleCustomColorClick);
  colorPicker.removeEventListener("input", handleColorPickerInput);
  sizeSlider.removeEventListener("input", handleSizeSliderInput);

  document.getElementById("btn1").removeEventListener("click", handleBtn1Click);
  document.getElementById("btn2").removeEventListener("click", handleBtn2Click);
}

const clock_preview = document.getElementById("clock_preview");
const colorCircles = document.querySelectorAll(".color-circle");
const customColorBtn = document.getElementById("customColor");
const colorPicker = document.getElementById("colorPicker");
const sizeSlider = document.getElementById("sizeSlider");
target.innerText += "yA";
const date_preview = document.getElementById("dateTextPreview");

function handleColorCircleClick(e) {
  const color = e.currentTarget.getAttribute("data-color");
  if (color) {
    clock_preview.style.color = color;
    lockclock.style.color = color;
    dateText.style.color = color;
    date_preview.style.color = color;
    localStorage.setItem("color_lock_saved", color);
  }
}

function handleCustomColorClick() {
  colorPicker.click();
}

function handleColorPickerInput() {
  const value = colorPicker.value;
  clock_preview.style.color = value;
  lockclock.style.color = value;
  dateText.style.color = value;
  date_preview.style.color = value;
}

function handleSizeSliderInput() {
  const size = sizeSlider.value;
  clock_preview.style.fontSize = `${size}px`;
  lockclock.style.fontSize = `${size}px`;
  // Nếu cần chỉnh date font size theo tỉ lệ thì mở lại dòng dưới
  // date_preview.style.fontSize = `calc(${size}px / 5)`;
  // dateText.style.fontSize = `calc(${size}px / 5)`;
}

function handleBtn1Click() {
  wallpaper_lock_height = 70;
  wallpaper_lock_scale = 80;
  wallpaper_lock_borderRadius = 20;
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
}

function handleBtn2Click() {
  wallpaper_lock_height = 100;
  wallpaper_lock_scale = 100;
  wallpaper_lock_borderRadius = 50;
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
}

target.innerText += "15";

function showHomeApp() {
  showPopup_open_close(app4_home);

  // Scale Icon
  buttons_size.forEach((button2) => {
    button2.addEventListener("click", handleScaleIcon);
  });

  // Dock Bar Toggle
  document
    .getElementById("dock-bar")
    .addEventListener("click", handleDockBarToggle);

  // Dark Mode Toggle
  document
    .getElementById("dark-mode")
    .addEventListener("click", handleDarkModeToggle);

  icon_btn.addEventListener("click", showIconPopup);
  back12.addEventListener("click", hideIconPopup);
}
function hideHomeApp() {
  hidePopup_open_close(app4_home);

  buttons_size.forEach((button2) => {
    button2.removeEventListener("click", handleScaleIcon);
  });

  document
    .getElementById("dock-bar")
    .removeEventListener("click", handleDockBarToggle);
  document
    .getElementById("dark-mode")
    .removeEventListener("click", handleDarkModeToggle);

  icon_btn.removeEventListener("click", showIconPopup);
  back12.removeEventListener("click", hideIconPopup);
}

let scale_icon = 100; // Biến mặc định ban đầu là 120
let dock_bar = 1;
let dark_mode = 1;

const buttons_size = document.querySelectorAll(".scale-button");
const acctive_button_size = document.querySelector(
  '.scale-button[data-scale="120"]'
);

if (acctive_button_size) {
  acctive_button_size.classList.add("active");
}

function handleScaleIcon(e) {
  buttons_size.forEach((btn) => btn.classList.remove("active"));
  this.classList.add("active");

  scale_icon = parseInt(this.dataset.scale);
  localStorage.setItem("scale_icon_saved", scale_icon);

  for (let i = 1; i <= 11; i++) {
    boxes[`box${i}`].style.scale = `${scale_icon}%`;
  }
  if (currentOpeningBtn) currentOpeningBtn.style.scale = `100%`;
}

function handleDockBarToggle() {
  this.classList.toggle("active");
  dock_bar = this.classList.contains("active") ? 1 : 0;

  if (dock_bar) {
    document.querySelector(".khayapp").style.opacity = 1;
    localStorage.removeItem("dock_bar_saved");
  } else {
    document.querySelector(".khayapp").style.opacity = 0;
    localStorage.setItem("dock_bar_saved", 1);
  }
}

function handleDarkModeToggle() {
  this.classList.toggle("active");
  dark_mode = this.classList.contains("active") ? 1 : 0;

  localStorage.setItem("dark_mode_saved", dark_mode);
  if (!dark_mode) localStorage.removeItem("dark_mode_saved");

  set_dark_mode(dark_mode);
}

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
    app4_icon.style.background = "#010101";
    aod_option.style.background = "#010101";
    wallpaper_option.style.background = "#010101";
    app4_lock_style.style.background = "#010101";
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

    document.querySelectorAll(".track_music").forEach((el) => {
      el.style.background = "#171719";
      el.style.color = "#ffffff";
    });

    document.querySelectorAll(".player-popup_music").forEach((el) => {
      el.style.background = "#171719";
      el.style.color = "#ffffff";
    });
    document.querySelectorAll(".khaysetting1").forEach((el) => {
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
    app4_icon.style.color = "#eaeaea";
    document.getElementById("app4credits").style.color = "#eaeaea";

    aod_option.style.color = "#eaeaea";
    wallpaper_option.style.color = "#eaeaea";
    app4_lock_style.style.color = "#eaeaea";

    document.querySelectorAll(".button-finger").forEach((el) => {
      el.style.background = "#171719";
      el.style.color = "#ffffff";
    });

    document.querySelector(".khaysetting1-2").style.background = "#171719";
    document.querySelector(".khaysetting3").style.background = "#171719";
    document.querySelector(".khaysetting5").style.background = "#171719";
    document.querySelector(".khaysetting4").style.background = "#171719";
    document.querySelector(".khaysetting1-1").style.background = "#171719";
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
    app4language.style.background = "#eaeaea";
    app4_icon.style.background = "#eaeaea";
    wallpaper_option.style.background = "#eaeaea";
    aod_option.style.background = "#eaeaea";
    app4_lock_style.style.background = "#eaeaea";
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

    document.querySelectorAll(".track_music").forEach((el) => {
      el.style.color = "#171719";
      el.style.background = "#ffffff";
    });

    document.querySelectorAll(".player-popup_music").forEach((el) => {
      el.style.color = "#171719";
      el.style.background = "#ffffff";
    });

    document.querySelectorAll(".khaysetting1").forEach((el) => {
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
    app4language.style.color = "#010101";
    app4_icon.style.color = "#010101";
    wallpaper_option.style.color = "#010101";
    aod_option.style.color = "#010101";
    app4_lock_style.style.color = "#010101";
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

    document.querySelector(".khaysetting1-2").style.background = "#ffffff";
    document.querySelector(".khaysetting3").style.background = "#ffffff";
    document.querySelector(".khaysetting5").style.background = "#ffffff";
    document.querySelector(".khaysetting4").style.background = "#ffffff";
    document.querySelector(".khaysetting1-1").style.background = "#ffffff";
  }
}

function showFingerPopup() {
  showPopup_open_close(app4_finger);

  btnWhite.addEventListener("click", handleBtnWhiteClick);
  btnBlue.addEventListener("click", handleBtnBlueClick);
}
function hideFingerPopup() {
  hidePopup_open_close(app4_finger);

  btnWhite.removeEventListener("click", handleBtnWhiteClick);
  btnBlue.removeEventListener("click", handleBtnBlueClick);
}

const fingerprint_preview = document.getElementById("fingerprint_preview");
const btnWhite = document.getElementById("btn-white");
const btnBlue = document.getElementById("btn-blue");

fingerprint_preview.style.filter = "brightness(1000%) grayscale(100%)";
fingerprint.style.filter = "brightness(1000%) grayscale(100%)";
btnWhite.style.border = "2px solid aqua";

function handleBtnWhiteClick() {
  fingerprint_preview.style.filter = "brightness(1000%) grayscale(100%)";
  fingerprint.style.filter = "brightness(1000%) grayscale(100%)";
  btnWhite.classList.add("active");
  btnBlue.classList.remove("active");
  btnBlue.style.border = "2px solid rgb(225, 225, 225)";
  btnWhite.style.border = "2px solid aqua";
  footerText.style.color = "rgb(255, 255, 255)";
  localStorage.setItem("btn_finger_saved", "btnWhite");
}

function handleBtnBlueClick() {
  fingerprint_preview.style.filter =
    "brightness(0) saturate(100%) invert(72%) sepia(35%) saturate(1172%) hue-rotate(174deg) brightness(104%) contrast(104%)";
  fingerprint.style.filter =
    "brightness(0) saturate(100%) invert(72%) sepia(35%) saturate(1172%) hue-rotate(174deg) brightness(104%) contrast(104%)";
  btnWhite.style.border = "2px solid rgb(225, 225, 225)";
  btnBlue.style.border = "2px solid aqua";
  footerText.style.color = "#6cd0ff";
  localStorage.setItem("btn_finger_saved", "btnBlue");
}

function showIconPopup() {
  showPopup_open_close(app4_icon);
}
function hideIconPopup() {
  hidePopup_open_close(app4_icon);
}

// ==-- ICON PACK --==
icon_originos();
function icon_originos() {
  document.querySelectorAll(".box_icon").forEach((el) => {
    el.style.border = "2px solid gray";
  });
  document.getElementById("originos_icon").style.border = "2px solid aqua";
  document.documentElement.style.setProperty("--bg-size_img", "105%");

  setIconAndBackgroundGradient(".box1", "originos_data/system_calculator.png");
  setIconAndBackgroundGradient(".box2", "originos_data/system_filemanager.png");
  setIconAndBackgroundGradient(".box3", "originos_data/system_music.png");
  setIconAndBackgroundGradient(".box4", "originos_data/system_settings.png");
  setIconAndBackgroundGradient(".box5", "originos_data/system_messages.png");
  setIconAndBackgroundGradient(".box6", "originos_data/system_photos.png");
  setIconAndBackgroundGradient(".box7", "originos_data/system_calendar.png");
  setIconAndBackgroundGradient(".box8", "originos_data/system_dialer.png");
  setIconAndBackgroundGradient(".box9", "originos_data/system_clock.png");
  setIconAndBackgroundGradient(".box10", "originos_data/system_compass.png");
}

function icon_hyperos() {
  document.querySelectorAll(".box_icon").forEach((el) => {
    el.style.border = "2px solid gray";
  });
  document.getElementById("hyperos_icon").style.border = "2px solid aqua";
  document.documentElement.style.setProperty("--bg-size_img", "115%");

  setIconAndBackgroundGradient2(
    ".box1",
    "originos_data/hype_icon/system_calculator.png"
  );
  setIconAndBackgroundGradient2(
    ".box2",
    "originos_data/hype_icon/system_filemanager.png"
  );
  setIconAndBackgroundGradient2(
    ".box3",
    "originos_data/hype_icon/system_music.png"
  );
  setIconAndBackgroundGradient2(
    ".box4",
    "originos_data/hype_icon/system_settings.png"
  );
  setIconAndBackgroundGradient2(
    ".box5",
    "originos_data/hype_icon/system_messages.png"
  );
  setIconAndBackgroundGradient2(
    ".box6",
    "originos_data/hype_icon/system_photos.png"
  );
  setIconAndBackgroundGradient2(
    ".box7",
    "originos_data/hype_icon/system_calendar.png"
  );
  setIconAndBackgroundGradient2(
    ".box8",
    "originos_data/hype_icon/system_dialer.png"
  );
  setIconAndBackgroundGradient2(
    ".box9",
    "originos_data/hype_icon/system_clock.png"
  );
  setIconAndBackgroundGradient2(
    ".box10",
    "originos_data/hype_icon/system_compass.png"
  );
}

function icon_ios() {
  document.querySelectorAll(".box_icon").forEach((el) => {
    el.style.border = "2px solid gray";
  });
  document.getElementById("ios_icon").style.border = "2px solid aqua";
  document.documentElement.style.setProperty("--bg-size_img", "115%");

  setIconAndBackgroundGradient(".box1", "originos_data/i_icon/calculator.png");
  setIconAndBackgroundGradient(".box2", "originos_data/i_icon/files.png");
  setIconAndBackgroundGradient(".box3", "originos_data/i_icon/music.png");
  setIconAndBackgroundGradient(".box4", "originos_data/i_icon/settings.png");
  setIconAndBackgroundGradient(".box5", "originos_data/i_icon/messages.png");
  setIconAndBackgroundGradient(".box6", "originos_data/i_icon/gallery.png");
  setIconAndBackgroundGradient(".box7", "originos_data/i_icon/calendar.png");
  setIconAndBackgroundGradient(".box8", "originos_data/i_icon/phone.png");
  setIconAndBackgroundGradient(".box9", "originos_data/i_icon/clock.png");
  setIconAndBackgroundGradient(".box10", "originos_data/i_icon/compass.png");
}

function icon_coloros() {
  document.querySelectorAll(".box_icon").forEach((el) => {
    el.style.border = "2px solid gray";
  });
  document.getElementById("coloros_icon").style.border = "2px solid aqua";
  document.documentElement.style.setProperty("--bg-size_img", "100%");

  setIconAndBackgroundGradient(".box1", "originos_data/o_icon/calculator.png");
  setIconAndBackgroundGradient(".box2", "originos_data/o_icon/files.png");
  setIconAndBackgroundGradient(".box3", "originos_data/o_icon/music.png");
  setIconAndBackgroundGradient(".box4", "originos_data/o_icon/settings.png");
  setIconAndBackgroundGradient(".box5", "originos_data/o_icon/messages.png");
  setIconAndBackgroundGradient(".box6", "originos_data/o_icon/gallery.png");
  setIconAndBackgroundGradient(".box7", "originos_data/o_icon/calendar.png");
  setIconAndBackgroundGradient(".box8", "originos_data/o_icon/phone.png");
  setIconAndBackgroundGradient(".box9", "originos_data/o_icon/clock.png");
  setIconAndBackgroundGradient(".box10", "originos_data/o_icon/compass.png");
}

const root = document.documentElement;
const slider = document.getElementById("radius_slider");
const preview = document.getElementById("preview_icon");

slider.addEventListener("input", () => {
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  const value = slider.value;
  preview.style.borderRadius = `${value}px`;
});

function setIconAndBackgroundGradient2(boxSelector, imageUrl) {
  const box = document.querySelector(boxSelector);
  if (!box) return;

  // Gán icon vào CSS biến
  box.style.setProperty("--bg--originos", `url("${imageUrl}")`);

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = imageUrl;

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const w = img.width;
    const h = img.height;

    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(img, 0, 0);

    const middleY = Math.floor(h / 2);
    const leftX = Math.min(8, w - 1);
    const rightX = Math.max(w - 8, 0);

    try {
      const leftColorData = ctx.getImageData(leftX, middleY, 1, 1).data;
      const rightColorData = ctx.getImageData(rightX, middleY, 1, 1).data;

      const leftColor = `rgb(${leftColorData[0]}, ${leftColorData[1]}, ${leftColorData[2]})`;
      const rightColor = `rgb(${rightColorData[0]}, ${rightColorData[1]}, ${rightColorData[2]})`;

      box.style.background = `linear-gradient(to right, ${leftColor}, ${rightColor})`;
    } catch (e) {
      console.warn("getImageData error:", e);
      box.style.background = "#eaeaea"; // fallback
    }
  };
}

function setIconAndBackgroundGradient(boxSelector, imageUrl) {
  const box = document.querySelector(boxSelector);
  if (!box) return;

  // Gán icon vào ::before
  box.style.setProperty("--bg--originos", `url("${imageUrl}")`);

  const img = new Image();
  img.crossOrigin = "anonymous"; // rất quan trọng với GitHub Raw
  img.src = imageUrl;

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const w = img.width;
    const h = img.height;

    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(img, 0, 0);

    const centerX = Math.floor(w / 2);
    const topY = Math.min(8, h - 1);
    const bottomY = Math.max(h - 8, 0);

    try {
      const top = ctx.getImageData(centerX, topY, 1, 1).data;
      const bottom = ctx.getImageData(centerX, bottomY, 1, 1).data;

      const topColor = `rgb(${top[0]}, ${top[1]}, ${top[2]})`;
      const bottomColor = `rgb(${bottom[0]}, ${bottom[1]}, ${bottom[2]})`;

      box.style.background = `linear-gradient(to bottom, ${topColor}, ${bottomColor})`;
    } catch (e) {
      box.style.background = "#eaeaea"; // fallback
    }
  };
}

function removeAllUIEventListeners() {
  // Gỡ popup version
  vesion_setting.removeEventListener("click", showPopup_open_close(credits));
  back10.removeEventListener("click", handleHideVersion);

  khaysetting1_2.removeEventListener("click", handleShowCredits);
  back7.removeEventListener("click", handleHideCredits);

  wallpaper_btn.removeEventListener("click", handleOpenWallpaperPopup);
  wallpaper_btn2.removeEventListener("click", handleOpenWallpaperPopup);
  back4.removeEventListener("click", handleCloseWallpaperPopup);

  aod_btn.removeEventListener("click", handleOpenAODOption);
  back5.removeEventListener("click", handleCloseAODOption);

  lock_btn.removeEventListener("click", handleShowLockOption);
  back6.removeEventListener("click", handleHideLockOption);

  home_btn.removeEventListener("click", showHomeApp);
  back8.removeEventListener("click", hideHomeApp);

  finger.removeEventListener("click", showFingerPopup);
  back9.removeEventListener("click", hideFingerPopup);

  remove_pass_events();
}

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

lp2.addEventListener("pointerup", () => {
  dongnotification();
});

function monotification() {
  clock.style.transition = "all 0.5s cubic-bezier(0.23, 0.55, 0.54, 0.97)";
  clock.style.transform = `translateX(25px) translateY(50px) scale(calc(1 + 50 / 40))`;
  lp2.style.transition = "all 0s";
  notificationcenter.classList.add("open");
  lp2.style.opacity = `1`;
  lp2.style.zIndex = 19999;
  clock.classList.add("open");
  thanhS1.style.pointerEvents = "none";
}
function dongnotification() {
  clock.style.transition = "all 0.4s cubic-bezier(0.23, 0.55, 0.54, 0.97)";
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

  if (isRunning_clock) {
    island.style.height = "25px";
    island.style.borderRadius = "25px";
    island.style.width = "120px";
    buttons_island.classList.remove("show");
    time_island.classList.remove("show");
    image_island_right.classList.add("show");
  }

  if (isPlaying_music) {
    island2.style.transition = `all 0.35s ease-out, width 0.7s cubic-bezier(.14,1.34,.41,1)`;
    island2.style.width = "120px";
    image_island_right2.classList.remove("show");
    controls_music2.classList.remove("show");
    popupAuthor_music2.classList.remove("show");
    popupTitle_music2.classList.remove("show");
    progressBar_music2.classList.remove("show");
  }

  if (isPlaying_music && isRunning_clock) {
    island2.style.transition = `all 0.2s`;
    island2.style.width = "25px";
    island.style.transition = `all 0.4s cubic-bezier(.68,.01,.62,.14)`;
    island.style.width = "120px";
    island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
    island_circle.style.transform = "translateX(calc(-50% - 77px)) scale(1)";
    island2.style.transform = "translateX(-50%) translateY(0px) scale(1)";
    clickables["box3"].style.pointerEvents = "auto";
    clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
    clock.style.scale = "0.8";
    clock.style.left = "25px";
  }
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

    battery.addEventListener("levelchange", () => updateBatteryInfo(battery));
    battery.addEventListener("chargingchange", () =>
      updateBatteryInfo(battery)
    );
  });
}

const box_beta = document.getElementById('clickBox_beta');

box_beta.addEventListener('click', () => {
  tb_system("You're already in beta");
});
