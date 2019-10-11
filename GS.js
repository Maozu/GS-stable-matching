var  NUMBER;
var male = [];
var female = [];
var times = 0;
var counter = 0;


function GS() {
    // "use strict";

    init();
}

function init() {
    NUMBER = Number(document.forms["hhh"]["number"].value);
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
    times = 0;
    counter = 0;
    get_answer();
}

function try_engage(male, female, j) {
    for(let i = 0; i < NUMBER ;i++){
        if(-1 !== male[i].engage){
        }else {
            let pursued = male[i][j];
            if(female[pursued].engage === -1){
                female[pursued].engage = i;
                male[i].engage = pursued;
            }else {
                for(let k = 0; k < NUMBER; k++){

                    if(female[pursued][k] === female[pursued].engage ){
                        break;
                    }
                    if(female[pursued][k] === i){
                        male[female[pursued].engage].engage = -1;
                        female[pursued].engage = i;
                        male[i].engage = pursued;
                        break;
                    }
                }
            }
        }
    }
}

function get_answer() {
    let data_m = "";
    let data_f = "";
    data_m += "<table>"; data_f += "<table>";
    for(let i = 0; i < NUMBER; i++){
        data_f += '<tr>'; data_m += '<tr>';
        for(let j = 0; j < NUMBER; j++){
            let change_m = "off", change_f = "off";
            if(male[i].engage === male[i][j]){
                change_m = "on";
            }
            if(female[i].engage === male[i][j]){
                change_f = "on";
            }
            data_m += `<td class=${change_m}>${male[i][j]}</td>`;
            data_f += `<td class=${change_f}>${female[i][j]}</td>`;
        }
        data_m += '</tr>'; data_f += '</tr>';
    }
    data_m += "</table>"; data_f += "</table>";
    document.getElementById('engage_m').innerHTML = data_m;
    document.getElementById('engage_f').innerHTML = data_f;
}

function count() {
    if(times < NUMBER){
        try_engage(male,female,times);
        times += 1;
        get_answer();
    }
}

function final() {
    for(let i = 0; i < NUMBER; i++){
        count();
    }

}
