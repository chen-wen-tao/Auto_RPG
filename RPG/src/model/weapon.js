export default class Weapon{
    constructor(name, damage_rate){
        this.name = name;
        this.damage_rate = damage_rate;
    }

    show_stat(){
        return(this.name + ":" + this.damage_rate);
    }
}