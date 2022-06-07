import Zombie from '../Zombie';

test('test zombie', () => {
  const res = new Zombie('Zombie');
  const result = {
    name: 'Zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(res).toEqual(result);
});
