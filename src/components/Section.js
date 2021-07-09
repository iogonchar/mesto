export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  renderItems(items) {
    // отрисовка каждого элемента
    items.forEach(item => this._renderer(item));
  }

  addItem(element) {
    // добавление элемента в контейнер
    this._container.prepend(element);
  }
}
