/* 

Passo a Passo abaixo:

5. Listar as Temporadas selecionadas
6.Remover a Temporada selecionada

*/

const container = document.querySelector(".main_section")

const playlistContainer = document.querySelector("#playlist_container")

let temporadasSelecionadas = []

//1. Criar o card Temporada

function cardPrincipal (temporada) {
    const article = document.createElement("article") //criação dinânima de tags no HTML
    article.classList.add("main_card")

    const mainCardTop = document.createElement("div")
    mainCardTop.classList.add("main_card_top")

    const h2 = document.createElement("h2")
    h2.innerText = temporada.nome

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

//3.Criar card Temporada selecionada

function cardTemporadaSelecionada (temporada) {
    const li = document.createElement("li")

    const imgTemporada = document.createElement("img")
    imgTemporada.src = temporada.imagemIcone
    imgTemporada.alt = temporada.nome

    const playlistCenter = document.createElement("div")
    playlistCenter.classList.add("playlist_li_center")

    playlistCenter.insertAdjacentHTML("afterbegin", `
        <div>
            <h4>${temporada.nome}</h4>
            <span>${temporada.temporada}</span>
        </div>
        <div class="playlist_li_playbutton">
            <img src="./assets/img/play-icon.png" alt="Play" title="Play">
            <span>Assistir agora</span>
            </div>
    `)

    const playlistEnd = document.createElement("div")
    playlistEnd.classList.add("playlist_li_end")

    const button = document.createElement("button")
    button.id = temporada.id

    playlistEnd.appendChild(button)

    li.append(imgTemporada, playlistCenter, playlistEnd)

    return li
}

//4. Adicionar um evento para adicionar a Temporada a fila

container.addEventListener("click", selecionarTemporada)
function selecionarTemporada(event) {
    const elementoHTML = event.target

    if (elementoHTML.tagName == "BUTTON") {
        const idTemporada = elementoHTML.id

        const temporadaEncontrada = temporadas.find((temporada) => temporada.id == idTemporada)

        temporadasSelecionadas.push(temporadaEncontrada)

        listarTemporadasSelecionadas()
    }
}

function listarTemporadasSelecionadas() {
    playlistContainer.innerHTML = ""
    for (let i = 0; i < temporadasSelecionadas.length; i++) {
        const card = cardTemporadaSelecionada(temporadasSelecionadas[i])
        playlistContainer.appendChild(card)
    }
}

//.6 Remover a Temporada selecionada

playlistContainer.addEventListener("click", function(event) {
    const elementoHTML = event.target 
    if (elementoHTML.tagName == "BUTTON")
        elementoHTML.closest("li").remove()
        console.log(temporadasSelecionadas)

        //capiturar o id do button em uma variável
        //usar o find para encontrar a temporada que tem o mesmo id do button
        //depois usar o infexOf para encontrar o índice daquela temporada no array temporadasSelecionadas
        //remover a temporada com o splice
})



