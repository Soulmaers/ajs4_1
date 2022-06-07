import Swordsman from '../Swordsman';

test('test swordsman', () => {
  const res = new Swordsman('Swordsman');
  const result = {
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(res).toEqual(result);
});
