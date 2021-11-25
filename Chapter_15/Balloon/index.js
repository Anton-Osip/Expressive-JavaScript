const balloon = document.createElement('span')
let size = 16
function drowBalloon(size) {
	balloon.style.fontSize = `${size}px`
	balloon.innerText = '🎈'
	document.body.append(balloon)
}
drowBalloon(size)

window.addEventListener('keydown', goBalloon)

function goBalloon(event) {
	if (event.key === 'ArrowUp') {
		event.preventDefault()
		size <= 200 ? (size += 5) : 15
		drowBalloon(size)
		if (size >= 200) {
			balloon.innerText = '💥'
			window.removeEventListener('keydown', goBalloon)
		}
	} else if (event.key === 'ArrowDown') {
		event.preventDefault()
		size >= 16 ? (size -= 5) : 15
		drowBalloon(size)
	}
}
