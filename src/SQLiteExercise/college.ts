import { college_db } from "../dataBase/collegeDB.js";


// 2 In a new file college.ts, create a table called students with: a unique id filled automatically,
//  name (text), department (text), city (text), marks (whole number), and fees (whole number). Running the file twice must not cause an error.
college_db.exec(`CREATE TABLE IF NOT EXISTS students(
    id INTEGER PRIMARY KEY ,
    name TEXT,
    department TEXT,
    city TEXT,
    marks INTEGER,
    fees INTEGER
    )`)

// 3 Using one prepared command, insert these students and print the id of each: Arun (CSE, Chennai, 85, 50000), 
// Priya (CSE, Madurai, 92, 50000), Karthik (ECE, Chennai, 67, 45000), Divya (ECE, Coimbatore, 74, 45000), 
// Meena (MECH, Chennai, 58, 40000), Rahul (CSE, Coimbatore, 45, 50000), Sneha (MECH, Madurai, 81, 40000).
// const insert = college_db.prepare("INSERT INTO students (name,department,city,marks,fees) VALUES (?,?,?,?,?)")
// insert.run("Arun","CSE", "Chennai", 85, 50000)
// insert.run("Priya","CSE", "Madurai", 92, 50000)
// insert.run("Karthik","ECE", "Chennai", 67, 45000)
// insert.run("Divya","ECE", "Coimbatore", 74, 45000)
// insert.run("Meena","MECH", "Chennai", 58, 40000)
// insert.run("Rahul","CSE", "Coimbatore", 45, 50000)
// insert.run("Sneha","MECH", "Madurai", 81, 40000)
// const getid = college_db.prepare("SELECT id FROM students").all()
// console.log('getid :>> ', getid);


// 4 Insert one more student, Vijay, from Chennai, with fees 40000, but no department and no marks yet.
// const insert = college_db.prepare("INSERT INTO students (name,city,fees) VALUES (?,?,?)").run("Vijay","Chennai",40000)
// console.log('insert :>> ', insert);

// 5 Make sure running the file again doesn't insert anyone twice. sure

// 6 Show all students, highest marks first.
// const showHighest = college_db.prepare("SELECT * FROM students ORDER BY marks DESC").all()
// console.log('showHighest :>> ', showHighest);

// 7 Show only the name and marks of the student with the lowest marks, as a single object.
// const show_stud = college_db.prepare("SELECT name, marks FROM students WHERE marks IS NOT NULL ORDER BY marks LIMIT 1").get()
// console.log('show_stud :>> ', show_stud);

// 8 Show CSE students from Chennai or Coimbatore. (Careful!)
// const show_stud = college_db.prepare("SELECT * FROM students WHERE department = ? AND city = ? OR city = ?").all("CSE","Chennai","Coimbatore")
// console.log('show_stud :>> ', show_stud);

// 9 Show students who scored between 60 and 85, including both 60 and 85.
// const show_stud = college_db.prepare("SELECT * FROM students WHERE department = ? AND (city = ? OR city = ?)").all()
// console.log('show_stud :>> ', show_stud);

// 10 Show students whose name ends with "a".
// const end_with_a = college_db.prepare("SELECT * FROM students WHERE name LIKE ?").all("%a")
// console.log('end_with_a :>> ', end_with_a);

// 11 Show students who don't have a department yet.
// const show_stud =  college_db.prepare("SELECT * FROM students WHERE department IS NULL").all(null)
// console.log('show_stud :>> ', show_stud);

// 12 With 3 students per page, sorted by name, show page 2.
// const show = college_db.prepare("SELECT * FROM students ORDER BY name LIMIT 3 OFFSET 4").all()
// console.log('show :>> ', show);

// 13 Give Vijay the department "ECE" and marks 70, using his id.
// const update_Stud = college_db.prepare("UPDATE students SET department = ?, marks = ? WHERE id = ?").run("ECE",70,8)
// console.log('update_stud :>> ', update_Stud);

// 14 Every MECH student gets a 5000 discount on fees. Print how many rows changed.
// const discount = college_db.prepare("UPDATE students SET fees = fees - ? WHERE department= ?").run(5000,"MECH")
// console.log('discount.changes :>> ', discount.changes);

// 15 Delete every student who scored below 50. Print how many were deleted.
// const deleted = college_db.prepare("DELETE FROM students WHERE marks < 50").run()
// console.log('deleted.changes :>> ', deleted.changes);

// 16 How many students are there in total? The result should be an object like { total: 7 }.
// const tot = college_db.prepare("SELECT COUNT(*) AS total FROM students").all()
// console.log('tot :>> ', tot);

// 17 What is the total fees collected from all students?
// const tot_fee = college_db.prepare("SELECT SUM(fees) AS total_fees FROM students ").all()
// console.log('total_fee :>> ', tot_fee);

// 18 What is the average marks of all students, rounded to 2 decimal places?
// const avg = college_db.prepare("SELECT  AVG(marks) AS AverageMark ,ROUND (AVG(marks)) FROM students").all()
// console.log('avg :>> ', avg);

// 19 Show the highest and lowest marks in one query.
// const max_min = college_db.prepare("SELECT MAX(marks) AS Highest_Mark , MIN(marks) AS Lowest_Marks FROM students").all()
// console.log('max_min :>> ', max_min);

// 20 Show how many students are in each department.
// const groupBy_stud = college_db.prepare("SELECT department ,COUNT(*) AS Department FROM students GROUP BY department").all()
// console.log(' groupBy_stud:>> ',groupBy_stud );

// 21 Show the average marks of each department, highest average first.
// const group = college_db.prepare(`SELECT department, AVG(marks) AS avg_marks FROM students GROUP BY department ORDER BY avg_marks DESC`).all()
// console.log('group :>> ', group);

// 22 Show each city and the total fees collected from that city, but only cities where the total is more than 80000.
// const show_city = college_db.prepare("SELECT city, SUM(fees) FROM students GROUP BY city HAVING SUM(fees) >= 80000").all()
// console.log('show_city :>> ', show_city);

// 23 Show departments where the average marks is above 70, counting only students who scored 60 or more.
// const show_dep = college_db.prepare(`SELECT department, AVG(marks) AS avg_marks FROM students WHERE marks >= ? GROUP BY department HAVING AVG(marks) > ?`).all(60)
// console.log('show_dep :>> ', show_dep);

// 24 What's wrong with this query, and why?
// "SELECT name, department, COUNT(*) FROM students GROUP BY department" // no bug was found 

// 25 
// "SELECT department, COUNT(*) FROM students WHERE COUNT(*) > 2 GROUP BY department"
// "SELECT COUNT(*) AS total FROM students"   // used with .all()
// "SELECT AVG(marks) FROM students GROUP BY department HAVING department = 'CSE' ORDER BY"

// 26 Before doing Task 13, run COUNT(*) and COUNT(marks) together in one query. 
// Why are the numbers different? Then run AVG(marks): is Vijay included in the average or not?
// 13 Give Vijay the department "ECE" and marks 70, using his id.
// const update_Stud = college_db.prepare("UPDATE students SET department= ? and marks = ? WHERE id= ?").run("ECE",70,8)
// console.log('update_stud :>> ', update_Stud);

// 27 Show the department with the highest average marks, only one row, showing the department name and its average.
// const highest_avg = college_db.prepare(`SELECT department, AVG(marks) AS avg_marks FROM students GROUP BY department ORDER BY avg_marks DESC LIMIT 1`).all()
// console.log('highest_avg :>> ', highest_avg);