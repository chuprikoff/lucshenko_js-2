class Goods {
  constructor(name, amount, image, count) {
    this.name = name;
    this.amount = amount;
    this.image = image;
    this.count = count;
  }
  draw(elem) {
    let out = "";
    for (let key in this) {
      out += `<div>${this[key]}</div>`;
    }
    document.querySelector(elem).innerHTML = out;
  }
}
