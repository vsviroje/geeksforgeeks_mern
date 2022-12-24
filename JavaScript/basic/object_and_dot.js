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


