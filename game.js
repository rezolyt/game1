let caracters  = {
    hero: {
        lvl:1 ,
        exp:0,
        str:5,
        hp:10,
        points:1,
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
let lvlMap = [0,10,20,50,100,150]

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
    let i = 0;
    do{
        i++;        
        lvlNew = i;
        hero.lvl = lvlNew;
    }     while (currentExp >= lvlMap[i] ) 

if (lvlOld < lvlNew) {
    hero.points++;
}
else {
    hero.points;
}

alert(`Your lvl whas ${lvlOld} new - ${lvlNew}, you have ${hero.points} points`);
}