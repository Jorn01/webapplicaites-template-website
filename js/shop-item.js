class shop_item extends HTMLElement {
  constructor(dataatm) {
    super();
    this.data = dataatm;
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["name", "price"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  connectedCallback() {
    const { name, price, imagaSRC, URL } = this.data;

    this.setAttribute("name", name);
    this.setAttribute("price", price);
    this.setAttribute("imageSRC", imagaSRC);
    this.render();

    this.addEventListener("click", () => {
      document.location.href = URL;
    });
  }

  render() {
    const Name = this.getAttribute("name");
    const Price = this.getAttribute("price");
    const imageSRC = this.getAttribute("imageSRC");

    this.shadowRoot.innerHTML = `
    <style>
    @import "../css/shop-item.css";
    </style>
        <div class="shop-item">
          <img src="../img/${imageSRC}" alt="${Name}" />
          <div class="text">
          <h1>${Name}</h1>
          <h3>${Price}</h3>
          </div>
        </div>`;
  }
}

customElements.define("shop-item", shop_item);

// read the JSON data file, and make a index for the items and a arraylist for all data
