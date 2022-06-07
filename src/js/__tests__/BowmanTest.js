import Bowman from '../Bowman';

test('test bowman', () => {
  const res = new Bowman('Bowman');
  const result = {
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(res).toEqual(result);
});
