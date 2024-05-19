// Private and Protected
class Counter {
  #count = 0;

  #increment() {
    this.#count++;
  }
  getIncrement() {
    this.#increment();
  }
  getCount() {
    return this.#count;
  }
}

let counter = new Counter();

counter.getIncrement();
counter.getIncrement();
counter.count = 1000;
console.log(counter.getCount());
