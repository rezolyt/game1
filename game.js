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
        hp:10,
        img:'zombie_idle_anim_f0.png'
    },
    wizard:{
        lvl:999,
        exp:999,
        str:1,
        hp:999,
        img:'wizzard_f_idle_anim_f0.png'
    }
};
let lvlMap = [0,10,20,50,100,150];
let heroClass = document.querySelector(".hero");
let enemyClass = document.querySelector(".enemy");
let yourLvl = document.querySelector(".yourLvl");
let yourName = document.querySelector(".yourName");
function start() {
    let name;
    name = prompt(`Set name of your Hero:`, 'Bob');
    caracters.hero.name = name;
    yourName.innerHTML += name;
    heroClass.style.backgroundImage  = `url(asset/frames/elf_m_idle_anim_f3.png)`;
    yourLvl.innerHTML = caracters.hero.lvl;
}
start();
function cahar(hero) {
    alert(`lvl = ${hero.lvl},exp = ${hero.exp}, str = ${hero.str}, hp = ${hero.hp}, points = ${hero.points}`);

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
    heroClass.style.backgroundImage  = `url(asset/frames/elf_m_hit_anim_f0.png)`;
    enemyClass.style.backgroundImage  = `url(asset/frames/${enemy.img})`;
    let delayInMilliseconds = 1000; //1 second


    setTimeout(function() {
 
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
          
            alert(`${caracters.hero.name}, you win and gain ${enemy.exp}`);
            lvlCheck(caracters.hero);
            enemyClass.style.backgroundImage  = `url(asset/frames/wall_goo.png)`;
        }
        else {
          
            caracters.hero.exp = 0;
            caracters.hero.lvl = 1;
            caracters.hero.str--;
            caracters.hero.hp = 10;
            yourLvl.innerHTML = caracters.hero.lvl;
            alert(`you loose,${caracters.hero.name} your exp = 0`);
            heroClass.style.backgroundImage  = `url(asset/frames/wall_goo.png)`;
        }
        heroClass.style.backgroundImage  = `url(asset/frames/elf_m_idle_anim_f3.png)`;
       
      }, delayInMilliseconds);
   
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
    }     while (currentExp >= lvlMap[i] ) ;
    yourLvl.innerHTML = hero.lvl;
if (lvlOld < lvlNew) {
    hero.points++;
    alert(`You get ${hero.points} points`);
}
else {
    hero.points;
}
}