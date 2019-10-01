DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;


CREATE TABLE products (
  item_id  INT NOT NULL,
  product_name  NULL,
  price VARCHAR(100)  NULL,
  stock_quantity  VARCHAR(100)  NULL,
);

SELECT * FROM products;