import Undead from '../Undead';

test('test undead', () => {
  const res = new Undead('Undead');
  const result = {
    name: 'Undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(res).toEqual(result);
});
