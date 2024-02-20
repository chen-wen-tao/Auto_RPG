export default class Armor{
    constructor(name, damage_block_rate){
        this.name = name;
        this.damage_block_rate = damage_block_rate;
    }

    show_stat(){
        return(this.name + ":" + this.damage_block_rate);
    }
}