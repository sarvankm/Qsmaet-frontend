$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
});
const sec3h2 = document.querySelector(".sec3h2");
const sec3p = document.querySelector(".sec3p");

const myData = [
  {
    h2: "Sales",
    p: "Social media.Procurement and logisticsProcurement and logisticsProcurement and logisticsProcurement and logistics the available visuthe available visuthe available visu",
  },
  {
    h2: "Marketing",
    p: "Matawrapper lets you show your data as beautiful charts, maps or tables with a few clicks. Find out more about all the available visualization types.",
  },
  {
    h2: "Education",
    p: "LogisticsProcurement and logisticsProcurement and logisticsProcurement and logistics the available visuthe available visuthe available visu",
  },

  {
    h2: "Sosial Media",
    p: "Social media.Procurement and logisticsProcurement and logisticsProcurement and logisticsProcurement and logistics the available visuthe available visuthe available visu",
  },
  {
    h2: "Finance",
    p: "Candy is the best.Procurement and logisticsProcurement and logisticsProcurement and logisticsProcurement and logistics the available visuthe available visuthe available visu",
  },
  {
    h2: "Procurement and logistics",
    p: "Procurement and logisticsProcurement and logisticsProcurement and logisticsProcurement and logistics the available visuthe available visuthe available visu",
  },
];

let card = document.querySelectorAll(".card");
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("mouseover", (e) => {
    for (let j = 0; j < card.length; j++) {
      if (card[j].className == "card cardActive") {
        card[j].classList.remove("cardActive");
        card[j].children[0].src = "image/logisticImage.png";
      }
    }
    card[i].children[0].src = "image/logImgaeBlack.png";
    card[i].classList.add("cardActive");
    sec3h2.innerHTML = myData[i].h2;
    sec3p.innerHTML = myData[i].p;
  });
}
