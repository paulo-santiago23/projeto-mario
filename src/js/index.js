const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alterarModel(){
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () =>{
    alterarModel();
    video.setAttribute("src", "");
});