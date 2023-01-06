//array

const arrayData1=['sd',1,'ds',true,{test:1,best:'hg'},null];
const arrayData2=['ds',true,{vbn:1,yrttu:'hg'},'fghfgn',78,];

const [temp1,temp2,...rest]=[...arrayData1,...arrayData2];
console.log(rest)
console.log(rest,temp2,temp1)

// object
const temp3={
    age:23,
    name:'sda',
    anual_salary:0,
    friends:['vsv','asv'],
}

const {
    age:tempage,
    ...rest2
}=temp3;
console.log(rest2,tempage);

//function
function display(fst,snd,...rest){
    console.log(fst,snd);
    for(let i=0;i<rest.length;i++){
        console.log(rest[i]);
    }
}
display(1,2,3,4,5,6,7,8)