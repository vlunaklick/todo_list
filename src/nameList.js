import changeName from './titleNameCh'
import createNot from './createNotes.js'

export default function (testing) {
	let marcoLis = document.getElementsByClassName('listCreated')
	let bracketOut = document.createElement('div')
	bracketOut.classList.add('bracket-line')
	marcoLis[0].innerHTML = ''
	marcoLis[0].appendChild(bracketOut)
	Object.keys(testing).forEach(element => {
		if (!(element == 'General')) {
			let div = document.createElement('div')
			let title = document.createElement('h4')
			div.classList.add('main-sidething-newtitle')
			div.classList.add('main-sidething-menudiv-hover')
			title.classList.add('titNu')
			title.innerHTML = `${element}`
			div.classList.add('main-sidething-menudiv')
			div.append(title)
			let bracket = document.createElement('div')
			bracket.classList.add('bracketClaro')
			if (Object.keys(testing)[Object.keys(testing).length - 1] == element) {
				bracket.classList.replace('bracketClaro', 'bracket-line')
			}
			marcoLis[0].appendChild(div)
			marcoLis[0].appendChild(bracket)
		}
	})
	let btnNombres = Array.from(
		document.getElementsByClassName('main-sidething-newtitle')
	)
	btnNombres.forEach(element =>
		element.addEventListener('click', function () {
			changeName(element.innerText)
			createNot(testing, element.innerText)
			const nav = document.getElementsByClassName('main-sidething')
			if (nav[0].classList.contains('hidden')) {
				nav[0].classList.remove('hidden')
			} else {
				nav[0].classList.add('hidden')
			}
		})
	)
}
