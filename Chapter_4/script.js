console.log('Сумма диапазона')
console.log('-----------------------------------------')
function rang(start=0, end=10, step=1) {
	let arr = [];
	if(step===0){
		return undefined
	}else if(step>0){
		for(let i = start;i<=end;i+=step){
			arr.push(i);
		}
	}else{
		for(let i = start;i>=end;i+=step){
			arr.push(i);
		}
	}
	return arr
}

function sum(arr) {
	return arr.reduce((sum,elem)=>sum+=elem)
}
console.log(sum(rang()))
console.log(rang(5,2,-1))
console.log('-----------------------------------------')
console.log('-----------------------------------------')
console.log('Массив в обратном порядке')
console.log('-----------------------------------------')

function reverseArray(arr) {
	let newArray = []
	arr.forEach(item=>newArray.unshift(item))
	return newArray
}
console.log(reverseArray(rang()))

function reverseArrayInPlace(arr){
	for(let i = 0;i<Math.floor(arr.length/2);i++){
		[arr[i],arr[arr.length-i-1]]=[arr[arr.length-i-1],arr[i]]
	}
}
let arrey = rang();
console.log(arrey)
reverseArrayInPlace(arrey)
console.log(arrey)
console.log('-----------------------------------------')
console.log('-----------------------------------------')
console.log('Список')
console.log('-----------------------------------------')

let arr = [1,2,3,4]
function arrayToList(arr){
	let list = {}
		for(let i = arr.length-1;i>=0;i--){
			let obj ={};
			if(i===arr.length-1){
				obj.value=arr[i];
				obj.rest=null
			}else{
				obj.value=arr[i];
				obj.rest=list
			}
			list=obj
		}
	return list
}

console.log(arrayToList(arr))

function listToArray(list){
	let newArr = [];
	newArr.push(list.value)
	let rest=list.rest;
	while(rest){
		newArr.push(rest.value)
		rest=rest['rest']
	}
	return newArr
}
console.log(listToArray(arrayToList(arr)))

function prepend(elem,list){
	return {value:elem,rest:list}
}
console.log(prepend(5,arrayToList(arr)))
console.log(listToArray(prepend(5,arrayToList(arr))))

function nth(list,index){
	if(!list.rest && index!==0)return undefined;
	return (index!==0)?nth(list.rest,--index):list.value;
}
console.log(nth(arrayToList(arr),3))
console.log('-----------------------------------------')
console.log('-----------------------------------------')
console.log('Глубокое сравнение')
console.log('-----------------------------------------')

function deepEqual(a,b){
	debugger
	if (typeof a =="object" && typeof b =="object"){
		let result
		for(let i = 0,y = 0;i< Object.keys(a).length,y< Object.keys(b).length;++i,++y){
			result = deepEqual(a[Object.keys(a)[i]],b[Object.keys(b)[y]])
			if (result===false) break;
		}
		return result
	}else{
		return (a===b)
	}
}
let s = {name:"Anton"}
let c = {name:"Anton"}
let o = {name:"Antoo"}
console.log(deepEqual(s,c))
console.log(deepEqual(s,o))