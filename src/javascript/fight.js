import { createFighters } from './fightersView';

export function fight(firstFighter, secondFighter) {
    console.log("firstFighter "+firstFighter);
    console.log("secondfighter"+secondFighter);

    var winner = new Map();
    const elements = document.querySelectorAll('#root');
    let frst =   firstFighter['health'];
    let scnd =   secondFighter['health'];
    let fighter = new Map();
    var i=0;
    while(true) {
          frst = frst -  getDamage(firstFighter, secondFighter);
         setTimeout(function(){console.log('check 3000')}, 3000);
        scnd = scnd -getDamage(secondFighter, firstFighter);
        setTimeout(function(){console.log('check 3000')},3000);
        if (frst<=0 || scnd<=0) {

            if (frst <= 0) {
                console.log("frst" + frst);

                winner.set('winner', secondFighter);
                console.log("frst" + winner.get('winner'));

                // return false;
                break;
            }
            if (scnd <= 0) {
                console.log("scnd" + scnd);

                winner.set('winner', firstFighter);
                console.log("scnd" + winner.get('winner'));

                // return false;
                break;
            }
        }
        i++;
            console.log(i);
        }
    console.log("figt");
    console.log("WINNER"+winner.get('winner'));
    console.log("fight");
    let result = winner.get('winner')
    return  result;

}

export function getDamage(attacker, enemy) {
  // damage = hit - block
    let hit = getHitPower(enemy);
    let block =  getBlockPower(attacker);
    let  damage = hit - block;
    return damage;
}

export function getHitPower(fighter) {
  // return hit power
    console.log(fighter);
    const {attack } = fighter;
    let getPower = attack  * Math.random() * 2;
    return getPower;
}

export function getBlockPower(fighter) {
  // return block power
  //   power = attack * criticalHitChance
  //   criticalHitChance — рандомне число від 1 до 2,
  //   power = defense * dodgeChance
  //   dodgeChance — рандомне число від 1 до 2.
    const {defense} = fighter;
    let getDefence = defense  * Math.random() * 2;
    return getDefence;
}

