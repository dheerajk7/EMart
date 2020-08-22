import React, { Component } from 'react';
import ProductItem from './ProductItem';

class Products extends Component {
  render() {
    let product = [
      {
        id: '123',
        title: 'Mango',
        price: 1222,
        rating: 3,
        image:
          'https://hips.hearstapps.com/del.h-cdn.co/assets/cm/15/10/54f9207ab7c5b_-_kesar_mango.jpg?fill=160:190&resize=480:*',
        detail:
          'This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. ',
      },
      {
        id: '321',
        title: 'Apple',
        price: 2000,
        rating: 4,
        image:
          'https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=6&m=184276818&s=612x612&w=0&h=Fm2-2w98ahP4jUkj3UjgPa-dIqEHlRrsTxdA_a-Cclk=',
        detail:
          'This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. This is product. ',
      },
    ];
    return (
      <div className="products-container">
        <div className="products-heading">
          <div className="heading">Products </div>
          <div className="sort-price">Sort By Price</div>
        </div>
        <ProductItem product={product[0]} />
        <ProductItem product={product[1]} />
      </div>
    );
  }
}

export default Products;
