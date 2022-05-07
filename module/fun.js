import {patterns} from './pat.js'

let form = document.forms.reg
let inputs = document.querySelectorAll('input')
let b = document.querySelector('button')
let span  = document.querySelector('span')
let img = document.querySelector('img')
let bg = document.querySelector('.bg')


function validate(filed, regex) {
	if(regex.test(filed.value)) {
		filed.classList.add('valid')
        filed.parentElement.classList.add('v')
		filed.classList.remove('invalid')
        filed.parentElement.classList.remove('in')
        b.classList.remove('but')
        filed.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML = ''
        filed.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.style.color = ''
	} else {
		filed.classList.add('invalid')
        filed.parentElement.classList.add('in')
		filed.classList.remove('valid')
        filed.parentElement.classList.remove('v')
    
	}
}
inputs.forEach(inp => {
	inp.onkeyup = () => {
        if(inp.name){
		validate(inp, patterns[inp.getAttribute('name')] )
	}}

    
})

inputs.forEach(inp => {
	inp.onkeyup = () => {
        if(inp.name){
		validate(inp, patterns[inp.getAttribute('name')] )
	}}

    
})

    
function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}

export {validate,submit}