var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazonDB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readProducts()

});

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    askcustomer();

  });
}

function askcustomer() {

  inquirer
    .prompt([
      {
        type: "input",
        name: "userID",
        message: "What product ID would you like to buy?"
      },
      {
        type: "input",
        name: "userQTY",
        message: "How many would you like to buy?"
      }
    ])
    .then(answers => {
      console.log(answers)
      updateProduct(answers.userID, answers.userQTY)
      // Use user feedback for... whatever!!
    });
}

function updateProduct(product_id, userPurch) {
  console.log("Updating quantity...\n");
  var checkStockQuery = connection.query(

    "SELECT stock_quantity FROM bamazonDB.products WHERE item_id = ?",
    [product_id],
    function (err, res) {
      if (res[0].stock_quantity - userPurch <= 0){
        console.log('too bad not enough!')
        readProducts()

      } else {

        var updateStockQuery = connection.query(
          "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
          [parseInt(userPurch), product_id],
          function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " products updated!\n");
            // Call deleteProduct AFTER the UPDATE completes
            readProducts()
            // connection.end();
          }
        )
        
      }
    })
    // console.log('checkStockQuery', checkStockQuery)
}