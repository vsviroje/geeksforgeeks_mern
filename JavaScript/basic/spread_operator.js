//array

const arrayData=['sd',1,'ds',true,{test:1,best:'hg'},null];
const temp1=[...arrayData];
console.log(temp1)
const temp2=[0,...arrayData,2,4,'h',1];
console.log(temp2)


//object 

const temp3={
    age:23,
    name:'sda'
}
const temp4={
    area:'airoli',
    ...temp3,
}
console.log(temp4)

//string
const temp5='vardhaman';
const temp6=[...temp5];
console.log(temp6)

