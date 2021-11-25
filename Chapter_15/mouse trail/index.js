window.addEventListener('mousemove', event => {
	const box = document.createElement('div')
	box.classList.add('trail')
	box.style.top = `${event.clientY}px`
	box.style.left = `${event.clientX}px`
	document.body.append(box)
	window.addEventListener('click', () => {
		document.body.innerHTML = ''
	})
})
