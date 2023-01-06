//Map
const temp= new Map();
temp.set('name','anirudha');
temp.set('age',23);

console.log(temp);
console.log(temp.get('name'));

let arrayData=['asd','dbfg']
temp.set(arrayData,89);

console.log(temp);
console.log(temp.get(arrayData));

const temp2= new Map([
    ['name','anirudha'],
    ['age',23],
    [['asd','dbfg'],'89'],
]);

console.log(temp2);
for(let [key,val] of temp2){
    console.log(key,val);
}
