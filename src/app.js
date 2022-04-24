// ТАЙМЕР

function sec() {
	let secID = document.getElementById('sec')
	setInterval(function () {
		secID.textContent = parseInt(secID.textContent) + 1
		if (secID.textContent == 61) {
			secID.textContent = 0

			minID.textContent = parseInt(minID.textContent) + 1
		}
	}, 1000)
}

function random() {
	let chip = document.querySelectorAll('.chip') // ПОЛУЧАЕМ NODELIST
	let res = []
	chip.forEach((node) => {
		// Nodelist только для чтения делаем массив.
		res.push(node)
	})
	res.forEach((elem) => {
		let chipCONTENT = document.createElement('h2') //добавляем новый тег в блоки див
		chipCONTENT.innerHTML = Math.floor(Math.random() * res.length)
		elem.appendChild(chipCONTENT)
	})
}

function renderChip(fieldSize = 3) {
	let gameField = document.querySelector('.gameField')
	gameField.innerHTML = '<div class="row"></div>'.repeat(fieldSize)
}

renderChip()
