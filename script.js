const bolinhas = [
  { name: "Bolinha de Frango", price: "R$ 16,99" },
  { name: "Bolinha de Carne do Sol", price: "R$ 16,99" },
  { name: "Bolinha de Peixe", price: "R$ 16,99" },
  { name: "Bolinha de Calabresa com Queijo", price: "R$ 16,99" },
];

const pastelzinhos = [
  { name: "Pastel de Queijo", price: "R$ 21,99" },
  { name: "Pastel de Carne do Sol", price: "R$ 21,99" },
  { name: "Pastel de Frango", price: "R$ 21,99" },
  { name: "Pastel de Calabresa com Queijo", price: "R$ 21,99" },
  { name: "Pastel de Arraiá", price: "R$ 23,99" },
  { name: "Pastel de Camarão", price: "R$ 24,99" },
];

const entradas = [
  { name: "Batata Frita", price: "R$ 15,99" },
  { name: "Macaxeira", price: "R$ 15,99" },
  { name: "Baião", price: "R$ 10,00" },
  { name: "Torresmo", price: "R$ 10,00" },
  { name: "Camarão Alho e Óleo", price: "R$ 19,90" },
  { name: "Empanado de Camarão", price: "R$ 34,99" },
  { name: "Calabresa Acebolada", price: "R$ 20,00" },
];

const bebidas = [
  { name: "Cerveja Buchudinha", price: "R$ 5,00" },
  { name: "Heineken 330ml long neck", price: "R$ 9,00" },
  { name: "Stella 330ml long neck", price: "R$ 9,00" },
  { name: "Skol Beats", price: "R$ 10,00" },
  { name: "Whisky Black White dose", price: "R$ 8,00" },
  { name: "Ypióca dose", price: "R$ 3,50" },
  { name: "Ypióca (copo) 200ml", price: "R$ 7,00" },
  { name: "Água de côco (jarra)", price: "R$ 12,00" },
  { name: "sucos", price: "R$ 7,00" },
  { name: "Água com Gás", price: "R$ 3,00" },
  { name: "Água sem Gás", price: "R$ 2,00" },
];

function renderSection(title, items) {
  let html = `<div class="menu-section"><div class="menu-title">${title}</div>`;
  items.forEach((item) => {
    html += `<div class="produto-item">
      <span class="produto-nome">${item.name}</span>
      <span class="produto-preco">${item.price}</span>
    </div>`;
  });
  html += `</div>`;
  return html;
}

document.getElementById("menu").innerHTML =
  renderSection("Bolinhas: 12 Unidades", bolinhas) +
  renderSection("Pastelzinho: 12 Unidades", pastelzinhos) +
  renderSection("Entradas", entradas) +
  renderSection("Bebidas", bebidas) +
  `<div class="menu-section"><div class="menu-title">Quinta do Caragueijo</div>
    <div class="produto-item"><span class="produto-nome">03 Unidades</span><span class="produto-preco">R$ 26,99</span></div>
  </div>
  <div class="menu-section"><div class="menu-title">Aos Domingos</div>
    <div class="produto-item"><span class="produto-nome">Panelada</span><span class="produto-preco">R$ 29,90</span></div>
  </div>`;
