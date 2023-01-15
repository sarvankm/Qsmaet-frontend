const videOpenBtn = document.querySelectorAll(".videOpenBtn");
const videoOpen = document.querySelectorAll(".videoOpen");
const exitVideo = document.querySelectorAll(".exitVideo");

const shareOpenBtn = document.querySelectorAll(".shareOpenBtn");
const shareArea = document.querySelectorAll(".shareArea");
const shareExit = document.querySelectorAll(".shareExitBtn");

function OpenBox(clickBtn, openBox, exitBtn) {
  for (let i = 0; i < clickBtn.length; i++) {
    clickBtn[i].addEventListener("click", () => {
      openBox[i].style.display = "block";
    });
    exitBtn[i].addEventListener("click", () => {
      openBox[i].style.display = "none";
    });
  }
}

OpenBox(videOpenBtn, videoOpen, exitVideo);
OpenBox(shareOpenBtn, shareArea, shareExit);

