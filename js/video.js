const videOpenBtn = document.querySelectorAll(".videOpenBtn")
const videoOpen = document.querySelectorAll(".videoOpen")
const exitVideo = document.querySelectorAll(".exitVideo")

console.log(videOpenBtn);
console.log(videoOpen);

for (let i = 0; i < videOpenBtn.length; i++) {
    videOpenBtn[i].addEventListener('click', () => {
        videoOpen[i].style.display = 'block'
    })
    exitVideo[i].addEventListener('click', () => {
        videoOpen[i].style.display = 'none'
    })
}
