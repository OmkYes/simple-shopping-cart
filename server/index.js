const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const products = [
  {
    id: "1",
    name: "Apple iPhone 15",
    price: 79999,
    imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pink-select-2025?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1739725466"
  },
  {
    id: "2",
    name: "Samsung Galaxy S23",
    price: 69999,
    imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-s911bzgdinu/gallery/in-galaxy-s23-s911-435564-sm-s911bzgdinu-534924828?$720_576_PNG$"
  },
  {
    id: "3",
    name: "Sony Headphones",
    price: 4999,
    imageUrl: "https://cdn.mos.cms.futurecdn.net/G9cSxuAwttvMhMZjqYzq5F-1200-80.jpg"
  },
  {
    id: "4",
    name: "Laptop Dell XPS",
    price: 99999,
    imageUrl: "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/15-9520-laptop/xps-15-9520-laptop-campaign-hero-504x350-ng.psd?fmt=jpg&wid=570&hei=400"
  },
  {
    id: "5",
    name: "Apple Watch",
    price: 34999,
    imageUrl: "https://unsplash.com/photos/white-apple-earpods-on-white-surface-ti3P_Bm2zio"
  },
  {
    id: "6",
    name: "Bluetooth Speaker",
    price: 2999,
    imageUrl: "https://m.media-amazon.com/images/I/71Q6PghS7cL._SL1500_.jpg"
  },
];


app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/checkout", (req, res) => {
  const { products: cartItems, customer } = req.body;
  console.log("Order received:");
  console.log({ customer, cartItems });
  res.json({ message: "Order placed successfully!" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
