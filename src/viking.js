// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    recieveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Solidier {
constructor(name, health, strength){
    super(health, strength);
    this.name = name;
}
receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0) {
        return '${this.name} has recievd ${damage} points of damage';
    } else {
        return '${this.name} has died in act of combat'; 
    }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
    }


// Saxon
class Saxon extends Soldier{
    receiveDamage(Damage) {
        this.health -= damage;
        if (this.health >0) {
            return 'A Saxon has received ${damage} points of damage';
        } else { 
            return 'A Saxon has died in combat';
        }
      }
    }


// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }
    vikingAttack() {
        if ( this.saxonArmy.length === 0) return "Saxon have fought for their lives and survive another say...";

        const vikingIndex = Math.floor(Math,random()* this.vikingArmy.length);
        const saxonIndex = Math.floor(Math.random()* this.saxsonArmy.length);
        const viking = this.VikingArmy[vikingInd];
        const saxon = this.saxonArmy[saxonIndex];

        const damageResult = saxon.receiveDamage(viking.strength);

        if (saxon.health <= 0) {
            this.saxonArmy.splice(saxonIndex, 1);

        }
        return damageResult;
    }
    saxonAttack () {
        if (this.vikingArmy.length === 0) return "Viking hase fought for their lives and survieve another da...";
       
        const vikingIndex = Math.floor(Math,random()* this.vikingArmy.length);
        const saxonIndex = Math.floor(Math.random()* this.saxsonArmy.length);
        const viking = this.VikingArmy[vikingInd];
        const saxon = this.saxonArmy[saxonIndex];

        const damageResult = viking.receiveDamage(saxon.strength);

        if (viking.health <= 0) {
            this.vikingArmy.splice(vikingIndex, 1);
        }
        return damageResult;

    }

    showStatus() {
        if (this.saxonArmy.length === 0) return "Viking have won the war of the centry!";
        if (this.vikingArmy.length === 0) return "Saxon have fought for their lives and survive another day... ";
        return " Viking and Saxon are still in the thick of battle.";
    }
}
