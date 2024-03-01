import "../style/game.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Character from "../model/character";
import Enemy from "../model/enemy";
import Weapon from "../model/weapon";
import Armor from "../model/armor";
import Weapon_list from "../assets/weapon_list";
import Armor_list from "../assets/armor_list";
import Enemy_name_list from "../assets/enemy_name_list";
import { CookiesProvider, useCookies } from 'react-cookie'

export default class Create_character extends Component{
    constructor(props){
        super(props);
        this.created = false;
        this.hero;
        this.weaponlist = new Weapon_list();
        this.armorlist = new Armor_list();
        this.namelst = new Enemy_name_list();
        this.tmp_enemy = new Enemy(this.namelst.name_list[Math.floor(Math.random() * this.namelst.name_list.length)], 
        Math.floor(Math.random() * 500),
        20,
        30,
        this.weaponlist.weapon_list[Math.floor(Math.random() * this.weaponlist.weapon_list.length)],
        this.armorlist.armor_list[Math.floor(Math.random() * this.armorlist.armor_list.length)]
        );
    }

    render(){    

        if (this.created === false){
            return (
            <>
            <div className="center">
                <label>Name:</label><br/>
                <input type="text" id="name" name="name"/><br/>
                <p>Please select your class:</p>
                <input type="radio" id="warrior" name="class" value="Warrior"/>
                <label>Warrior</label><br/>
                <input type="radio" id="archor" name="class" value="Archor"/>
                <label>Archor</label><br/>
                <input type="radio" id="mage" name="class" value="Mage"/>
                <label>Mage</label>
                <button
                onClick={() => {
                    if(document.getElementById("warrior").checked){
                        this.hero = new Character(document.getElementById("name").value, "Warrior", 200, 1000, 1000, new Weapon("sword", 20), new Armor("Plate armour", 30));
                        this.created = true;
                        // alert("warrior");

                    }
                    if(document.getElementById("archor").checked){
                        this.hero = new Character(document.getElementById("name").value, "Archor", 150, 120, 120, new Weapon("bow", 30), new Armor("Leather Coat", 20));
                        this.created = true;
                        // alert("archor");
                    }
                    if(document.getElementById("mage").checked){
                        this.hero = new Character(document.getElementById("name").value, "Mage", 120, 150, 80, new Weapon("wand", 40), new Armor("Cloak", 10));
                        this.created = true;
                        // alert("mage");
                    }
                    alert(this.hero.show_stat());
                    this.forceUpdate();
                        
                    }}
                >Start</button>
            </div>
            </>
            );  
        }
        else{

            return (
                <>
                    <div className="grid-container">
                        <div className="health-bar-1">Health Bar</div>
                        <div className="health-bar-2">Health Bar</div>
                        <div className="character">{this.hero.show_stat()}</div>
                        <div className="enemy">{this.tmp_enemy.show_stat()}</div>
                        <div className="item"><input type="text" placeholder="Enter Item Name" id="item_name"/></div>
                        <div className="bag"><button
                        onClick={() => {
                            let tmp;
                            if ((tmp = this.hero.inventory.find((element) => element.name == document.getElementById("item_name").value)) != null){

                                let index = this.hero.inventory.indexOf(tmp)
                                if (index > -1) {
                                    this.hero.inventory.splice(index, 1);
                                }
                                if (tmp instanceof Weapon){
                                    this.hero.inventory.push(this.hero.weapon);
                                    
                                }
                                else{
                                    this.hero.inventory.push(this.hero.armor);
                                }
                                this.hero.equip_item(tmp);
                                this.forceUpdate();
                            }
                            else{
                                alert("You dont have the item!!!");
                            }

                        }}
                        
                        
                        >Change Gears</button></div>
                        <div className="fight"><button 
                        onClick={() => {
                            this.hero.fight(this.tmp_enemy)
                            this.tmp_enemy = new Enemy(this.namelst.name_list[Math.floor(Math.random() * this.namelst.name_list.length)], 
                                Math.floor(Math.random() * 500),
                                20,
                                30,
                                this.weaponlist.weapon_list[Math.floor(Math.random() * this.weaponlist.weapon_list.length)],
                                this.armorlist.armor_list[Math.floor(Math.random() * this.armorlist.armor_list.length)]
                                );
                            if (this.hero.health == 0){
                                this.created = false;
                                
                            }
                            this.forceUpdate();
                        }}>Fight</button></div>
                    </div>
                </>
            );
        }

    
    }
}