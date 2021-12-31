export default function () {
	let grande = document.createElement('div')
	grande.classList.add('allPan')

	let marcoL = document.createElement('div')
	marcoL.classList.add('marcoListas')

	let titulo = document.createElement('h1')
	titulo.classList.add('tituloListas')
	titulo.innerHTML = 'Name of your new list'

	marcoL.appendChild(titulo)

	let inputN = document.createElement('input')
	inputN.setAttribute('placeholder', 'List name...')
	inputN.setAttribute('type', 'text')
	inputN.classList.add('inputAdd')

	let btnAdd = document.createElement('button')
	let btncan = document.createElement('button')

	btnAdd.classList.add('btnAddL')
	btncan.classList.add('btncan')
	btnAdd.innerHTML = 'Add list'
	btncan.innerHTML = 'Back'

	marcoL.appendChild(inputN)
	marcoL.appendChild(btnAdd)
	marcoL.appendChild(btncan)
	grande.appendChild(marcoL)
	let main = document.getElementById('main')
	let body = document.querySelector('body')
	body.insertBefore(grande, main)
}
