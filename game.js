let caracters  = {
    hero: {
        name:'',
        lvl:1 ,
        exp:0,
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
let lvlMap = [0,10,20,50,100,150]
function start() {
    let name;
    name = prompt(`Set name of your Hero:`, 'Bob');
    caracters.name = name;
}
start();
function cahar(hero) {
    alert(`Name = ${caracters.name}, lvl = ${hero.lvl},exp = ${hero.exp}, str = ${hero.str}, hp = ${hero.hp}, points = ${hero.points}`);
}
function powerUp(hero) {
    powerQ = +prompt(`${caracters.name} хочешь прокачать силу - введи 1, хотите прокачать жизнь введите 2 `, 0);
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
      
        alert(`${caracters.name}, you win and gain ${enemy.exp}`);
        lvlCheck(caracters.hero);
    }
    else {
      
        caracters.hero.exp = 0;
        caracters.hero.lvl = 1;
        caracters.hero.str--;
        caracters.hero.hp = 10;
        alert(`you loose,${caracters.name} your exp = 0`);
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
    alert(`Congratulations ${caracters.name}, you gain new lvl - ${lvlNew}! And get ${hero.points} points`);
}
else {
    hero.points;
}
}