let inventory = [
    {
        SKU: "sku-1001",
    name: "White Headphones",
    price: 99.99,
    stock: 50,
     },
     {
        SKU: "sku-1002",
        name: "Earbuds",
        price: 19.99,
        stock: 20
     },
     {
        SKU: "sku-1003",
        name: "Laptop",
        price: 199.99,
        stock: 10
     },
     {
        SKU: "sku-1003",
        name: "Microphone",
        price: 49.99,
        stock: 200

     }
];
inventory.forEach((inventory) =>
    console.log(`${inventory.SKU} | ${inventory.nameame} | $${inventory.price} | ${inventory.stock}`)
);
inventory.push({
    SKU: "sku-1004",
    name: "Mouse",
    price: 24.99,
    stock: 75
});
