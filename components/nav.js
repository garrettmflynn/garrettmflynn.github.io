class Nav extends HTMLElement {
    constructor() {
        super();
    }

connectedCallback() {
    this.innerHTML = `
      <a href="/index.html" class="logo"><h3>Garrett Flynn</h3></a>
<!--    <div id="links" class="stretch">-->
<!--      <a href="/index.html" class="link">Home</a>-->
<!--    </div>-->
    `;
}
}

customElements.define('nav-bar', Nav);

