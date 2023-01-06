//Set

const temp=new Set(['asd','dfgd','yuiy','cxv','asd']);
console.log(temp);

for(let i of temp){
    console.log(i);
}

console.log(temp.has('dfgd'));
console.log(temp.has('dfgd1'));

temp.add('mnbn');
console.log(temp);

temp.delete('cxv');
console.log(temp);
