console.log('Тип вектора')
console.log('-----------------------------------------')
class Vector{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
	plus(vector){
		return new Vector(this.x+vector.x,this.y+vector.y)
	}
	minus(vector){
		return new Vector(this.x-vector.x,this.y-vector.y)
	}
	get length(){
		return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))
	}
}
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);
console.log('-----------------------------------------');
console.log('-----------------------------------------');
console.log('Группы')
console.log('-----------------------------------------');
class Group{
	constructor(){
		this.group = []
	}
	add(velue){
		if(!this.group.includes(velue)){
			this.group.push(velue)
		}
		return this.group
	}
	delete(velue){
		if(this.has(velue)){
			this.group.splice(this.group.indexOf(velue),1)
		}
		return this.group
	}
	has(velue){
		return this.group.indexOf(velue)!==-1?true:false;
	}
	from(obj){
		for(let elem of Object.values(obj)){
			this.add(elem)
		}
		return this.group
	}
}
let gr = new Group()
console.log(gr.add(1));
console.log(gr.add(2));
console.log(gr.add(3));
console.log(gr.add(4));
console.log(gr.add(5));
console.log(gr.add(6));
console.log(gr.add(5));
console.log(gr.delete(5));
console.log(gr.delete(7));
console.log(gr.has(4));
console.log(gr.has(21));
console.log(gr.from({a:1,b:2,c:25,d:74}))
console.log('-----------------------------------------');
console.log('-----------------------------------------');
console.log('Группы')
console.log('-----------------------------------------');
class GroupIterator{
	constructor(group){
		this.group = group;
		this.index =0;
	}
	
	next(){
		if(this.index>=this.group.length) return {done:true};
		let value = this.group[this.index]
		this.index++;
		return {value,done:false}
	}
}
Group.prototype[Symbol.iterator]= function(){
	return new GroupIterator(this)
}
let group = new Group();

console.log(group)
for (let value of  group.from({a:1,b:2,c:25,d:74})) {
 console.log(value);
}
console.log('-----------------------------------------');
console.log('-----------------------------------------');