let male = [];
let female = [];
let NUMBER = 5;
let times = 0;
let counter = 0;

class Male {
    constructor(i){
        this.id = i;
        this.love_list = [];
        this.engage = -1;
        this.try_times = 0;
        this.match = function(){
            if(-1 === this.engage){
                let pursed = this.love_list[this.try_times];
                if(female[pursed].try_engage_female(pursed)){
                    this.engage = pursed;
                }
            }
        }
    }
}


class Female {
    constructor(i){
        this.id = i;
        this.love_list = [];
        this.engage = -1;
        this.match = this.try_engage_female();
    }
    try_engage_female(suitor){
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
    // NUMBER = Number(document.forms["form_number"]["number"].value);
    for(let i = 0; i < NUMBER; i++){
        female[i] = new Male(i);
        male[i] = new Female(i);
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
    // get_answer();
}

function try_engage() {
    for(let i = 0; i < NUMBER; i++){
        male[i].try_engage_male();
    }
}

init();
try_engage();
console.log(female);
console.log(male);