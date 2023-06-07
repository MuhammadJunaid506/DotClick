import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './ProductList.css'
import {Burger,Pizza,Ice} from '../images/images'




const ProductList = ({
  //  products, 
   onAddToCart }) => {
  const handleToken = (token) => {
    console.log(token);
  };
  const products = [
    {
      name: "Pizza",
      price: 67,
      qty: 10,
      description: "Delicious pizza with a variety of toppings",
      varieties: ["Margherita", "Pepperoni", "Vegetarian", "Supreme"],
      img: Pizza,
    },
    {
      name: "Burger",
      price: 45,
      qty: 5,
      description: "Juicy burger with fresh ingredients",
      varieties: ["Cheeseburger", "Chicken Burger", "Veggie Burger"],
      img: Burger,
    },
    {
      name: "Ice Cream",
      price: 20,
      qty: 15,
      description: "Creamy ice cream in various flavors",
      varieties: ["Vanilla", "Chocolate", "Strawberry", "Mint Chip"],
      img: Ice,
    },
  ];
  
  return (
    <div className='products__list'>
      <h1>Product List</h1>
      <div className="shop__items__cards">
        {products.map((product, index) => (
          <div className="shop__items__cards__item"  key={index}>
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="price">${product.price}</p>
            <p>{product.description}</p>
            <p>{product.varieties[0]}</p>
            <p>{product.varieties[1]}</p>
            <p>{product.varieties[2]}</p>
            {/* {product.name} - ${product.price} */}
            <br/>
            <br/>
            <StripeCheckout
              token={handleToken}
              stripeKey="PUBLISHABLE_API_KEY"
              amount={product.price * 100}
              name={product.name}
              billingAddress
              shippingAddress
            >
              <button onClick={() => onAddToCart(product)}>Add to Cart</button>
              <br/>
              <br/>
            </StripeCheckout>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
