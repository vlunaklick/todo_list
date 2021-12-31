import removeDo from './removeToDo.js'

export default function (array, title) {
	let contenido = document.getElementById('content-allnotes-table-addons')
	contenido.innerHTML = ''
	array[title].forEach(element => {
		const addNote = `
                    <tr class="book">
                        <td>${element.acti}</td>
                        <td>${element.desc}</td>
                        <td> ${checkDate(element.date)}</td>
                        <td>${priority(element.prio)}</td>
                        <td class="buttonsss">
                            <input class="checking" type="checkbox">Check when finished</input>
                        </td>
                    </tr>
            `
		contenido.insertAdjacentHTML('afterbegin', addNote)
	})
	let check = Array.from(document.getElementsByClassName('checking'))
	check.forEach(btn => {
		btn.addEventListener('click', function () {
			if (btn.checked) {
				let nombre = btn.parentElement.parentElement
				removeDo(nombre, array)
				contenido.removeChild(nombre)
			}
		})
	})
}

function checkDate(fecha) {
	if (fecha == undefined) {
		return 'none'
	} else {
		return fecha
	}
}

function priority(prio) {
	const text = prio.charAt(0).toUpperCase() + prio.slice(1)
	return text
}
