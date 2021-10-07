const express = require("express");
const app = express();

const products = [
  {
    id: 1,
    name: "Samsung A10",
    category: "Mobile Phones",
    price: 1200,
    currency: "USD",
    image: "",
    stars: 4,
    review: "This is an amazing product!",
  },
  {
    id: 2,
    name: "Think Pad Lenovo",
    category: "Laptops",
    price: 5200,
    currency: "USD",
    image: "",
    stars: 5,
    review: "This is a great laptop!",
  },
];

const customers = [
  { id: 1, name: "Araba", gender: "Female" },
  { id: 2, name: "Ruth", gender: "Female" },
  { id: 3, name: "George", gender: "Male" },
];

app.get("/", function (req, res) {
  res.json({ message: "Hello! You are json" });
  res.send("Hello World!");
});
// Calling products
app.get("/products", function (req, res) {
  res.json(products);
});

// Calling customers
app.get("/customers", function (req, res) {
  res.json(customers);
});

// Calling customers dynamically with url
app.get("/customers/:customerID", function (req, res) {
  console.log(` The customer ID is ${req.params.customerID}.`);
  res.json(customers[req.params.customerID - 1]);
});

// Callback to server
app.listen(5555, () => {
  console.log("Up and running!");
});
