const comboScreen = document.querySelector(".combo-notes-screen")
const seriesScreen = document.querySelector(".series-screen")
const awardScreen = document.querySelector(".anime-award-screen")
const clickWindow = document.querySelector(".hab-click-container")
const siteAbout = document.querySelector(".hab-click-p")
const windowClose = document.querySelector(".hab-click-x")
const btnGit = document.querySelector(".hab-click-git")
const btnSite = document.querySelector(".hab-click-site")

let urlSite = ""
let urlGit = ""




const abrirCombo = () => {
    siteAbout.innerHTML = "Este projeto usa apenas JavaScript vanilla. Basicamente, usa manipulação de DOM e a opção de salvar o arquivo em seu computador ou celular.<br><br><i>Para amantes de jogos de luta, com este site você pode anotar combos e salvá-lo, podendo consultar e praticar no seu jogo quando quiser.</i><br><br>É meu projeto mais simples, mas com certeza é o mais usado até hoje."
    clickWindow.classList.remove("hide")
    mudaLinkSite("https://phpedrassi.github.io/combo-notes/")
    mudaLinkGit("https://github.com/phpedrassi/combo-notes")
}

const abrirSerie = () => {
    siteAbout.innerHTML = "Este projeto usa JavaScript vanilla. Implementei filtros para pesquisa e salvamento no Local Storage.<br><br><i>Um site para não se perder nas séries que você assiste. Você pode anotar qual episódio parou, se está esperando nova temporada ou se já terminou de assistir.</i><br><br>Futuramente, com o back-end, este projeto irá crescer bastante."
    clickWindow.classList.remove("hide")
    mudaLinkSite("https://phpedrassi.github.io/MinhasSeries/")
    mudaLinkGit("https://github.com/phpedrassi/MinhasSeries")
}

const abrirAward = () => {
    siteAbout.innerHTML = "Este projeto foi feito utilisando React com JavaScript, multiplas páginas e tratamento de dados de API.<br><br><i>Para quem consome animes e não concorda com as premiações oficiais. Com este site você pode criar seu próprio Anime Awards; com suas categorias, indicações, votos e vencedores.</i>"
    clickWindow.classList.remove("hide")
    mudaLinkSite("https://phpedrassi.github.io/criar-anime-awards/")
    mudaLinkGit("https://github.com/phpedrassi/criar-anime-awards")
}

const mudaLinkSite = (url) => {
    return urlSite = url
}

const mudaLinkGit = (url) => {
    return urlGit = url
}


const fecharJanela = () => {
    clickWindow.classList.add("hide")
}

const goToGit = () => {
    window.open(urlGit, '_blank')
    clickWindow.classList.add("hide")
}

const goToSite = () => {
    window.open(urlSite, '_blank')
    clickWindow.classList.add("hide")
}



comboScreen.addEventListener("click", abrirCombo)
seriesScreen.addEventListener("click", abrirSerie)
awardScreen.addEventListener("click", abrirAward)
windowClose.addEventListener("click", fecharJanela)
btnGit.addEventListener("click", goToGit)
btnSite.addEventListener("click", goToSite)