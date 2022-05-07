
import {validate,submit} from './module/fun.js'


let form = document.forms.reg
let inputs = document.querySelectorAll('input')
let b = document.querySelector('button')
let span  = document.querySelector('span')
let img = document.querySelector('img')
let bg = document.querySelector('.bg')


form.onsubmit = (event) => {
	event.preventDefault()

	    let arrCheck = []
        let arr = []
        let arr2 = []
        let arr3 = []
	inputs.forEach(inp => {
		if(inp.classList.value === 'invalid' || inp.value.length === 0 && inp.getAttribute('data-req') === '') {
            inp.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML = 'ERROR'
            inp.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.style.color = 'red'
            inp.classList.add('invalid')
			arrCheck.push(1)
            inp.parentElement.classList.add('in')
            inp.classList.remove('valid')
            inp.parentElement.classList.remove('v')
        
            
		}
       
        if (inp.classList.contains('invalid')) {
            arr += 1
        }
        if (inp.value.length > 0) {
            arr2 += 1
        }
        arr3 += 1
        span.innerHTML = `All:${arr3.length}   Success: ${arr2.length}/12  Error:${arr.length}/12 `
	})

    if(arrCheck.length === 0) {

        setTimeout(() => {
            b.classList.remove('but')
            bg.style.display = 'block'
            img.style.display = 'block'
            bg.style.opacity = "0.8"
            img.style.opacity = "1"
            },200)

        setTimeout(() => {        
		    submit()
            bg.style.opacity = "0"
            img.style.opacity = "0"
            bg.style.display = 'none'
            img.style.display = 'none'
        // inputs.forEach(inp => {inp.value = ''
        // inp.parentElement.classList.remove('v')
        // inp.classList.remove('valid')})
        }, 9000);

    } else {
        b.classList.add('but')
        
	}}



