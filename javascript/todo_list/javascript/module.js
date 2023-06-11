export class Robot {
  constructor(color) {
    this.color = color;
  }

  sayHello() {
    console.log('Hello');
  }
}

export const robot = new Robot('red');

robot.color = 'blue';

export default class Power {
  on() {
    console.log('電源をつける');
  }
}
class StrongPower extends Power {
  on() {
    console.log('強い電源をつける');
  }
}
const power = new Power();

export const strongPower = new StrongPower();
power.on();
strongPower.on();
