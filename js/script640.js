const slides = ['slide640', 'slide641', 'slide642', 'slide643', 'slide644', 'slide645', 'slide646']

$(document).ready(function () {
	// modal
	$('.openModal').on('click', () => {
		$('.modal').css('display', 'block')
		localStorage.setItem('slide640', 'true')
		$('.puntero').css('display', 'none')

		const exist = []

		slides.forEach((item) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
			}
		})

		if (exist.length === 7) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})

	// modal 1
	$('.openModal1').on('click', () => {
		$('.modal1').css('display', 'block')
        localStorage.setItem('slide641', 'true')
		$('.puntero1').css('display', 'none')

		const exist = []

		slides.forEach((item) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
			}
		})

		if (exist.length === 7) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	})
	// cerra modal1
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
	})

	// modal 2
	$('.openModal2').on('click', () => {
		$('.modal2').css('display', 'block')
        localStorage.setItem('slide642', 'true')
		$('.puntero2').css('display', 'none')

		const exist = []

		slides.forEach((item) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
			}
		})

		if (exist.length === 7) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	})
	// cerra modal2
	$('.closeModal2').on('click', () => {
		$('.modal2').css('display', 'none')
	})

	// modal 3
	$('.openModal3').on('click', () => {
		$('.modal3').css('display', 'block')
        localStorage.setItem('slide643', 'true')
		$('.puntero3').css('display', 'none')

		const exist = []

		slides.forEach((item) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
			}
		})

		if (exist.length === 7) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	})
	// cerra modal3
	$('.closeModal3').on('click', () => {
		$('.modal3').css('display', 'none')
	})

	// modal 4
	$('.openModal4').on('click', () => {
		$('.modal4').css('display', 'block')
        localStorage.setItem('slide644', 'true')
		$('.puntero4').css('display', 'none')

		const exist = []

		slides.forEach((item) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
			}
		})

		if (exist.length === 7) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	})
	// cerra modal4
	$('.closeModal4').on('click', () => {
		$('.modal4').css('display', 'none')
	})

	// modal 5
	$('.openModal5').on('click', () => {
		$('.modal5').css('display', 'block')
        localStorage.setItem('slide645', 'true')
		$('.puntero5').css('display', 'none')

		const exist = []

		slides.forEach((item) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
			}
		})

		if (exist.length === 7) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	})
	// cerra modal5
	$('.closeModal5').on('click', () => {
		$('.modal5').css('display', 'none')
	})

	// modal 6
	$('.openModal6').on('click', () => {
		$('.modal6').css('display', 'block')
        localStorage.setItem('slide646', 'true')
		$('.puntero6').css('display', 'none')

		const exist = []

		slides.forEach((item) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
			}
		})

		if (exist.length === 7) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	})
	// cerra modal5
	$('.closeModal6').on('click', () => {
		$('.modal6').css('display', 'none')
	})

	$('#play-video').on('click', () => {
		$('.boton-play').on('click', () => {
			$('.play-boton-10').hide()
			localStorage.setItem('slide354', 'true')
			$('.cursor').hide()
			$('.boton-next').show()
			$('.reproduc').show()
			$('.vutom-col').hide()
		})
	})
})
