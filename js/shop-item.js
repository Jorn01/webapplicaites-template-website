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
    const { name, price, image_src, URL } = this.data;

    this.setAttribute("name", name);
    this.setAttribute("price", price);
    this.setAttribute("imageSRC", image_src);
    console.log(image_src);
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <div class="shop-item">
    <div class="img-container">
      <img src="${imageSRC}" alt="" />
    </div>
    <div class="text-container">
      <h1>${Name}</h1>
      <div class="description-container">
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          porro cumque aspernatur ducimus consectetur at, quia cupiditate
          alias nihil dolore.
        </h5>
        <div class="price-button-container">
          <button type="submit" class="btn btn-primary">Add</button>
          <div class="price-container">
            <h3>€ ${Price}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
  }
}

customElements.define("shop-item", shop_item);

// read the JSON data file, and make a index for the items and a arraylist for all data
