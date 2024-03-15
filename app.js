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

let photos = document.querySelectorAll(".photosGauches")

photos.forEach(photo => {
    photo.addEventListener("click", () => {
        console.log("clic")
        translate(photo)
    })
})

function translate(x) {
    console.log(x)
    if (x.classList.contains("init")) {
        console.log("changement")
        x.classList.remove("init")
        x.classList.add("translate")
    }else{
        console.log("retour")
        x.classList.add("init")
        x.classList.remove("translate")
    }
}