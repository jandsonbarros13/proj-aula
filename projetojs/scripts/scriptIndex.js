//funçao pedir pelo whats
//https://drive.google.com/drive/folders/1FWvma7GjcPPKoZXZ8JdyoWw6tPNz8Hrb
function pedirWhatsapp() {
    const numeroWhats = "+55 85 98774 9362";
    const mensagem = "Ola vim pelo site e gostaria de fazer o pedido"
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhats}&text=${encodeURIComponent(mensagem)}`
    window.open(linkWhatsApp, '_blank')

}

//adicionando eventos aos botoes
let btn_whats = document.getElementById("pedWats")
btn_whats.addEventListener("click", pedirWhatsapp)

//Funçao ver cardapio
function verCardapio() {
    //url de loja parceira
    const caminhoCard = "cardapio.html"
    window.open(caminhoCard, '_blank')
}

let btn_cardapio = document.getElementById('cardapio')
btn_cardapio.addEventListener('click', verCardapio)