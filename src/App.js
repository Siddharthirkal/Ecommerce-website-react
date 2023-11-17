import React from 'react';

const App = () => {
  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];

  // Function to create product cards
  const createProductCard = (product) => (
    <div key={product.title} className="product-card">
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <img src={product.imageUrl} alt={product.title} />
    </div>
  );

  return (
    <div className="app">
      <h1>Product Showcase</h1>
      <div className="products-container">
        {productsArr.map(createProductCard)}
      </div>
    </div>
  );
};

export default App;
