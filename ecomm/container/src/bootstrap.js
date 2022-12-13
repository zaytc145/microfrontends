import {mount as mountProduct} from "products/ProductsIndex";
import {mount as mountCart} from "cart/CartIndex";

console.log("Container!");

mountProduct(document.getElementById("my-products"));
mountCart(document.getElementById("my-cart"));
