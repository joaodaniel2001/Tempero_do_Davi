
// MENU

let lastScroll = 0;
const logo = document.getElementById("logo")

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    const header = document.querySelector("header")

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

    lastScroll = currentScroll
})

// ICONES

const cart = document.getElementById ("cart")

// Carrinho vazio
cart.addEventListener ("mouseover", () => {
    cart.classList.replace ("bi-cart", "bi-cart-fill")
})

// Carrinho cheio
cart.addEventListener ("mouseout", () => {
    cart.classList.replace ("bi-cart-fill", "bi-cart")
})