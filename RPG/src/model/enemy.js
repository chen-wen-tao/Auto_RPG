export default class Enemy {
    constructor(name, health=100, damage_rate, damage_block_rate, weapon, armor) {
      this.name = name;
      this.health = health;
      this.damage_rate = damage_rate;
      this.damage_block_rate = damage_block_rate;
      this.weapon = weapon;
      this.armor = armor;
    }

    die(){
      this.health = 0;
    }

    show_stat(){
      return(
        "Name: " + this.name + "\n" +
        "Health: " + this.health + "\n" +
        "Damage Rate: " + this.damage_rate + "\n" +
        "Damage Block Rate: " + this.damage_block_rate + "\n" +
        "Weapon: " + this.weapon.show_stat() + "\n" +
        "Armor: " + this.armor.show_stat() + "\n"
      );
    }
  }