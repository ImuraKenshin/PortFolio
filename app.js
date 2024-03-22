var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
});

let photosGauches = document.querySelectorAll(".photosGauches")

photosGauches.forEach(photo => {
    photo.addEventListener("click", () => {
        translateGauche(photo)
    })
})

function translateGauche(x) {
    if (x.classList.contains("init")) {
        x.classList.remove("init")
        x.classList.add("translateGauche")
    }else{
        x.classList.add("init")
        x.classList.remove("translateGauche")
    }
}

let photosDroites = document.querySelectorAll(".photosDroites")

photosDroites.forEach(photo => {
    photo.addEventListener("click", () => {
        translateDroite(photo)
    })
})

function translateDroite(x) {
    if (x.classList.contains("init")) {
        x.classList.remove("init")
        x.classList.add("translateDroite")
    }else{
        x.classList.add("init")
        x.classList.remove("translateDroite")
    }
}

/*
************************************************************************************************
**********************************************FETCH*********************************************
************************************************************************************************
*/

fetch("./contenu.json")
.then(data=>{
  console.log(data)
  return data.json()
})
.then(donnees=>{
    console.log(donnees.projets)
})


/*
************************************************************************************************
********************************************CONTENU*********************************************
************************************************************************************************
*/

/*
<div class="swiper-slide slide2">
    <div class="swiper-content flex space-between">
        <div class="divPhoto divPhotoGauche">
            <img id="photo1" class="photosGauches initGauche" src="https://picsum.photos/id/237/200/300" alt="">
            <img id="photo2" class="photosGauches initGauche" src="https://picsum.photos/id/238/200/300" alt="">
            <img id="photo3" class="photosGauches initGauche" src="https://picsum.photos/id/239/200/300" alt="">
        </div>
        <div class="textContent">
            <img src="https://picsum.photos/id/240/200/300" alt="">
        </div>
    </div>
</div>



<div class="swiper-slide slide3 flex">
    <div class="swiper-content flex space-between">
        <div class="textContent">
            <img src="https://picsum.photos/id/240/200/300" alt="">
        </div>
        <div class="divPhoto divPhotoDroite">
            <img id="photo4" class="photosDroites initDroite" src="https://picsum.photos/id/237/200/300" alt="">
            <img id="photo5" class="photosDroites initDroite" src="https://picsum.photos/id/238/200/300" alt="">
            <img id="photo6" class="photosDroites initDroite" src="https://picsum.photos/id/239/200/300" alt="">
        </div>
    </div>
</div>
*/

//j'appel mon slider
let slider = document.getElementById("slider")