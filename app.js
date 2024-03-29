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

//j'appel mon slider
let slider = document.getElementById("slider")

/**
 * la fonction ajoute le contenu à mon slider
 * @param {Array} X
*/
function contenu(X,Y){
    Y.forEach(donnee=>{
        slider.innerHTML = `<div class="swiper-slide flex-column flex align-center">
                <div class="swiper-content flex space-between">
                    <div class="profil width100 flex justify-center gap">
                        <div class="photoProf width100"><img class="imgProfil" src="${donnee.photo}" alt="photo de profil"></div>
                        <div class="coordonnees width100 justify-center flex">
                            <div class="flex width100 justify-center civilite">
                                <h4>${donnee.nom}</h4>
                                <h4>${donnee.prenom}</h4>
                            </div>
                            <address>
                                <div><a class="flex align-center gap" href="tel:${donnee.telephone}"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>${donnee.telephone}</a></div>
                                <div><a class="flex align-center gap" href="mailto:${donnee.mail}"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>${donnee.mail}</a></div>
                            </address>
                        </div>
                    </div>
                    <div class="description width100 flex align-center gap16">
                        <h1>${donnee.titre}</h1>
                        <h3>${donnee.sousTitre}</h3>
                        <p>${donnee.description}</p>
                        <p>
                            <ul class="flex">
                                <legend>Sites :</legend>
                                <li>Portfolio</li>
                                <li>Vitrine</li>
                                <li>E-commerce</li>
                                <li>Application web</li>
                            </ul>
                            <ul class="flex">
                                <legend>Accompagnements :</legend>
                                <li>Audite SEO</li>
                                <li>Accessibilité (mise aux normes)</li>
                                <li>Formation / mentorat</li>
                            </ul>
                        </p>
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
                <div class="swiper-content flex-column flex space-between">
                    <div class="divPhoto width100 divPhotoGauche">
                        <img id="photo1" class="photosGauches initGauche init" src="${donnee.photo1}" alt="">
                        <img id="photo2" class="photosGauches initGauche init" src="${donnee.photo2}" alt="">
                        <img id="photo3" class="photosGauches initGauche init" src="${donnee.photo3}" alt="">
                    </div>
                    <div class="textContent width100 flex">
                        <h2>${donnee.titre}</h2>
                        <h3>${donnee.sousTitre}</h3>
                        <div class="flex gap">
                            <p>${donnee.para1}</p>
                            <p>${donnee.para2}</p>
                            <p>${donnee.para3}</p>
                        </div>
                        <div class="bouton"><a class="buttonGit" href="${donnee.github}" target="_blank" title="lien vers la page github du projet">Voir le rendu sur Github Pages</a></div>
                    </div>
                </div>
            </div>`
        }else{
            // sinon je rajoute un slide droite à slider
            slider.innerHTML += `<div class="swiper-slide">
                <div class="swiper-content flex-column-reverse flex space-between">
                    <div class="textContent width100 flex">
                        <h2>${donnee.titre}</h2>
                        <h3>${donnee.sousTitre}</h3>
                        <div class="flex gap">
                            <p>${donnee.para1}</p>
                            <p>${donnee.para2}</p>
                            <p>${donnee.para3}</p>
                        </div>
                        <div class="bouton"><a class="buttonGit" href="${donnee.github}" target="_blank" title="lien vers la page github du projet">Voir le rendu sur Github Pages</a></div>
                    </div>
                    <div class="divPhoto width100 divPhotoDroite">
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
            removeImg()
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
            removeImg()
            x.classList.remove("init")
            x.classList.add("translateDroite")
        }else{
            x.classList.add("init")
            x.classList.remove("translateDroite")
        }
    }
    /*
    ******************************IMAGE RETOUR ARRIERE**********************************
    */
    function removeImg(){
        photosDroites.forEach(photo =>{
            if(photo.classList.contains("init") === false){
                photo.classList.add("init")
                photo.classList.remove("translateDroite")
            }
        })
        photosGauches.forEach(photo =>{
            if(photo.classList.contains("init") === false){
                photo.classList.add("init")
                photo.classList.remove("translateGauche")
            }
        })
    }
}
