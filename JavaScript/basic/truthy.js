console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(NaN));

console.log(Boolean(1));
console.log(Boolean(" "));


if(null){
    console.log(Boolean('empty'));
}else{
    console.log(Boolean('full'));
}