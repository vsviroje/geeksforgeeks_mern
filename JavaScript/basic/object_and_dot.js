//object
    //scenario 1
    const temp={
        age:23,
        name:'sda'
    }
    console.log(temp)
    console.log(typeof temp)

    //scenario 2
    const temp2=new String("sda");
    console.log(temp2)
    console.log(typeof temp2)

//use dot to access element inside object
    const temp3={
        age:56,
        name:'hgf'
    };
    console.log(temp3);
    console.log(typeof temp3);
    console.log(temp3.age,temp3.name);
    console.log(temp3["name"],temp3["age"]);

    temp3.isMale=true
    console.log(temp3);
    
    temp3["games"]=['csgo','vice city']
    console.log(temp3);

//object method and `this` keyword
const temp4={
    age:56,
    name:'hgf',
    anual_salary:0,
    display:function(){
        return this.name+' '+this.age;
    },
    addSalary:function(sal){
        this.anual_salary=sal*12;
    }
};

console.log(temp4.display());
console.log(temp4['display']());
temp4.addSalary(100);
console.log(temp4.anual_salary);


//Enhanced object literals
let test="test23"
const temp5={
    [`test`]:"test",
    [`${test}`]:"test",
    age:56,
    name:'hgf',
    anual_salary:0,
    display:function(){
        return this.name+' '+this.age;
    },
    temp4,
    temp6:temp4,
};

console.log(temp5);
console.log(temp5.display());

//optional chaining
const temp6={
    age:56,
    name:'hgf',
    anual_salary:0,
    display:function(){
        return this.name+' '+this.age;
    },
    temp:{
        age:23,
        name:'sda'
    }
};
console.log(temp6);
console.log(temp6.display?.() || "invalid method");
console.log(temp6.display1?.() || "invalid method");
console.log(temp6.temp?.age || "invalid element");
console.log(temp6.temp?.number || "invalid element");

//object looping
const temp7={
    age:56,
    name:'hgf',
    anual_salary:0,
    display:function(){
        return this.name+' '+this.age;
    },
    temp:{
        age:23,
        name:'sda'
    }
};
console.log(temp7);
console.log(Object.keys(temp7));
console.log(Object.values(temp7));
let temp8=Object.entries(temp7);
console.log(temp8);
for(let item of temp8){
    console.log(item);
}
