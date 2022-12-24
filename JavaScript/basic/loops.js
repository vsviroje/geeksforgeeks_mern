//for loop
for(let i=1;i<=5;i++){
    console.log(i)
}

for(let i=1;i<=5;i++){
    if(i===2){
        console.log(i)
        break;
    }
    console.log(i)
}

for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i===2 && j>=3){
            console.log(i,'=',j)
        }
    }
}

const arrayData=['sd',1,'ds',true,{test:1,best:'hg'},null];
const typeOfData=[];
for(let i=0;i<arrayData.length;i++){
    console.log(arrayData[i])
    typeOfData.push(typeof arrayData[i])
}

console.log(typeOfData);
for(let i=0;i<typeOfData.length;i++){
    if(typeOfData[i] !== 'string'){
        continue;
    }
    console.log(typeOfData[i],'=',arrayData[i])
}

//while loop

let count=1;
while(count<=10){
    console.log(count);
    count+=2;
}
