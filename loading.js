setTimeout(() => {
  finger_print.stop();
  const loading = document.getElementById("loading-screen");
  loading.style.opacity = "0";
  setTimeout(() => {
    loading.style.display = "none";
    finger_print.play();

    const el = document.getElementById("lolhaha");
    if (!el || el.textContent.trim() !== "tiktok: @sungsamtech - @._naq.") {
      localStorage.clear();
      sessionStorage.clear();
      location.reload();
    }

    setInterval(() => {
      const el = document.getElementById("lolhaha");
      if (!el || el.textContent.trim() !== "tiktok: @sungsamtech - @._naq.") {
        localStorage.clear();
        sessionStorage.clear();
        location.reload();
      }
    }, 10000);
  }, 300);
}, 1000); // 5 giây

setTimeout(() => {
  if (localStorage.getItem("hide_wallpaper_saved")) {
    document.getElementById("Hide-wallPaper").classList.add("active");
    hide_wallpaper = 1;

    wallpaper_lock_off_opacity = 0;
    wallpaper_lock_off_height = wallpaper_lock_height;
    wallpaper_lock_off_scale = wallpaper_lock_scale;
    wallpaper_lock_off_borderRadius = wallpaper_lock_borderRadius;
    wallpaper_lock_off_transform = wallpaper_lock_transform;

    dateText_style_transform = "translateX(-50%) scale(0.9) translateY(10px)";
    lockclock_style_transform = "scale(0.95) translateY(10px)";
  }

  if (localStorage.getItem("always_on_displays_saved") == 0) {
    document.getElementById("Alway-on-displays").classList.remove("active");
    always_on_displays = 0;

    document.getElementById("setting-item-hide-wall").style.filter =
      " brightness(0.7)";
    document.getElementById("setting-item-hide-wall").style.pointerEvents =
      "none";

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

  if (localStorage.getItem("color_lock_saved")) {
    clock_preview.style.color = localStorage.getItem("color_lock_saved");
    lockclock.style.color = localStorage.getItem("color_lock_saved");
    dateText.style.color = localStorage.getItem("color_lock_saved");
    date_preview.style.color = localStorage.getItem("color_lock_saved");
  }

  const saved_btn = localStorage.getItem("btn1_2_saved");
  if (saved_btn != null) {
    if (saved_btn == 1) {
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
    } else {
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

      wallpaper.style.transition =
        "all 0.4s cubic-bezier(0.23, 0.55, 0.54, 0.97)";
      wallpaper.style.height = `${wallpaper_lock_height}%`;
      wallpaper.style.scale = `${wallpaper_lock_scale}%`;
      wallpaper.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
      wallpaper.style.opacity = 1;

      wallpaper.style.transform = wallpaper_lock_transform;
    }
  }

  scale_icon = localStorage.getItem("scale_icon_saved");

  if (scale_icon) {
    for (let i = 1; i <= 11; i++) {
      boxes[`box${i}`].style.scale = `${scale_icon}%`;
    }
    document.querySelectorAll(".scale-button").forEach((el) => {
      el.classList.remove("active");
    });
    document
      .getElementById(`scale-button${scale_icon}`)
      .classList.add("active");
  }

  const savedFinger = localStorage.getItem("btn_finger_saved");

  if (savedFinger === "btnWhite") {
    fingerprint_preview.style.filter = "brightness(1000%) grayscale(100%)";
    fingerprint.style.filter = "brightness(1000%) grayscale(100%)";
    btnWhite.classList.add("active");
    btnBlue.classList.remove("active");
    btnBlue.style.border = "2px solid rgb(225, 225, 225)";
    btnWhite.style.border = "2px solid aqua";
  } else if (savedFinger === "btnBlue") {
    fingerprint_preview.style.filter =
      "brightness(0) saturate(100%) invert(72%) sepia(35%) saturate(1172%) hue-rotate(174deg) brightness(104%) contrast(104%)";
    fingerprint.style.filter =
      "brightness(0) saturate(100%) invert(72%) sepia(35%) saturate(1172%) hue-rotate(174deg) brightness(104%) contrast(104%)";
    btnWhite.classList.remove("active");
    btnBlue.classList.add("active");
    btnWhite.style.border = "2px solid rgb(225, 225, 225)";
    footerText.style.color = "#6cd0ff";
    btnBlue.style.border = "2px solid aqua";
  }

  const savedDockBar = localStorage.getItem("dock_bar_saved");

  if (localStorage.getItem("dock_bar_saved")) {
    dockToggle.classList.remove("active");
    khayApp.style.opacity = 0;
  }

  if (localStorage.getItem("blur_App_saved")) {
    lp.style.filter = "blur(20px)";
    document.getElementById("blurApp").classList.add("active");
  }

  if (localStorage.getItem("dark_mode_saved")) {
    set_dark_mode(localStorage.getItem("dark_mode_saved"));

    document.getElementById("dark-mode").classList.add("active");
    dark_mode = 1;
  }

  if (localStorage.getItem("savedWallpaper")) {
    wallpaper.style.backgroundImage = `url(${localStorage.getItem(
      "savedWallpaper"
    )})`;
    wallpaper_preview.style.backgroundImage = `url(${localStorage.getItem(
      "savedWallpaper"
    )})`;
    wallpaper_preview2.style.backgroundImage = `url(${localStorage.getItem(
      "savedWallpaper"
    )})`;
    wallpaper2.style.backgroundImage = `url(${localStorage.getItem(
      "savedWallpaper"
    )})`;

    document.querySelectorAll(".img-button").forEach((el) => {
      el.classList.remove("active");
    });
  }
}, 300);
