// function byTagName(node, tagName) {
// 	return document.querySelectorAll(`${node.tagName.toLowerCase()} ${tagName}`)
// }

function byTagName(node, tagName) {
	return [...node.children].reduce((acc, n) => {
		let nodesArray = []
		if (node.children.length) {
			nodesArray = byTagName(n, tagName)
		}
		return n.tagName.toLowerCase() === tagName
			? [...nodesArray, n, ...acc]
			: [...nodesArray, ...acc]
	}, [])
}

console.log(byTagName(document.body, 'h1').length)
// → 1
console.log(byTagName(document.body, 'span').length)
// → 3
var para = document.querySelector('p')
console.log(byTagName(para, 'span').length)
// → 2
