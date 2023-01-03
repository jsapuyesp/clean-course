type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
  constructor(
    public name: string,
    public price: number,
    public size: Size
  ) { }

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ((<string>this[key]).length <= 0) throw Error(`${key} is empty`);
          break;
        case 'number':
          if ((<number>this[key]) <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not defined`)
      }
    }
    return true;
  }

  toString() {

    if (!this.isProductReady) return;

    return `${this.name}, (${this.size}), $${this.price}`
  }

}

(() => {

  const bluePants = new Product('Blue Large Pants', 10, 'S');
  console.log(bluePants.toString())

})();