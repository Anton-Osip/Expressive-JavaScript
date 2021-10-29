console.log("Построение треугольника в цикле")
console.log("-----------------------------------------")
let x = '';
for(let i = 0; i<7;i++){
	x+="#";
	console.log(x)
}

console.log("-----------------------------------------")
console.log("-----------------------------------------")
console.log("FizzBuzz")
console.log("-----------------------------------------")

for(let i = 0; i<=100;i++){
	let str = '';
	(i%3===0 && i%7===0)?str+="FizzBuzz":i%3===0?str+="Fizz":i%7===0?str+="Buzz":str+=i;
	console.log(str)
}
console.log("-----------------------------------------")
console.log("-----------------------------------------")
console.log("Шахмотная доска")
console.log("-----------------------------------------")
let a=8;
for(let i = 0;i<a;i++){
	let str = '';
	for(let y = 0;y<a/2;y++){
		i%2===0?str+=" #":str+="# "
	}
	console.log(str)
}
console.log("-----------------------------------------")
