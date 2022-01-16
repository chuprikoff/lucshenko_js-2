class Goods2 extends Goods {
  constructor(name, amount, image, count, sale) {
    super(name, amount, image, count);
    this.sale = sale;
  }
  draw(elem) {
    let out = "";
    for (let key in this) {
      if (key == "sale") continue;
      out += `<div>${this[key]}</div>`;
    }
    if (this.sale) out += "<p>sale</p>";

    document.querySelector(elem).innerHTML = out;
  }
}
