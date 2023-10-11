# COMP - 229 | Assignment - 2

You will need to have a local MongoDB up and then you can run both these commands on the root folder of this project.




# To Setup MongoDB
- Install MongoDB and its CLI tools. (Add to PATH if it hasn't done it already)
- Open a cmd window
- Start the MongoDB using ```mongod``` command.  (Check the port number here or in the ```MongoDB Compass```)
- Switch to ```marketplace``` database by using the command ```use marketplace```.
- Create ```product``` and ```categories``` collection by using the example commands below respectively.
  - ```db.product.insert({"name":"Water Sipper Blue 1L","description":"A 1000ml water bottle in blue color.","price":5.99,"quantity":25,"category":"Water Bottles"});```
  - ```db.categories.insert({"name": "Men"});```




# To start the server
- Install all the node modules using ```npm i```.
- Check the port number and replace it in [app.js](/app.js) under the function main if the port number doesn't match.
- Run the project using ```npx nodemon```.



# Test JSON and JSON Array for insert operations in Product Document

JSON
```
{
  "name": "Water Sipper Blue 750ml",
  "description": "A 750ml water bottle in blue color.",
  "price": 4.99,
  "quantity": 25,
  "category": "Water Bottles"
}
```

JSON Array
```
[
  {
    "name": "Water Sipper Blue 2L",
    "description": "A 2L water bottle in blue colour.",
    "price": 8.99,
    "quantity": 15,
    "category": "Water Bottles"
  },
  {
    "name": "Colgate Plax 2L Peppermint",
    "description": "Peppermint flavour mouthwash (2L).",
    "price": 15.99,
    "quantity": 20,
    "category": "Oral Hygiene"
  },
  {
    "name": "Colgate Mint Gel Toothpaste 100g x2",
    "description": "Mint flavour gel toothpaste (100g - Pack of 2)",
    "price": 10.99,
    "quantity": 25,
    "category": "Oral Hygiene"
  }
]
```
