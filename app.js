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
  return data.json()
})
.then(donnees=>{
    console.log(donnees.projets)
    contenu(donnees.projets)
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
            <img id="photo1" class="photosGauches initGauche" src="${donnee.photo1}" alt="">
            <img id="photo2" class="photosGauches initGauche" src="${donnee.photo2}" alt="">
            <img id="photo3" class="photosGauches initGauche" src="${donnee.photo3}" alt="">
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
            <img id="photo1" class="photosGauches initGauche" src="${donnee.photo1}" alt="">
            <img id="photo2" class="photosGauches initGauche" src="${donnee.photo2}" alt="">
            <img id="photo3" class="photosGauches initGauche" src="${donnee.photo3}" alt="">
        </div>
    </div>
</div>
*/

//j'appel mon slider
let slider = document.getElementById("slider")

/**
 * la fonction ajoute le contenu à mon slider
 * @param {chaine de caractère} X
 */
function contenu(X){
  // pour chaque objet du json
  X.forEach(donnee=>{
    console.log(donnee)
    // si la position dans le tableau est paire
    

    // je rajoute un slide gauche à slider
    // sinon je rajoute un slide droite à slider
  })
}