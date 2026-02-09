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
    console.log(`${inventory.SKU} | ${inventory.nameame} | $${inventory.price} | ${inventory.stock}`)
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
        const product= inventory.find(p => item.SKU);
        if (!product) {
        return `${order.order.Id}: SKU unavailable (${item.SKU})`
    
        }
        if (product.stock < item.qty) {
            return `${order.orderId}: Out of Stock = (${item.SKU})`
        }
    }
    return `${order.orderId}: Order restocked`;
    };
     orders.forEach(order => {
        console.log(processOrder(order));
     })

     const totalInventory = inventory.reduce((total, item) =>  {
    return total + (item.price * item.stock)
}, 0 );
// .Filter
const lowStockItems = inventory.filter(item => item.stock <=5);
console.log("Low Stock items that need restocking:" , lowStockItems) // console filter
// .Map
const currentPriceItems = inventory.map(item => `${item.SKU} - ${item.price}`)

console.log("Current Price of Items:", currentPriceItems)
console.log("Total inventory:", totalInventory)