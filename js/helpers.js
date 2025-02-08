const handleSlide = (array) => {
	array.forEach((slide) => {
		const value = localStorage.getItem(slide.name)

		if (value && value === 'true') $(slide.selector).hide()
		else localStorage.setItem(slide.name, 'false')
	})
}

const handleValidateCriterias = (array) => {
	if (array.every((slide) => localStorage.getItem(slide.name) === 'true')) {
		array.forEach((slide) => $(slide.selector).hide())
		$('.vutom-col').hide()
	}
}

const handleValidateCriteriasFinished = () => {
	const criterias = ['carta1', 'carta2', 'carta3', 'carta4', 'carta5', 'carta6'],
	      values = criterias.map((item) => localStorage.getItem(item)).filter((item) => item !== null),
		  total = values.filter((item) => item === 'correcto').length;	

	document.getElementById('value-total').textContent = total

	if (values.length === 6) {
		setTimeout(() => {
			window.location.href = './index202.html'
		}, 2000)
	}
}