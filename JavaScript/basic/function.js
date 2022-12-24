//scenario 1
function test1(){
    console.log("test")
}

test1()
test1()
test1()
test1()

//scenario 2
function test2(fs,ls){
    console.log(`test=> ${fs}.${ls}`)
}

test2('a','b')

//scenario 3
function test3(fs,ls){
    const ret=`test=> ${fs}.${ls}`;
    return ret;
}

console.log(test3('x','v'))

///function declaration
test4()
function test4(){
    console.log("test")
}

///function expression
// test5()
// test5=function (){
//     console.log("test")
// }

///function arrow
    //scenario 1
    const test6=()=>'test';
    console.log(test6())

    //scenario 2
    const test7=(fs,ls)=>`test-${fs}.${ls}`;
    console.log(test7(1,2))

    //scenario 3
    const test8=(fs,ls)=>{
        const ret=`test-${fs}.${ls}`;
        return ret;
    }
    console.log(test8(6,2))

///function calling function
const test9=()=>'test';
const test10=()=>'asdf';

const test11=(fs,ls)=>{
    const ret1=test9();
    const ret2=test10();

    const ret=`${ret1}.${ret2}-${fs}.${ls}`;
    return ret;
}
console.log(test11(0,7))


