DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;


CREATE TABLE products (
  item_id  INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50),
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT,
  department VARCHAR(100),
  PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, price, stock_quantity, department)
VALUES 
("my_heart", 0.00 , 1, "chest"),
("leg", 20.00 , 2, "lower_half"),
("arm", 300.00 , 2, "upper_half"),
("brain", 1000.00 , 1, "head"),
("hair", 65.00 , 1, "head"),
("eyes", 30000.00 , 2, "head"),
("mouth", 1.00 , 1, "head"),
("torso", 5.00 , 1, "upper_half"),
("nose", 3.00 , 1, "head"),
("back", 3.00, 1, "upper_half");



SELECT * FROM products;