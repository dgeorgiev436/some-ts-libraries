import { Product } from "./product.model";
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import {validate} from "class-validator"

const products = [
  { title: "A carpet", price: 29.99 },
  { title: "A book", price: 12.99 },
];

const newProduct = new Product("A car", -11);
validate(newProduct).then(errors => {
    if(errors.length > 0){
        console.log("Validation Errors!");
        console.log(errors);
    }else{
        console.log(newProduct.getInformation());
    }
});


// const p1 = new Product("A Book", 12.99);

// const loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price);
// })

const loadedProducts = plainToClass(Product, products)


for(const product of loadedProducts){
    console.log(product.getInformation());
}

