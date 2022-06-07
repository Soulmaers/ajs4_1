import Daemon from '../Daemon';

test('test daemon', () => {
  const res = new Daemon('Daemon');
  const result = {
    name: 'Daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(res).toEqual(result);
});
