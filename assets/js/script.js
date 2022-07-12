/* 

Passo a Passo abaixo:

3.Criar card Temporada selecionada
4. Adicionar um evento para adicionar a Temporada a fila
5. Listar as Temporadas selecionadas
6.Remover a Temporada selecionada

*/

const container = document.querySelector('.main_section')

//1. Criar o card Temporada

function cardPrincipal (temporada) {
    const article = document.createElement("article") //criação dinânima de tags no HTML
    article.classList.add("main_card")

    const mainCardTop = document.createElement("div")
    mainCardTop.classList.add("main_card_top")

    const h2 = document.createElement("h2")
    h2.innerText = temporada.temporada

    const span = document.createElement("span")
    span.innerText = temporada.temporada

    const mainCardBottom = document.createElement("div")
    mainCardBottom.classList.add("main_card_bottom")

    const p = document.createElement("p")
    p.innerText = temporada.sinopse

    const button = document.createElement("button")
    button.innerText = "Adicionar à fila"
    button.id = temporada.id
    button.type = "button"

    mainCardTop.append(h2 , span)
    mainCardBottom.append(p, button)
    article.append(mainCardTop, mainCardBottom)

    return article
}

//2. Listar card

function listarTemporadas() {
    for (let i = 0; i < temporadas.length; i++) {
        let card = cardPrincipal(temporadas[i])
        container.appendChild(card)
    }
}

listarTemporadas()
