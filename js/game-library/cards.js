let hasRotatedCard = { rotated: false, number: 0, card_index: 0 },
	response_counter = 0

const initBlueCards = () => {
	cards.map((item, index) => {
		// Create the image container div
		const div = document.createElement('div')
		div.classList.add(`cuadro${index + 1}`)
		div.classList.add('card')
		div.id = `cuadro${index + 1}`
		// Create the image
		const image = document.createElement('img')
		image.src = item.back
		image.alt = `Cuadro ${index + 1}`
		// Set the image in the container
		div.append(image)
		// Then, the container is setted in the container father.
		document.getElementById('blue-cards-container').appendChild(div)
	})
}

const validateIfHasRotated = ({ index }) => {
	// Get the before card index
	const beforeIndex = cards.findIndex(
		(item) => item.item === hasRotatedCard.number
	)
	// Get the before card index
	const card = cards[hasRotatedCard.card_index]
	// Get the current card element
	const currentCard = cards[index]
	// We rotate both cards
	document.getElementById(`cuadro${index + 1}`).style =
		'transform: rotateY(-180deg)'
	document.getElementById(`cuadro${beforeIndex + 1}`).style =
		'transform: rotateY(-180deg)'
	// When the card rotate in the middle we change the images
	setTimeout(() => {
		// Change the images
		document.querySelector(`.cuadro${index + 1} img`).src = currentCard.back
		document.querySelector(`.cuadro${beforeIndex + 1} img`).src = card.back
		// Rotate the image again
		document.getElementById(`cuadro${index + 1}`).style =
			'transform: rotateY(0deg)'
		document.getElementById(`cuadro${beforeIndex + 1}`).style =
			'transform: rotateY(0deg)'
	}, 1000)
}

const rotateCard = ({ item, index, front_image }) => {
	if (!hasRotatedCard.rotated) {
		hasRotatedCard.rotated = true
		hasRotatedCard.number = item
		hasRotatedCard.card_index = index
	}

	document.querySelector(`.cuadro${index + 1}`).style =
		'transform: rotateY(180deg)'

	setTimeout(() => {
		document.querySelector(`.cuadro${index + 1} img`).style =
			'transform: rotateY(180deg)'
		document.querySelector(`.cuadro${index + 1} img`).src = front_image
	}, 50)
}

const validateCard = ({ index }) => {
	setTimeout(() => {
		const { card_index } = hasRotatedCard

		document.querySelector(`.cuadro${index + 1}`).style =
			'transform: rotateY(0deg)'
		document.querySelector(`.cuadro${card_index + 1}`).style =
			'transform: rotateY(0deg)'

		setTimeout(() => {
			document.querySelector(`.cuadro${index + 1} img`).style =
				'transform: rotateY(0deg)'
			document.querySelector(`.cuadro${index + 1} img`).src =
				cards[index].back
			document.querySelector(`.cuadro${card_index + 1} img`).style =
				'transform: rotateY(0deg)'
			document.querySelector(`.cuadro${card_index + 1} img`).src =
				cards[card_index].back
		}, 50)

		hasRotatedCard.rotated = false
		hasRotatedCard.number = 0
		hasRotatedCard.card_index = 0
	}, 900)
}

const validateCorrectRotated = ({ index }) => {
	hasRotatedCard.rotated = false
	hasRotatedCard.number = 0
	hasRotatedCard.card_index = 0

	sessionStorage.setItem('data-to-save', JSON.stringify(cards[index].item))
	sessionStorage.setItem(
		'openModal',
		JSON.stringify(parseInt(sessionStorage.getItem('openModal') ?? '0') + 1)
	)

	setTimeout(() => {
		openModal({ index })
	}, 1000)
}

const openModal = ({ index }) => {
	// Get card info
	const couples_number = parseInt(sessionStorage.getItem('data-to-save') ?? '0'),
		card = cards.find((item) => item.item === couples_number)


	if (couples_number === card.item) {
		const element_modal = document.getElementById('modal-pregunta'),
			question = document.getElementById('pregunta'),
			response_a = document.getElementById('a'),
			response_b = document.getElementById('b'),
			response_c = document.getElementById('c'),
			response_d = document.getElementById('d'),
			element_close = document.getElementById('close')

		question.src = card.question_image
		element_modal.style = 'display: block;'
		response_a.style = `top: ${card.a.top}; left: ${card.a.left}; ${
			card.a.width ? `width: ${card.a.width}` : ''
		}`
		response_b.style = `top: ${card.b.top}; left: ${card.b.left}; ${
			card.b.width ? `width: ${card.b.width}` : ''
		}`
		if (card.c)
			response_c.style = `top: ${card.c.top}; left: ${card.c.left}; ${
				card.c.width ? `width: ${card.c.width}` : ''
			}`
		if (card.d)
			response_d.style = `top: ${card.d.top}; left: ${card.d.left}; ${
				card.d.width ? `width: ${card.d.width}` : ''
			}`

		element_close.addEventListener('click', () => closeModal(card))
		element_close.style = 'display: none;'

		response_a.addEventListener('click', () => setSelectResponse(cards, 'a'))
		response_b.addEventListener('click', () => setSelectResponse(cards, 'b'))
		response_c.addEventListener('click', () => setSelectResponse(cards, 'c'))
		response_d.addEventListener('click', () => setSelectResponse(cards, 'd'))
	}
}

const closeModal = (card) => {
	const element_modal = document.getElementById('modal-pregunta'),
		element_modal_close = document.getElementById('modal'),
		response_a = document.getElementById('a'),
		response_b = document.getElementById('b'),
		response_c = document.getElementById('c'),
		response_d = document.getElementById('d')

	element_modal.style = 'display: none;'
	element_modal_close.style = 'display: none;'

	response_a.innerHTML = ''
	response_b.innerHTML = ''
	response_c.innerHTML = ''
	response_d.innerHTML = ''

	setTimeout(() => {
		validateFinished()
	}, 1000)
}

const validateFinished = () => {
	if (parseInt(sessionStorage.getItem('openModal')) === 10) {
		const responses = JSON.parse(sessionStorage.getItem('responses'))
		if (responses.length < 7) {
			window.location.href = './index650.html'
		} else if (responses.length === 10) {
			window.location.href = './index648.html'
		} else {
			window.location.href = './index649.html'
		}
	}
}

const setSelectResponse = (cards, answer) => {
  const item = parseInt(sessionStorage.getItem('data-to-save') ?? 0);
	const card = cards.find(it => it.item === item)
	document.getElementById('close').style = 'display: block'
	if (card.correct === answer) {
		const new_query_session_storage = JSON.parse(
				sessionStorage.getItem('responses')
			),
			response = new_query_session_storage.find(
				(item) => item === card.item
			)

		if (!response) {
			new_query_session_storage.push(
				parseInt(sessionStorage.getItem('data-to-save'))
			)
			sessionStorage.setItem(
				'responses',
				JSON.stringify(new_query_session_storage)
			)
			const image = document.createElement('img')
			image.src = card.correct_image
			image.id = 'respuesta-correcta'
			if (!document.getElementById(answer).querySelector('img'))
				document.getElementById(answer).appendChild(image)
			document.querySelector('#modal img').src = card[answer].alert_image
			document.getElementById('modal').style = 'display: block;'
			boxSound()
		}
	} else {
		const indexes = cards.reduce(
			(acc, el, index) =>
				el.item ===
				parseInt(sessionStorage.getItem('data-to-save') ?? '0')
					? [...acc, index]
					: acc,
			[]
		)
		console.log(indexes)
		indexes.map((item) => {
			document.getElementById(`cuadro${item + 1}`).style.filter =
				'grayscale(1)'
		})
		document.querySelector('#modal img').src = card[answer].incorrect_image
		document.getElementById('modal').style = 'display: block;'
		errorSound()
	}
}

const addEventsToCards = () => {
	cards.map((item, index) => {
		const element = document.getElementById(`cuadro${index + 1}`)

		element.addEventListener('click', () => {
			const { number, rotated } = hasRotatedCard
			const opened = JSON.parse(sessionStorage.getItem('opened')),
				openend_item = opened.find((it) => it === item.item)
			if (!rotated)
				if (!openend_item) {
					girarSound()
					rotateCard({
						item: item.item,
						front_image: item.front,
						index,
					})
				}
			if (rotated) {
				if (!openend_item) {
					girarSound()
					if (number === item.item) {
						rotateCard({
							item: item.item,
							front_image: item.front,
							index,
						})
						validateCorrectRotated({ index })
						sessionStorage.setItem(
							'opened',
							JSON.stringify([...opened, item.item])
						)
					}

					if (number !== item.item) {
						rotateCard({
							item: item.item,
							front_image: item.front,
							index,
						})
						validateCard({ index })
					}
				}
			}
		})
	})
}

window.addEventListener('DOMContentLoaded', () => {
	sessionStorage.setItem('responses', JSON.stringify([]))
	sessionStorage.setItem('openModal', JSON.stringify(0))
	sessionStorage.setItem('opened', JSON.stringify([]))
	initBlueCards()
	addEventsToCards()
})
