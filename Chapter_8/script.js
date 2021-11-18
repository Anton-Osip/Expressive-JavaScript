"use strict"
console.log('Повторная попытка')
console.log('-----------------------------------------')
class primitive extends Error{}

function primitiveMultiplay(a,b){
	let random = Math.floor(Math.random()*10)
	if(random == 1 || random ==2){
		return a*b
	}else{
		throw new primitive('eror')
	}
}
for(;;){
	try{
		let res =primitiveMultiplay(2,5)
		console.log(res)
		break;
	}catch(e){
		if (e instanceof primitive){
			console.log('er')
		}else{
			throw e
		}
	}
}

console.log('-----------------------------------------')
console.log('-----------------------------------------')
console.log('Запертый ящик')
console.log('-----------------------------------------')

const box={
	locked:true,
	unlock(){this.locked=false},
	lock(){this.locked=true},
	_content:[1,2],
	get content(){
		if(this.locked)throw new Error('Заперто!!');
		return this._content;		
	}
};
function withBoxUnlocked(obj){
	console.log(obj)
	if(obj.locked)obj.unlock();
	console.log(obj)
	try{
		console.log(obj.content)
	}catch(e){
		console.log(e.message)
	}
	finally{
		obj.lock()
	}
	console.log(obj)
}

withBoxUnlocked(box)

console.log('-----------------------------------------')
console.log('-----------------------------------------')

