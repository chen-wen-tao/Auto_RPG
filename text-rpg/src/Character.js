class character {
  #health = 100;
  #name = "";
  #equipments = [];

  //creating a character
  constructor(name){
    this.#name = name;
  }

  //Level up the character
  lvl_up(){
    return
  }

  //Deal dmg to the component
  hit(damage){
    return
  }


  //Lose health
  bleed(damage){
    this.#health -= damage;
    return
  }

  heal(amount){
    this.#health += amount;
  }
}

export default character;