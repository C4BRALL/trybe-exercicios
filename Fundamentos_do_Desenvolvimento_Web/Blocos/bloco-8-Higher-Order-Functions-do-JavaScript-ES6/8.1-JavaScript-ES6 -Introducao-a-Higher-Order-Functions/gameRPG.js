const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
  manaTotal: (callback, manaT, mana) => {
    const manatotal = callback(manaT, mana);
    return manatotal;
  },
  atack: (callback, intelligence, mana) => {
    const danger = callback(intelligence, mana);
    return danger;
  },
};
const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
  atack:  (callback, strength, weaponDmg) => {
    const danger = callback(strength, weaponDmg);
    return danger;
  },
};
const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
  atack: (callback, strength) => {
    const danger = callback(strength);
    return danger;
  },
};

damageMage = (intelligence, mana) => {
  if (mana < 15) {
    return "mana gasta 0";
  } else {
    const random =  Math.floor(Math.random() * ((intelligence * 2) - (intelligence) + 1) ) + (intelligence);
    return mage.damage = random;
  }
};
damageMage(mage.intelligence, mage.mana);
manaT = (mana) => {
  if (mana < 15) {
    return "Não possui mana suficiente";
  }
  return mage.mana = mana - 15;
}
manaT(mage.mana);

damageWarrior = (strength, weaponDmg) => {
  const damageRAndom = Math.floor(Math.random() * ((strength + weaponDmg) - (strength) + 1) ) + (strength);
  return warrior.damage = damageRAndom;
};
damageWarrior(warrior.strength, warrior.weaponDmg);

damageDragon = (strength) => {
  const damageDragon = Math.floor(Math.random() * ((strength) - 15 + 1) ) + 15;
  return dragon.damage = damageDragon;
};
damageDragon(dragon.strength);

actionWarrior = (healthPoints) => {
  const dano = warrior.damage;
  return dragon.healthPoints = dragon.healthPoints - dano;
};
actionWarrior(dragon.healthPoints);

actionMage = (healthPoints) => {
  const dano = mage.damage;
  return dragon.healthPoints = dragon.healthPoints - dano;
};
actionMage(dragon.healthPoints);

actionDragon = (warHealth, MagHealth) => {
  const dano = dragon.damage;
  const warriorHealth = warrior.healthPoints - dano;
  const mageHealth = mage.healthPoints - dano;
  return warrior.healthPoints = warriorHealth, mage.healthPoints = mageHealth;
};
actionDragon(warrior.healthPoints, mage.healthPoints);

const battleMembers = (dragon, warrior, mage) => {
  console.log('-----------------------------------------------------------------------------------------');
  console.log("Dragon:");
  console.log(dragon);
  console.log('-----------------------------------------------------------------------------------------');
  console.log("Warrior:");
  console.log(warrior);
  console.log('-----------------------------------------------------------------------------------------');
  console.log("Mage:");
  console.log(mage);
  console.log('-----------------------------------------------------------------------------------------');
}
console.log(battleMembers(dragon, warrior, mage));