//var
    //scenario 1
    var temp='asd';

    function test(){
        var temp='asd12';
        console.log(temp);
    }
    test();
    console.log(temp);

    //scenario 2
    var data='data';
    {
        var data='data12';
        console.log(data);
    }
    console.log(data);

    //scenario 3
    var data1='data';
    var data1='data12';
    console.log(data1);

     //scenario 4
     console.log(data2);
     var data2='data';

    //scenario 5
    var data3;
    console.log(data3);
    var data3="asd";
    console.log(data3);

    
//let

    //scenario 1
    let data4='data';
    {
        let data4='data12';
        console.log(data4);
    }
    console.log(data4);

    
    // //scenario 2
    // let data6='data';
    // let data6='data12';
    // console.log(data6);

    //scenario 3
    let data6='data';
    data6='data12';
    console.log(data6);

    // //scenario 4
    // console.log(data7);
    // let data7='data';

    //scenario 4
    let data8;
    console.log(data8);
    data8='data';
    console.log(data8);

//const
    //scenario 1
    const data9='data';
    {
        const data9='data12';
        console.log(data9);
    }
    console.log(data9);


    // //scenario 2
    // const data10='data';
    // const data10='data12';
    // console.log(data10);
   
    // //scenario 3
    // console.log(data11);
    // const data11='data';

    // //scenario 4
    // const data12;
    // console.log(data12);
    // data12='data';
    // console.log(data12);