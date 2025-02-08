$(document).ready(function () {
	showBoxes();
	// modal 1
	$('.openModal').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
			$('.caja').css('z-index', '0')
			$('.caja1').css('z-index', '0')
			$('.caja2').css('z-index', '0')
			$('.caja3').css('z-index', '0')
			$('.caja4').css('z-index', '0')
			$('.caja5').css('z-index', '0')
			$('.caja6').css('z-index', '0')
			$('.caja7').css('z-index', '0')
			$('.caja8').css('z-index', '0')
		}, 1000)
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		handleChangeView(630);
	})

	// modal 1
	$('.openModal1').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
			$('.caja').css('z-index', '0')
			$('.caja1').css('z-index', '0')
			$('.caja2').css('z-index', '0')
			$('.caja3').css('z-index', '0')
			$('.caja4').css('z-index', '0')
			$('.caja5').css('z-index', '0')
			$('.caja6').css('z-index', '0')
			$('.caja7').css('z-index', '0')
			$('.caja8').css('z-index', '0')
		}, 1000)
	})

	// modal 2
	$('.openModal2').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
			$('.caja').css('z-index', '0')
			$('.caja1').css('z-index', '0')
			$('.caja2').css('z-index', '0')
			$('.caja3').css('z-index', '0')
			$('.caja4').css('z-index', '0')
			$('.caja5').css('z-index', '0')
			$('.caja6').css('z-index', '0')
			$('.caja7').css('z-index', '0')
			$('.caja8').css('z-index', '0')
		}, 1000)
	})
	
	// Seleccion de la respuesta correcta
	$(".opcion").on("click", () => {
		handleShowCurrentBox(8);
		handleOptionCorrectShow('.correcta');
		boxSound();
		handleSaveCorrectQuestion(9)

		setTimeout(() => {
			handleChangeView(630);
		}, 2000)
	})
})
