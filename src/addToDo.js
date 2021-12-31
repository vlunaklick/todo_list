export default function (objeto) {
	let grande = document.createElement('div')
	grande.classList.add('allPuc')

	let marcoL = document.createElement('div')
	marcoL.classList.add('marcoNotes')

	let titulo = document.createElement('h1')
	titulo.classList.add('tituloListas')
	titulo.innerHTML = 'Add your To Do'

	marcoL.appendChild(titulo)

	let labelN = document.createElement('label')
	labelN.setAttribute('for', 'inputN')
	labelN.innerHTML = "What's your plan?"

	let inputN = document.createElement('input')
	inputN.setAttribute('type', 'text')
	inputN.classList.add('inputAddT')
	inputN.setAttribute('id', 'inputN')

	let labelD = document.createElement('label')
	labelD.setAttribute('for', 'inputDesc')
	labelD.innerHTML = 'Description'

	let inputDesc = document.createElement('input')
	inputDesc.setAttribute('type', 'text')
	inputDesc.classList.add('inputDesc')
	inputDesc.setAttribute('id', 'inputDesc')

	let btnAdd = document.createElement('button')
	let btncan = document.createElement('button')

	btnAdd.classList.add('btnAddL')
	btncan.classList.add('btncan')
	btnAdd.innerHTML = 'Add ToDo'
	btncan.innerHTML = 'Back'

	let divbtns = document.createElement('div')
	divbtns.classList.add('center-butons')

	let labelDate = document.createElement('label')
	labelDate.setAttribute('for', 'dDate')
	labelDate.innerHTML = 'Due Date'

	let dueDate = document.createElement('input')
	dueDate.setAttribute('type', 'date')
	dueDate.classList.add('inputAddT')
	dueDate.setAttribute('id', 'dDate')

	/* Selector */

	let labelDue = document.createElement('label')
	labelDue.setAttribute('for', 'priority')
	labelDue.innerHTML = 'Priority'

	let selector = document.createElement('select')
	selector.classList.add('seleccion')
	selector.setAttribute('id', 'priority')

	let optionone = document.createElement('option')
	optionone.setAttribute('value', 'low')
	optionone.innerHTML = 'Low'

	let optiontwo = document.createElement('option')
	optiontwo.setAttribute('value', 'medium')
	optiontwo.innerHTML = 'Medium'

	let optionthree = document.createElement('option')
	optionthree.setAttribute('value', 'high')
	optionthree.innerHTML = 'High'

	selector.appendChild(optionone)
	selector.appendChild(optiontwo)
	selector.appendChild(optionthree)

	/* Adders */

	marcoL.appendChild(labelN)
	marcoL.appendChild(inputN)
	marcoL.appendChild(labelD)
	marcoL.appendChild(inputDesc)
	marcoL.appendChild(labelDate)
	marcoL.appendChild(dueDate)
	marcoL.appendChild(labelDue)
	marcoL.appendChild(selector)
	divbtns.appendChild(btnAdd)
	divbtns.appendChild(btncan)
	marcoL.appendChild(divbtns)
	grande.appendChild(marcoL)
	let main = document.getElementById('main')
	let body = document.querySelector('body')
	body.insertBefore(grande, main)
}
