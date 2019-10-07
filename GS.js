function ggg() {
    // "use strict";
    let NUMBER = Number(document.forms["hhh"]["number"].value);
    // const NUMBER = 10;
    var a = 0;
    var b = 0;

    for(let i = 0; i < 1; i++){
        GS();
        console.log("%c male" + a,'color: green');
        console.log("female" + b);
    }
    function GS() {
        // const NUMBER = 10;
        //init
        var female = [];
        var male = [];
        for(let i = 0; i < NUMBER; i++){
            female[i] = [];
            male[i] = [];
            for(let j = 0; j < NUMBER; j++){
                female[i][j] = j;
                male[i][j] = j;
            }
            female[i].sort(function(){
                return 0.5 - Math.random();
            });
            male[i].sort(function(){
                return 0.5 - Math.random();
            });
            female[i].engage = -1;
            male[i].engage = -1;
        }

        for(let j = 0; j < NUMBER ;j++){
            try_engage(male,female,j);
        }
        console.log(female);
        console.log(male);
        // for(let i = 0; i < NUMBER; i++){
        //     console.log("female " + i + " : " + female[i].engage)
        // }
        // for(let i = 0; i < NUMBER; i++){
        //     console.log("male " + i + " : " + male[i].engage)
        // }
        function try_engage(male, female, j) {
            for(let i = 0; i < NUMBER ;i++){
                // console.log("i am "+ i +"i am trying" + j + "times");
                if(-1 !== male[i].engage){
                    // console.log("i am married, i am "+ i);
                }else {
                    let pursued = male[i][j];
                    if(female[pursued].engage === -1){
                        female[pursued].engage = i;
                        male[i].engage = pursued;
                        // console.log("i am lucky, i am "+ i + " my gf is "+pursued)
                    }else {
                        for(let k = 0; k < NUMBER; k++){

                            if(female[pursued][k] === female[pursued].engage ){
                                // console.log("i have'd try and fail, i am "+i+" mygf'bf is "+female[pursued].engage);
                                break;
                            }
                            if(female[pursued][k] === i){
                                male[female[pursued].engage].engage = -1;
                                female[pursued].engage = i;
                                male[i].engage = pursued;
                                // console.log("i have'd try and succeed, i am "+i+" mygf is "+pursued);
                                break;
                            }
                        }
                    }
                }
            }
        }

        var sum_f = 0;
        for(let i = 0; i < NUMBER; i++){
            for (let j = 0; j < NUMBER; j++){
                if(female[i].engage === female[i][j]){
                    sum_f += j;
                    break;
                }
            }
        }
        var sum = 0;
        for(let i = 0; i < NUMBER; i++){
            for (let j = 0; j < NUMBER; j++){
                if(male[i].engage === male[i][j]){
                    sum += j;
                    break;
                }
            }
        }
        a += sum_f;
        b += sum;
        // console.log("male" + sum/NUMBER);
        // console.log("female" + sum_f/NUMBER);
    }
}
