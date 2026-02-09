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
        SKU: "sku-1004",
        name: "Microphone",
        price: 49.99,
        stock: 200

     }
];
inventory.forEach((inventory) =>
    console.log(`${inventory.SKU} | ${inventory.name} | $${inventory.price} | ${inventory.stock}`)
);
inventory.push({
    SKU: "sku-1004",
    name: "Mouse",
    price: 24.99,
    stock: 75
});
console.log("Removed product:", inventory.pop());
inventory[0].price = 79.99;
console.log("Sale Price:", inventory[0].name, inventory[0].price)
inventory[2].stock += 30;
console.log("Added inventory:",inventory[2].name, inventory[2].stock)

let orders = [
    {
        orderId: "ORD-20001",
        items:[
            {sku: "sku-1003", quantity:1},
            {sku: "sku-1001", quantity:1}
        ]
    },
    {
        orderId: "ORD-20002",
        items:[
            {sku: "sku-1002", quantity:2},
            {sku: "sku-1004", quantity:1}
        ]
    }
    
];
console.log(orders)
    let total = 0
    const processOrder= (order)=> {
        for (const item of order.items) {
      const product = inventory.find(p => p.SKU === item.SKU);
        if (!product) {
        return `${order.orderId}: SKU unavailable (${item.SKU})`
    
        }
        if (product.stock < item.quantity) {
            return `${order.orderId}: Out of Stock = (${item.SKU})`
        }
    }
    return `${order.orderId}: Order Completed`;
    };
     orders.forEach(order => {
        console.log(processOrder(order));
     })

    let totalInventoryCost = inventory.reduce((sum,p) => sum + p.price * p.stock, 0);
console.log(`Total Inventory Cost: $${totalInventoryCost.toFixed(2)}`);

let RestockItems = inventory.filter((p) => p.stock <=60);
RestockItems.forEach((p) => console.log(`Low Stock Item: ${p.SKU} | ${p.name} | ${p.stock}`));

let priceList = inventory.map((p) => `${p.SKU}:$${p.price}`);
console.log(`Price List \n${priceList}`);
