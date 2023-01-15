const taggleText = document.querySelectorAll('.taggleText')
const taggleBtn = document.querySelectorAll('.taggleBtn')
console.log(taggleText);

for (let i = 0; i < taggleBtn.length; i++) {
    taggleBtn[i].addEventListener('click', (e) => {
        let check = false
        if (e.target.innerHTML == "-") {
            check = true
        }
        for (let j = 0; j < taggleText.length; j++) {
            if (taggleText[j].className == "taggleText showText") {
                taggleText[j].classList.remove("showText")
                taggleBtn[j].innerHTML = "+"
            }
        }
        if (check == false) {
            taggleText[i].classList.add('showText')
            taggleBtn[i].innerHTML = "-"
        }

    })
}
