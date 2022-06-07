import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Undead from './Undead';
import Zombie from './Zombie';
import Daemon from './Daemon';

const bowmanConst = new Bowman('Bowman');
const swordsmanConst = new Swordsman('Swordsman');
const magicianConst = new Magician('Magician');
const udeadConst = new Undead('Undead');
const zombieConst = new Zombie('Zombie');
const daemonConst = new Daemon('Daemon');

console.log(bowmanConst, swordsmanConst, magicianConst, udeadConst, zombieConst, daemonConst);
