let caracters  = {
    hero: {
        lvl:1 ,
        exp:10,
        str:5,
        hp:10,
        points:0,
    },
    zombie:{
        lvl:2,
        exp:10,
        str:2,
        hp:10
    },
    wizard:{
        lvl:999,
        exp:999,
        str:1,
        hp:999
    }
};
let lvlMap = [20,40,50,100]

function cahar(hero) {
    alert(` lvl = ${hero.lvl},exp = ${hero.exp}, str = ${hero.str}, hp = ${hero.hp}, points = ${hero.points}`);
}
function powerUp(hero) {
    powerQ = +prompt(`Хотите прокачать силу - введите 1, хотите прокачать жизнь введите 2 `, 0);
    if ((powerQ == 1 && (hero.points > 0))) {
        hero.str++;
        hero.points--;
    }
    else if ((powerQ == 2) && (hero.points > 0)){
        hero.hp++;
        hero.points--;
    }
    else {
        
    }
}
function battle(enemy) {
    hp = enemy.hp;
    let  i,j;
    for (i = 0; hp > 0; i++) {
        hp  = hp - caracters.hero.str;
    }
    hp = caracters.hero.hp;
    for (j = 0; hp > 0; j++) {
        hp  = hp - enemy.str;
    }
    if ( i < j) {
        caracters.hero.exp += enemy.exp;
      
        alert(`you win and gain ${enemy.exp}`);
        lvlCheck(caracters.hero);
    }
    else {
      
        caracters.hero.exp = 0;
        caracters.hero.lvl = 1;
        caracters.hero.str--;
        caracters.hero.hp = 10;
        alert(`you loose, your exp = 0`);
    }
}

function lvlCheck(hero) {
    currentExp = hero.exp;
    let lvlOld = hero.lvl;
    let lvlNew;
for ( let index = 0; index < lvlMap.length; index++) {
    const expNeed = lvlMap[index];
    if (currentExp >= expNeed) {
        lvlNew = index + 1;
        hero.lvl = lvlNew;
    }
    else {
      break;
    }
}
if (lvlOld != lvlNew) {
    hero.points++;
}
else {
    hero.points;
}

alert(`Your lvl whas ${lvlOld} new - ${lvlNew}, you have ${hero.points} points`);
}