class Robot {
  constructor(color) {
    this.color = color;
  }

  sayHello() {
    console.log('Hello');
  }
}

const robot = new Robot('red');

robot.color = 'blue';

class Power {
  on() {
    console.log('電源をつける');
  }
}
class StrongPower extends Power {
  on() {
    console.log('強い電源をつける');
  }
}
power = new Power();

strongPower = new StrongPower();
power.on();
strongPower.on();
