import Magician from '../Magician';

test('test magician', () => {
  const res = new Magician('Magician');
  const result = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(res).toEqual(result);
});
