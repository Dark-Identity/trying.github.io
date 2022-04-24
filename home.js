
const content = document.querySelectorAll("#contents");
let inner = document.querySelectorAll(".content-scores");

content[0].lastElementChild.innerHTML = "";

let wind = document.querySelectorAll("#window");

for (var i = 0; i < (inner.length)-1 ; i++) {
  inner[i].addEventListener('click' , ()=>{
            wind[0].style.animation = "come 1s ease-in-out forwards";
  });
}

// window back btn;

let back = document.querySelectorAll(".bord-back-btn");
  back[0].addEventListener('click', ()=>{

        wind[0].style.animation = "go 1s ease-in-out forwards";
        // wind[0].style.animationdirection = "reverse";
   });
