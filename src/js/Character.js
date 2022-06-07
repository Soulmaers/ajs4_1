export default class Character {
  constructor(name) {
    this.name = name;
    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка');
    }
    this.health = 100;
    this.level = 1;
  }
}
