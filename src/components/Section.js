export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    // отрисовка каждого элемента
    this._renderedItems.forEach(item => this._renderer(item));
  }

  addItem(element) {
    // добавление элемента в контейнер
    this._container.prepend(element);
  }
}
