let form = document.querySelector(`#my-form`)
let users = document.querySelector(`#users`)
form.addEventListener(`submit`, addToStorage)
document.addEventListener(`DOMContentLoaded`, ()=>(console.log(`hi`)))

function addToStorage(e) {
    e.preventDefault()
    let name = document.querySelector(`#name`).value
    let email = document.querySelector(`#email`).value
    let obj1 = {
        name: name,
        email: email
    }
    let jsonFile = JSON.stringify(obj1)
    localStorage.setItem(`${email}`, jsonFile)
    addToList(obj1)
}

Object.keys(localStorage).forEach((key) => {
    let userDetailsString = localStorage.getItem(key)
    let userObj = JSON.parse(userDetailsString)
    addToList(userObj)
})

function addToList(userObj) {
    let li = document.createElement('li')
    let text = document.createTextNode(`${userObj.name}:${userObj.email}`)
    li.appendChild(text)
    users.appendChild(li)
}