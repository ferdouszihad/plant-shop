const products = [
  {
    name: "Small Scindapsus Aureum - Devil’s Ivy- Pothos",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/Scindapsus_ff99fc67-bace-4efc-9e8b-d0811e2e131e.png?v=1636054528&width=1100",
    price: 1815,
    id: 0,
  },
  {
    name: "Ficus Benjamina &quot;The Weeping Fig&quot; - Plant Store",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/Ficus_Benjamina_weepingfig.jpg?v=1526704111&width=1100",
    price: 1816,
    id: 1,
  },
  {
    name: "Medium Monstera deliciosa- Swiss Cheese Plant - 60cm",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/monstera.png?v=1641565765&width=1100",
    price: 2472,
    id: 2,
  },
  {
    name: "Schefflera arboricola - Umbrella Tree 160cm",
    img_url:
      "https://www.plantstore.ie/cdn/shop/files/schefflera_59f3db59-d5e2-490c-9307-6f00fdb3537c.png?v=1736774137&width=1100",
    price: 1958,
    id: 3,
  },
  {
    name: "Pachira Aquatica - Plant Store",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/Pachira_aquatica.jpg?v=1621338511&width=1100",
    price: 1989,
    id: 4,
  },
  {
    name: "Boston Fern",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/bostonfern.png?v=1641324387&width=1100",
    price: 3220,
    id: 5,
  },
  {
    name: "The ZZ Plant",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/zzz.png?v=1641318828&width=1100",
    price: 2591,
    id: 6,
  },
  {
    name: "Large Scindapsus- Devil&",
    img_url:
      "https://www.plantstore.ie/cdn/shop/files/4SCAUHA19.png?v=1708437156&width=1100",
    price: 3341,
    id: 7,
  },
  {
    name: "Create Your Own Succulent Terrarium Kit (Large)",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/DIYTerrariumKitPic1.png?v=1615035621&width=1100",
    price: 3049,
    id: 8,
  },
  {
    name: "Peace Lily - Spathiphyllum",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/SPATHIPHYLLUM.png?v=1641321814&width=1100",
    price: 1219,
    id: 9,
  },
  {
    name: "Areca Palm- Medium - 130cm",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/areca.png?v=1641562923&width=1100",
    price: 1438,
    id: 10,
  },
  {
    name: "Silver Cloud - Epipremnum pictum",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/scindapsus2.png?v=1641567449&width=1100",
    price: 1497,
    id: 11,
  },
  {
    name: "Kentia Palm- Large - 160cm",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/4HOFOTU25.png?v=1591531476&width=1100",
    price: 2590,
    id: 12,
  },
  {
    name: "Large Pachira Aquatica",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/4PAAQGS31.png?v=1591531745&width=1100",
    price: 2878,
    id: 13,
  },
  {
    name: "Large Monstera deliciosa- Swiss Cheese Plant- 90cm",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/monstera80cm.png?v=1641315327&width=1100",
    price: 1978,
    id: 14,
  },
  {
    name: "Calathea Medallion - 30cm",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/calathea_15c9761d-237c-4b4d-afcb-3effff40f914.png?v=1641323633&width=1100",
    price: 2300,
    id: 15,
  },
  {
    name: "Crassula Ovata Major - Plant Store",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/Crassula_Ovata_Major.jpg?v=1526704104&width=1100",
    price: 3594,
    id: 16,
  },
  {
    name: "Aglaonema",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/aglaonema1.png?v=1641321623&width=1100",
    price: 2136,
    id: 17,
  },
  {
    name: "Kentia Palm- Medium - 130cm",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/KentiaPalm140cm.png?v=1601977758&width=1100",
    price: 2702,
    id: 18,
  },
  {
    name: "Create Your Own Succulent Terrarium Kit (Small)",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/DIYTerrariumKitPic1_99bb430e-f1fb-42a5-9cc1-ae9a60c1a097.png?v=1604414439&width=1100",
    price: 3139,
    id: 19,
  },
  {
    name: "Ficus lyrata - Fiddle Leaf Fig- 110cm",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/ficussy.png?v=1641316360&width=1100",
    price: 2977,
    id: 20,
  },
  {
    name: "Areca Palm - Large - 160cm",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/ARECAPALM.png?v=1640008013&width=1100",
    price: 3201,
    id: 21,
  },
  {
    name: "Small Asparagus Fern - 20cm",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/asparagus.png?v=1641578326&width=1100",
    price: 3410,
    id: 22,
  },
  {
    name: "Large Snake Plant - 70cm",
    img_url:
      "https://www.plantstore.ie/cdn/shop/products/snakeplant.png?v=1658233661&width=1100",
    price: 2001,
    id: 23,
  },
];
let cartCount = 0;
let totalSum = 0;

function add2Cart(price) {
  console.log(price);
  cartCount++;
  totalSum = totalSum + price;
  document.getElementById("cart-total").innerText = cartCount;
  document.getElementById("cart-count").innerText = cartCount;
  document.getElementById("sum-total").innerText = totalSum;
}

function showProducts() {
  for (let product of products) {
    console.log(product);
    const productCard = document.createElement("div");
    productCard.innerHTML = `
    <div class="card bg-base-100 shadow-sm product-card">
          <figure class="px-10 pt-10">
            <img
              src="${product.img_url}"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">${product.name}</h2>
            <div class="flex justify-center gap-3">
              <p class="text-lg opacity-30 line-through">$200</p>
              <p class="text-xl">$ ${product.price}</p>
            </div>
            <div class="card-actions">
              <button onclick="add2Cart( ${product.price})" class="btn btn-success text-white">Add to Cart</button>
            </div>
          </div>
        </div>
    `;
    document.getElementById("product-container").append(productCard);
  }
  document.getElementById("cart-total").innerText = cartCount;
  document.getElementById("cart-count").innerText = cartCount;
  document.getElementById("sum-total").innerText = totalSum;
}
showProducts();
