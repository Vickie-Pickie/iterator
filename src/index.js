import Team from './js/Team';
import Person from './js/Person';

const hero1 = new Person('Bob', 'Undead', 100, 2, 20, 10);
const hero2 = new Person('Morty', 'Bowman', 100, 2, 20, 10);
const hero3 = new Person('Rick', 'Bowman', 100, 2, 20, 10);

const team = new Team();
team.addAll(hero1, hero2, hero3);

for (const hero of team) {
  console.log(hero);
}
