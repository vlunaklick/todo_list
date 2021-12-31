import addList from './addList.js'
import checkList from './checkList'
import uploList from './uploList'
import nameList from './nameList.js'
import deleteList from './deleteList.js'
import './style.css'
import changeName from './titleNameCh.js'
import addToDo from './addToDo.js'
import createNot from './createNotes.js'

/* Important */

const body = document.querySelector('body')
const title = document.getElementById('title')

let listaOficial = checkList()

nameList(listaOficial)

createNot(listaOficial, title.innerText)

/* Button add list */

const addListBtn = document.getElementById('add')

addListBtn.addEventListener('click', function () {
	if (body.clientWidth < 1000) {
		nav[0].classList.add('hidden')
	}
	addList()
	let inputText = document.getElementsByClassName('inputAdd')
	let btnAdd = document.getElementsByClassName('btnAddL')
	let btnCan = document.getElementsByClassName('btncan')
	btnAdd[0].addEventListener('click', function () {
		let valor = inputText[0].value
		listaOficial[`${valor}`] = []
		let newW = document.getElementsByClassName('allPan')
		uploList(listaOficial)
		nameList(listaOficial)
		body.removeChild(newW[0])
	})
	btnCan[0].addEventListener('click', function () {
		let newW = document.getElementsByClassName('allPan')
		body.removeChild(newW[0])
	})
})

/* Button responsive */

const navBtn = document.getElementById('nav-header-navico-responsive')

const nav = document.getElementsByClassName('main-sidething')

navBtn.addEventListener('click', function () {
	if (nav[0].classList.contains('hidden')) {
		nav[0].classList.remove('hidden')
	} else {
		nav[0].classList.add('hidden')
	}
})

/* Delete list */

const delLisBtn = document.getElementById('deleLis')

delLisBtn.addEventListener('click', function () {
	let tituloActivo = document.getElementById('title')
	if (!(tituloActivo.textContent == 'General')) {
		deleteList(tituloActivo.textContent, listaOficial)
		uploList(listaOficial)
		nameList(listaOficial)
		changeName('General')
	}
})

/* Factory creator */

const todoo = (acti, desc, date, prio) => {
	return { acti, desc, date, prio }
}

/* Add ToDo to the list */

const addLisBtn = document.getElementById('addNote')

addLisBtn.addEventListener('click', function () {
	addToDo()
	let inputText = document.getElementsByClassName('inputAddT')
	let btnAdd = document.getElementsByClassName('btnAddL')
	let btnCan = document.getElementsByClassName('btncan')
	let inputDesc = document.getElementById('inputDesc')
	let dueDate = document.getElementById('dDate')
	let prio = document.getElementById('priority')
	let ti = document.getElementById('title')
	btnAdd[0].addEventListener('click', function () {
		if (inputText[0].value == '') {
			alert('Enter an activity')
		} else {
			let actividad = inputText[0].value
			let descp = inputDesc.value
			let fecha = dueDate.value
			let priority = prio.value
			let titulo = ti.textContent
			let union = todoo(actividad, descp, fecha, priority)
			Object.keys(listaOficial).forEach(element => {
				if (element == titulo) {
					listaOficial[element].push(union)
				}
			})
			if (!(titulo == 'General')) {
				listaOficial['General'].push(union)
			}
			let newW = document.getElementsByClassName('allPuc')
			uploList(listaOficial)
			nameList(listaOficial)
			body.removeChild(newW[0])
			createNot(listaOficial, titulo)
		}
	})
	btnCan[0].addEventListener('click', function () {
		let newW = document.getElementsByClassName('allPuc')
		body.removeChild(newW[0])
	})
})
