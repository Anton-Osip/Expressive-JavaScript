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
	if(i%3===0 && i%7===0){
		console.log("FizzBuzz")
	}else if(i%3===0){
		console.log("Fizz")
	}else if(i%7===0){
		console.log("Buzz")
	}else{
		console.log(i)
	}
}
console.log("-----------------------------------------")
console.log("-----------------------------------------")
console.log("Шахмотная доска")
console.log("-----------------------------------------")
let a=8;
for(let i = 0;i<a;i++){
	let str = '';
	for(let y = 0;y<a/2;y++){
		if(i%2===0){
			str+=" #"
		}else{
			str+="# "
		}	
	}
	console.log(str)
}
console.log("-----------------------------------------")
