import { shop_db } from "../dataBase/shopDB.js";


// In a new file shop.ts, import the database and create a table called products with these columns: a unique id that's 
// filled automatically, name as text, category as text, price as a whole number, and stock as a whole number.
shop_db.exec(`CREATE TABLE IF NOT EXISTS products(
            product_id INTEGER PRIMARY KEY,
            name TEXT,
            category TEXT,
            price INTEGER,
            stock INTEGER
            )
        `)

// Using one prepared command, insert these 6 products, and print the id of each: 
// Pen (stationery, 10, stock 100), Notebook (stationery, 50, stock 40), Mouse (electronics, 500, stock 15), 
// Keyboard (electronics, 900, stock 0), Bottle (kitchen, 200, stock 25), Pencil Box (stationery, 120, stock 0).
// const insert = shop_db.prepare("INSERT INTO products (name,category,price,stock) VALUES (?,?,?,?)")
// insert.run("Pen","stationery", 10,100)
// insert.run("Notebook","stationery", 50,49)
// insert.run("Mouse","electronics", 500,15)
// insert.run("Keyboard","electronics", 900,0)
// insert.run("Bottle","kitchen", 200,25)
// insert.run("Pencil Box","stationery", 120,0)
// const getId = shop_db.prepare("SELECT product_id FROM products")
// // const getDelete = shop_db.prepare("DELETE FROM products WHERE product_id > ?").run(6);
// console.log('getId.all() :>> ', getId.all());


// Show all products, cheapest first.
// const showCheapest = shop_db.prepare("SELECT * FROM products  ORDER BY price")
// console.log('showCheapest.all() :>> ', showCheapest.all());

// Show only the name and price of the most expensive product, as a single object (not an array).
// const showProduct = shop_db.prepare("SELECT name, price FROM products ORDER BY price DESC LIMIT 1 ")
// console.log('showProduct.all() :>> ', showProduct.all());

// Show all products that are out of stock.
// const outOfStock = shop_db.prepare("SELECT * FROM products WHERE stock == ?")
// console.log('outOfStock.all(0) :>> ', outOfStock.all(0));

// Show stationery products that cost less than 100.
// const costLessThan100 = shop_db.prepare("SELECT * FROM products WHERE category == ? AND price <=100 ")
// console.log('costLessThan100(""stationery") :>> ', costLessThan100.all("stationery"));

// Show products that are either electronics or cost more than 150.
// const showProduct = shop_db.prepare("SELECT * FROM products WHERE category == ? OR price >=150")
// console.log('showProduct.all("electronics") :>> ', showProduct.get("electronics"));

// Show all products whose name contains "pen", no matter the case.
// const namePen = shop_db.prepare("SELECT * FROM products WHERE name LIKE ?")
// console.log('namePen.all("%pen%") :>> ', namePen.all("%pen%"));

// Your shop shows 2 products per page, sorted by name. Show page 3
// const sortpage = shop_db.prepare("SELECT * FROM products ORDER BY name LIMIT 2 OFFSET 4")
// console.log('sortpage.all() :>> ', sortpage.all());

// The Mouse price goes up to 550. Update it using its id, and print how many rows changed.
// const updatePrice = shop_db.prepare("UPDATE products SET price = ? WHERE product_id =? ")
// const update= updatePrice.run(550,3)
// console.log('update :>> ', update.changes);

// Every stationery product gets 20 more stock. 
// Hint: you can do math inside SET, like SET stock = stock + ?. Print how many rows changed.
// const updateStock = shop_db.prepare("UPDATE products SET stock = stock + ? WHERE category == ?  ")
// console.log('updateStock.run("stationery",20) :>> ', updateStock.run(20,"stationery").changes);

// Delete every product that is out of stock, and print how many were deleted. Then show all products to confirm.
// const deletePrd = shop_db.prepare("DELETE FROM products WHERE stock == 0")
// // console.log('deletePrd.run() :>> ', deletePrd.run(0)); 
// console.log('deletePrd.all() :>> ', deletePrd.run());

// const q = shop_db.prepare("SELECT * FROM products WHERE category = ?");
// console.log(q.get("stationery"));
// console.log(q.get("toys")); // undefined


// db.prepare("SELECT * FROM products WHERE name = Pen").all(); //WHERE syntax error
// db.prepare("INSERT INTO products (name, price) VALUES (?, ?, ?)").run("Cup", 80); //values are 3 
// db.prepare("SELECT * FROM products ORDER BY price WHERE price > 100").all(); //orderby at the end
// db.prepare("UPDATE products SET price = ?").run(99);//WHERE is missing

// Insert a product with only a name, nothing else. 
// Then show only products with no category. Try category = NULL first and see what happens.
// const insert = shop_db.prepare("INSERT INTO products (name) VALUES (?)").run("dress")
// console.log('insert :>> ', insert);
// const showprd = shop_db.prepare("UPDATE products SET category = ? WHERE  name = ?")
// console.log(' :>> ',showprd.run("NULL","dress") );5000
// const showw = shop_db.prepare("SELECT * FROM products WHERE category == ?").all("NULL")
// console.log('showw :>> ', showw);

// Show products that are stationery or electronics, but only if the price is above 100. 
// Check the result carefully: does it really match the sentence?
// const getFinal = shop_db.prepare("SELECT * FROM products WHERE category == ? AND category == ? AND price >= 100").all("stationery","electronics")
// console.log('getFinal :>> ', getFinal);
