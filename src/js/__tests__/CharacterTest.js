import Character from '../Character';

test('test object character', () => {
  const res = new Character('Character');
  const result = {
    name: 'Character',
    health: 100,
    level: 1,

  };
  expect(res).toEqual(result);
});
test('test name character', () => {
  const res = () => new Character('C');
  expect(res).toThrow('Ошибка');
});
test('test name character', () => {
  const res = () => new Character('Character133');
  expect(res).toThrow('Ошибка');
});
