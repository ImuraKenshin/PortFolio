window.addEventListener("DOMContentLoaded",()=>{})


let monStockage = localStorage
window.addEventListener("load",()=>{
    if(monStockage.getItem("luciole") === 'true'){
        access.checked = true
        access2.checked = true
        luciole()
    }else{
    }
})

// la section traite de l'accessibilté sur le site

let corps = document.getElementById("body")


// la fonction verifie si body possède la classe init, si oui elle enlève la classe init et change les valeurs des font

function luciole(){
    // est ce que body possède init?
    if(corps.classList.contains("init")){
        //j'enlève la classe init
        corps.classList.remove("init")
        //je change la valeur des fonts dans le root
        document.body.style.setProperty(`--font`,`"Luciole"`)
    }else{
        //je remet les valeurs des roots initiaux
        document.body.style.setProperty(`--font`,`"Times New Roman",times`)
        //j'ajoute la classe init
        corps.classList.add("init")
    }
}

// je vais chercher ma première checkbox

let access2 = document.getElementById("accessibilite2")

// j'écoute le changement de access

access2.addEventListener("click",()=>{
    luciole()
    monStockage.setItem("luciole",access2.checked)
})

let swiper = document.getElementById("slider")

swiper.addEventListener("click", ()=>{
    let burger = document.getElementById("burger")
    let lateral = document.getElementById("headerBurger")
    // j'ajoute la classe init
    burger.classList.add("init")
    // j'annule le déplacement du menu latéral
    lateral.style.transform = "translateX(200px)"
    // je remet l'icône du burger
    span1.classList.remove("burgerCroix1")
    span2.classList.remove("burgerCroix2")
    span3.classList.remove("burgerCroix3")
})