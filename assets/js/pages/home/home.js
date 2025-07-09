
// MENU, BANNER & LOGO

let lastScroll = 0;
const logo = document.getElementById("logo")

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    const header = document.querySelector("#header")
    const banner = document.querySelector("#banner")

    if (currentScroll === 0) {
        header.style.top = "0"
        header.classList.remove("rolagem")
        logo.src = "./assets/img/global/logoLojaPreto.png"
    } else if (currentScroll < lastScroll) {
        header.style.top = "0"
        header.classList.add("rolagem")
        logo.src = "./assets/img/global/logoLojaBranca.png"
    } else {
        const headerY = header.getBoundingClientRect().height
        header.style.top = `-${headerY}px`
        logo.src = "./assets/img/global/logoLojaBranca.png"
    }

    banner?.classList.toggle("rolagem", currentScroll > 0)
    lastScroll = currentScroll
})

// ICONES

const cart = document.getElementById("cart")

// Carrinho vazio
cart.addEventListener("mouseover", () => {
    cart.classList.replace("bi-cart", "bi-cart-fill")
})

// Carrinho cheio
cart.addEventListener("mouseout", () => {
    cart.classList.replace("bi-cart-fill", "bi-cart")
})

// Roleta de IMG's

const imagens = [
    "./assets/img/pages/home/davi-img01.jpg",
    "./assets/img/pages/home/davi-img02.jpg",
    "./assets/img/pages/home/davi-img03.jpg",
    "./assets/img/pages/home/davi-img04.jpg"
]

const imagem =  document.getElementById("imgCafeBresa")
let index = 0

setInterval (() => {
    index = (index + 1) %imagens.length
    if (imagem) {
        imagem.src = imagens[index]
    }
}, 5000)