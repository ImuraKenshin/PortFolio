window.addEventListener("DOMContentLoaded",()=>{})

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
    contenu(donnees.projets)
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
    clicImg()
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
            <img id="photo1" class="photosDroites initDroite" src="${donnee.photo1}" alt="">
            <img id="photo2" class="photosDroites initDroite" src="${donnee.photo2}" alt="">
            <img id="photo3" class="photosDroites initDroite" src="${donnee.photo3}" alt="">
        </div>
    </div>
</div>
*/

//j'appel mon slider
let slider = document.getElementById("slider")

/**
 * la fonction ajoute le contenu à mon slider
 * @param {Array} X
 */
function contenu(X){
    slider.innerHTML = `<div class="swiper-slide slide1">
            <div class="swiper-content flex space-between"></div>
        </div>`
    // pour chaque objet du json
    for (let i = 0; i < X.length; i++) {
        let donnee = X[i]
        // si la position dans le tableau est paire
        if(i%2 == 0){
            // je rajoute un slide gauche à slider
            slider.innerHTML += `<div class="swiper-slide slide2">
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
            </div>`
        }else{
            // sinon je rajoute un slide droite à slider
            slider.innerHTML += `<div class="swiper-slide slide3 flex">
                <div class="swiper-content flex space-between">
                    <div class="textContent">
                        <img src="https://picsum.photos/id/240/200/300" alt="">
                    </div>
                    <div class="divPhoto divPhotoDroite">
                        <img id="photo4" class="photosDroites initDroite" src="${donnee.photo1}" alt="">
                        <img id="photo5" class="photosDroites initDroite" src="${donnee.photo2}" alt="">
                        <img id="photo6" class="photosDroites initDroite" src="${donnee.photo3}" alt="">
                    </div>
                </div>
            </div>` 
        }   
    }
}


/*
************************************************************************************************
********************************************PHOTOS**********************************************
************************************************************************************************
*/

//fonction

function clicImg(){
    let photosGauches = document.querySelectorAll(".photosGauches")
    
    photosGauches.forEach(photo => {
        photo.addEventListener("click", () => {
            console.log("clic")
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
}

