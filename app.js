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
    contenu(donnees.projets,donnees.profil)
    var swiper = new Swiper(".mySwiper", {
        grabCursor: true,
        effect: "creative",
        loop: true,
        creativeEffect: {
            prev: {
            shadow: true,
            translate: [0, 0, -400],
            },
            next: {
            translate: ["100%", 0, 0],
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
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
            <img id="photo4" class="photosDroites initDroite" src="${donnee.photo1}" alt="">
            <img id="photo5" class="photosDroites initDroite" src="${donnee.photo2}" alt="">
            <img id="photo6" class="photosDroites initDroite" src="${donnee.photo3}" alt="">
        </div>
    </div>
</div>
*/
/*
<img class="pictoCompet" src="./image/picto/icons8-html5-64.png" title="HTML5"><img class="pictoCompet" src="./image/picto/icons8-css3-100.png" title="CSS3"><img class="pictoCompet" src="./image/picto/icons8-js-64.png" title="JavaScript Vanilla"><img class="pictoCompet" src="./image/picto/icons8-document-64.png" title="SASS"><br>
<img class="pictoCompet" src="./image/picto/icons8-visual-studio-48.png" title="VS Code"><img class="pictoCompet" src="./image/picto/icons8-github-64.png" title="GitHub"><img class="pictoCompet" src="./image/picto/icons8-notion-64.png" title="Notion"><img class="pictoCompet" src="./image/picto/icons8-filezilla-48.png" title="FileZilla"><img class="pictoCompet" src="./image/picto/icons8-figma-48.png" title="Figma">
*/
//j'appel mon slider
let slider = document.getElementById("slider")

/**
 * la fonction ajoute le contenu à mon slider
 * @param {Array} X
*/
function contenu(X,Y){
    Y.forEach(donnee=>{
        slider.innerHTML = `<div class="swiper-slide flex align-center">
                <div class="swiper-content flex space-between">
                    <div class="profil flex justify-center gap">
                        <div><img class="imgProfil" src="https://picsum.photos/id/240/200/300" alt=""></div>
                        <div class="coordonnees">
                            <div class="flex civilite">
                                <h4>${donnee.nom}</h4>
                                <h4>${donnee.prenom}</h4>
                            </div>
                            <address>
                                <div><a class="flex align-center gap" href="tel:${donnee.telephone}"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>${donnee.telephone}</a></div>
                                <div><a class="flex align-center gap" href="mailto:${donnee.mail}"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>${donnee.mail}</a></div>
                            </address>
                        </div>
                    </div>
                    <div class="description flex align-center gap">
                        <h1>${donnee.titre}</h1>
                        <h3>${donnee.sousTitre}</h3>
                        <p>${donnee.description}</p>
                        <p>${donnee.services}</p>
                        <p><img class="pictoCompet" src="./image/picto/icons8-html5-64.png" title="HTML5"><img class="pictoCompet" src="./image/picto/icons8-css3-100.png" title="CSS3"><img class="pictoCompet" src="./image/picto/icons8-js-64.png" title="JavaScript Vanilla"><img class="pictoCompet" src="./image/picto/icons8-document-64.png" title="SASS"><br>
                        <img class="pictoCompet" src="./image/picto/icons8-visual-studio-48.png" title="VS Code"><img class="pictoCompet" src="./image/picto/icons8-github-64.png" title="GitHub"><img class="pictoCompet" src="./image/picto/icons8-notion-80.png" title="Notion"><img class="pictoCompet" src="./image/picto/icons8-filezilla-48.png" title="FileZilla"><img class="pictoCompet" src="./image/picto/icons8-figma-48.png" title="Figma"></p>
                    </div>
                </div>
            </div>`
    })
    // pour chaque objet du json
    for (let i = 0; i < X.length; i++) {
        let donnee = X[i]
        // si la position dans le tableau est paire
        if(i%2 == 0){
            // je rajoute un slide gauche à slider
            slider.innerHTML += `<div class="swiper-slide">
                <div class="swiper-content flex space-between">
                    <div class="divPhoto divPhotoGauche">
                        <img id="photo1" class="photosGauches initGauche init" src="${donnee.photo1}" alt="">
                        <img id="photo2" class="photosGauches initGauche init" src="${donnee.photo2}" alt="">
                        <img id="photo3" class="photosGauches initGauche init" src="${donnee.photo3}" alt="">
                    </div>
                    <div class="textContent flex">
                        <h2>${donnee.titre}</h2>
                        <h3>${donnee.sousTitre}</h3>
                        <div class="flex gap">
                            <p>${donnee.para1}</p>
                            <p>${donnee.para2}</p>
                            <p>${donnee.para3}</p>
                        </div>
                        <div><a href="${donnee.github}" target="_blank" title="lien vers la page github du projet"><button type="button">Voir sur Github</button></a></div>
                    </div>
                </div>
            </div>`
        }else{
            // sinon je rajoute un slide droite à slider
            slider.innerHTML += `<div class="swiper-slide">
                <div class="swiper-content flex space-between">
                    <div class="textContent flex">
                        <h2>${donnee.titre}</h2>
                        <h3>${donnee.sousTitre}</h3>
                        <div class="flex gap">
                            <p>${donnee.para1}</p>
                            <p>${donnee.para2}</p>
                            <p>${donnee.para3}</p>
                        </div>
                        <div><a href="${donnee.github}" target="_blank" title="lien vers la page github du projet"><button type="button">Voir sur Github</button></a></div>
                    </div>
                    <div class="divPhoto divPhotoDroite">
                        <img id="photo4" class="photosDroites initDroite init" src="${donnee.photo1}" alt="">
                        <img id="photo5" class="photosDroites initDroite init" src="${donnee.photo2}" alt="">
                        <img id="photo6" class="photosDroites initDroite init" src="${donnee.photo3}" alt="">
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


/**
 * La fonction active un translate sur les images au clic
 */
function clicImg(){

    /*
    ******************************PHOTOS GAUCHES**********************************
    */
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
    
    /*
    ******************************PHOTOS DROITES**********************************
    */
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
