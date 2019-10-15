let male = [];
let female = [];
let NUMBER;
let times = 0;
let counter = 0;

class Male {
    constructor(i){
        this.id = i;
        this.love_list = [];
        this.engage = -1;
        Male.try_times = 0;
    }
    match_m(){
        if(-1 === this.engage){
            let pursed = this.love_list[Male.try_times];
            if(female[pursed].match_f(pursed)){
                this.engage = pursed;
            }
        }
    }
}


class Female {
    constructor(i){
        this.id = i;
        this.love_list = [];
        this.engage = -1;
    }
    match_f(suitor){
        if(this.engage === -1){
            this.engage = suitor;
            return true;
        } else {
            for(let k = 0; k < NUMBER; k++){
                if(this.love_list[k] === this.engage){
                    return false;
                }
                if(this.love_list[k] === suitor){
                    male[this.engage].engage = -1;
                    this.engage = suitor;
                    return true;
                }
            }
        }

    }
}

function init() {
    NUMBER = Number(document.forms["form_number"]["number"].value);
    for(let i = 0; i < NUMBER; i++){
        male[i] = new Male(i);
        female[i] = new Female(i);
        for(let j = 0; j < NUMBER; j++){
            female[i].love_list[j] = j;
            male[i].love_list[j] = j;
        }
        female[i].love_list.sort(function(){
            return 0.5 - Math.random();
        });
        male[i].love_list.sort(function(){
            return 0.5 - Math.random();
        });
    }

    // times = 0;
    // counter = 0;
    get_answer();
}

function try_engage() {
    for(let i = 0; i < NUMBER; i++){
        male[i].match_m();
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
            if(male[i].engage === male[i].love_list[j]){
                change_m = "on";
            }
            if(female[i].engage === male[i].love_list[j]){
                change_f = "on";
            }
            data_m += `<td class=${change_m}>${male[i].love_list[j]}</td>`;
            data_f += `<td class=${change_f}>${female[i].love_list[j]}</td>`;
        }
        data_m += '</tr>'; data_f += '</tr>';
    }
    data_m += "</table>"; data_f += "</table>";
    document.getElementById('engage_m').innerHTML = data_m;
    document.getElementById('engage_f').innerHTML = data_f;
}

function count() {
    if(Male.try_times < NUMBER){
        try_engage();
        Male.try_times += 1;
        get_answer();
    }
}

function final() {
    for(let i = 0; i < NUMBER; i++){
        count();
    }
}