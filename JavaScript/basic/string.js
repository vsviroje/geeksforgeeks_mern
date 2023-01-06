let text='asdasdsfgsf dfsdfgdfgfg';
console.log(text[3]);
console.log(text.indexOf('d'));
console.log(text.replace('d','#'));
console.log(text.replaceAll('d','#'));
console.log(text.length);
console.log(text.slice(3,8));

console.log('text'[3]);

let text2='asdasdsfgsf dfsdfgdfgfg';
let temp=text.split('d')
console.log(temp);
let temp2=temp.join('*');
console.log(temp2);

console.log(temp2.toUpperCase());
