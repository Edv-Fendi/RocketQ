import Modal from './modal.js'

const modal = Modal()


const modalTittle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {

    button.addEventListener("click", handleClick)

})

/* Quando o delete for clicado */
const deleteButton = document.querySelectorAll(".actions a.delete")
deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))

})

function handleClick(event, check = true) {
    event.preventDefault()
    const text = check ? "Marcar como lido" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id


    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTittle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim,  ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    modal.open()
}


/* 1:25:06 */