import Armor from "./armor";
import Weapon from "./weapon";

export default class Character {
    constructor(name, profession, health=100, damage_rate, damage_block_rate, weapon, armor, inventory=[]) {
      this.name = name;
      this.profession = profession;
      this.health = health;
      this.damage_rate = damage_rate;
      this.damage_block_rate = damage_block_rate;
      this.weapon = weapon;
      this.armor = armor;
      // this.level = level;
      this.inventory = inventory;
    }

    lvl_up(){
      this.health += 10;
      this.damage_rate += 1;
      this.damage_block_rate += 1;
    }

    die(){
      this.health = 0;
      alert("You Died!!");
    }

    fight(target){
      if (((this.damage_block_rate + this.armor.damage_block_rate) - (target.damage_rate + target.weapon.damage_rate)) > ((target.damage_block_rate + target.armor.damage_block_rate) - (this.damage_rate + this.weapon.damage_rate))){
        alert("You Win!!!!");
        this.obtain_item(target.weapon);
        this.obtain_item(target.armor);
      }
      else{
        this.die();
      }
    }

    equip_item(item){
      if (item instanceof Weapon){
        this.weapon = item;
      }
      if (item instanceof Armor){
        this.armor = item;
      }
    }

    obtain_item(item){
      this.inventory.push(item)
    }

    change_name(new_name){
      this.name = new_name;
    }

    show_stat(){
      return(
        "Name: " + this.name + "\n" +
        "Profession: " + this.profession + "\n" +
        // "Level: " + this.level + "\n" +
        "Health: " + this.health + "\n" +
        "Damage Rate: " + this.damage_rate + "\n" +
        "Damage Block Rate: " + this.damage_block_rate + "\n" +
        "Weapon: " + this.weapon.show_stat() + "\n" +
        "Armor: " + this.armor.show_stat() + "\n" +
        "Inventory: " + this.inventory.map((item) => item.show_stat()) + "\n"
      );
    }
  }