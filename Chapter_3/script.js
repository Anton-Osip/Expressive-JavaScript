console.log('Минимум')
console.log('-----------------------------------------')
function min(a, b) {
	return b === undefined || a < b?a:b;
}
console.log(min(5, 6))
console.log(min(8, 6))
console.log(min(8))
console.log('-----------------------------------------')
console.log('-----------------------------------------')
console.log('Рекурсия')
console.log('-----------------------------------------')

function isEven(num) {
	if (num === 0) {
		return true
	} else if (Math.abs(num)===1) {
		return false
	} else {
		return isEven(Math.abs(num) -2)
	}
}
console.log(isEven(60))
console.log(isEven(75))
console.log(isEven(-60))
console.log(isEven(-75))
console.log('-----------------------------------------')
console.log('-----------------------------------------')
console.log('Подсчет букв')
console.log('-----------------------------------------')

let str = 'BfghjBfghjkBukjBf'
function countBs(str, leter) {
	let count = 0
	for (let i = 0; i < str.length; i++) {
		str[i] === leter ? count++ : count;
	}
	return count
}

console.log(countBs(str, 'f'))
console.log('-----------------------------------------')
