import Database from "better-sqlite3";

//create db
export const db = new Database("office.db")
const learning_db = new Database("learning.db")
export default learning_db;



//create table and column
// db.exec(`CREATE TABLE IF NOT EXISTS members (
//         mem_id INTEGER PRIMARY KEY ,
//         name TEXT,
//         last_name TEXT,
//         position TEXT,
//         doj INTEGER
//     )`)
// console.log('table created :>> ');


// // create row 
// const insert = db.prepare("INSERT INTO members (name) VALUES (?)")
// const result = insert.run("pavi")
// console.log('insert :>> ', result);
// // create row 
// const insert2 = db.prepare("INSERT INTO members (name) VALUES (?)")
// const result2= insert2.run("prakash")
// const insert3 = db.prepare("INSERT INTO members (name) VALUES (?)")
// const result3= insert3.run("ravi")
// const insert4 = db.prepare("INSERT INTO members (name) VALUES (?)")
// const result4= insert4.run("meera")
// const insert5 = db.prepare("INSERT INTO members (name) VALUES (?)")
// const result5= insert5.run("mani")


// // read data from table
// const select = db.prepare("SELECT * FROM members")
// const read_data = select.all()
// console.log('read_data :>> ', read_data);


// // read single data from a table
// const selectData = db.prepare("SELECT * FROM members WHERE name= ?")
// const singleData = selectData.get("pavi")
// console.log('singleData :>> ', singleData);


// // update existing data
// const updateExisting =  db.prepare("UPDATE members SET position = ? WHERE name = ?")
// const update = updateExisting.run("Devloper","pavi")
// console.log('update :>> ', update);


// // Delete the row 
// const deleted =  db.prepare("DELETE FROM members where name = ?")
// const deleteData =  deleted.run("pavi")
// console.log('dletedData :>> ', deleteData);


// OrderBy
// const orderby = db.prepare("SELECT * FROM members WHERE position = ? ORDER BY name DESC")
// const getOrderBy = orderby.all()
// console.log('getOrderBy :>> ', getOrderBy);

// //Limit 
// const limitby = db.prepare("SELECT * FROM members ORDER BY name LIMIT 5")
// const getLimitBy = limitby.all()
// console.log('getLimitBy :>> ', getLimitBy);


// //OFFSET 
// const offset = db.prepare("SELECT * FROM members ORDER BY name LIMIT 5 OFFSET 2")
// const getoffset = offset.all()
// console.log('getoffset :>> ', getoffset);


// comparision 
// const comparision = db.prepare("SELECT * FROM members WHERE name== ?")
// const getComparision = comparision.all("pavi")
// console.log('getComparision :>> ', getComparision);


// AND | OR 
// const and = db.prepare("SELECT * FROM members WHERE name != ? AND position != null ")
// const or = db.prepare("SELECT * FROM members WHERE name != ? OR position != null ")
// const getAnd = or.all("prakash")
// console.log('getAnd :>> ', getAnd);


// LIKE
// const like = db.prepare("SELECT * FROM members WHERE name LIKE ?")
// const getconatin = like.all("%sh%") // the name contain sh 
// const getEndwith = like.all("%p") // the name contain sh 
// const getStartsWith = like.all("r%") // the name contain sh 
// console.log('getconatin :>> ', getconatin); 
// console.log('getEndwith :>> ', getEndwith); 
// console.log('getStartsWith :>> ', getStartsWith); 

// //COUNT 
// const getCount = db.prepare("SELECT COUNT(*) FROM members WHERE name=?").get("mani")
// console.log('getCount :>> ', getCount);

// AS
// const as_name = db.prepare("SELECT COUNT(*) AS first_name FROM members WHERE name=?").get("pavi")
// console.log('as_name :>> ', as_name);

//SUM,MAX,MIN,AVG
// "SELECT SUM(stock) AS total_stock FROM products"   // adds up all stock
// "SELECT AVG(price) AS avg_price FROM products"     // average price
// "SELECT MIN(price) AS cheapest FROM products"      // lowest price
// "SELECT MAX(price) AS costliest FROM products"     // highest price

// GROUP BY
//const perCategory = shop_db.prepare(`SELECT category, COUNT(*) AS total FROM products GROUP BY category`).all();
// console.log(perCategory);

// HAVING 
// `SELECT category, COUNT(*) AS total FROM productsGROUP BY category HAVING COUNT(*) > 1`

// FULL ORDER
// SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY ... LIMIT ... OFFSET ...
// `SELECT category, SUM(stock) AS total_stock FROM products WHERE price > ? GROUP BY category HAVING SUM(stock) > ? ORDER BY total_stock DESC`
