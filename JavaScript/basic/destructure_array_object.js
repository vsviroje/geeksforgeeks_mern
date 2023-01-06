
//array destructuring
    const arrayData=['sd',1,'ds',true,{test:1,best:'hg'},null];
    console.log(arrayData);

    //scenario 1
    const [a,b,c,d,e,f]=arrayData;
    console.log(a,b,c,d,e,f);

    //scenario 2
    const [i,,j,,k]=arrayData;
    console.log(i,j,k);

    const arrayData2=[1,2,[4,5]];
    console.log(arrayData2);

    //scenario 3
    let [m,,[o,u]]=arrayData2;
    console.log(m,o,u);
    //scenario 4 swapping/exchanging
    [o,u,m]=[m,o,u];
    console.log(m,o,u);


//object destructuring
    const temp={
        age:23,
        name:'sda',
        friends:['a','b','c'],
        extra:{test:1,best:'hg'}
    }

    //scenario 1
    const{age:ageOfPerson,
        name:nameOfPerson,
        friends:friendsOfPerson,
        extra:{
            test:testOfPerson,
            best:bestOfPerson
        }}=temp;
    console.log(ageOfPerson,nameOfPerson,friendsOfPerson,testOfPerson,bestOfPerson);

    //scenario 2
    let a1='a';
    let b1='b';
    console.log(a1,b1);
    ({
        a1,b1
    }={
        a1:'x',
        b1:'y',
    })
    console.log(a1,b1);
