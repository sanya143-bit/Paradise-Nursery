import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: "$15", price: 15 },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/08/11/plant-3530465_1280.jpg", cost: "$12", price: 12 },
        { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2018/02/03/17/10/flower-3128424_1280.jpg", cost: "$18", price: 18 },
        { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/03/04/17/28/fern-4902146_1280.jpg", cost: "$14", price: 14 },
        { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/06/09/01/40/plant-5276326_1280.jpg", cost: "$20", price: 20 },
        { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg", cost: "$10", price: 10 }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://cdn.pixabay.com/photo/2017/04/26/13/18/lavender-2262335_1280.jpg", cost: "$22", price: 22 },
        { name: "Jasmine", image: "https://cdn.pixabay.com/photo/2016/03/30/23/07/jasmine-1292190_1280.jpg", cost: "$25", price: 25 },
        { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/05/11/17/rosemary-4527715_1280.jpg", cost: "$15", price: 15 },
        { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/09/10/17/47/mint-1659779_1280.jpg", cost: "$8", price: 8 },
        { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2018/08/04/20/00/lemon-balm-3584177_1280.jpg", cost: "$11", price: 11 },
        { name: "Geraniums", image: "https://cdn.pixabay.com/photo/2017/05/12/17/40/geranium-2307521_1280.jpg", cost: "$16", price: 16 }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        { name: "ZZ Plant", image: "https://cdn.pixabay.com/photo/2021/04/07/11/40/zz-plant-6158783_1280.jpg", cost: "$25", price: 25 },
        { name: "Pothos", image: "https://cdn.pixabay.com/photo/2018/11/15/19/27/green-3818314_1280.jpg", cost: "$10", price: 10 },
        { name: "Cactus", image: "https://cdn.pixabay.com/photo/2016/04/01/10/16/cactus-1300055_1280.jpg", cost: "$9", price: 9 },
        { name: "Jade Plant", image: "https://cdn.pixabay.com/photo/2020/03/17/14/05/jade-plant-4940505_1280.jpg", cost: "$14", price: 14 },
        { name: "Cast Iron Plant", image: "https://cdn.pixabay.com/photo/2017/02/16/15/45/green-2071736_1280.jpg", cost: "$19", price: 19 },
        { name: "Succulent Mix", image: "https://cdn.pixabay.com/photo/2016/11/29/13/39/cactus-1869376_1280.jpg", cost: "$12", price: 12 }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="product-list-container">
      <div className="navbar">
        <div className="tag">
          <a href="#home">Paradise Nursery</a>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#plants">Plants</a>
          <a href="#cart" className="cart-icon">🛒 <span className="cart-count">{totalCartCount}</span></a>
        </div>
      </div>

      <div className="product-grid" id="plants">
        {plantsArray.map((category, index) => (
          <div key={index} className="category-section">
            <h2>{category.category}</h2>
            <div className="plant-cards">
              {category.plants.map((plant, plantIndex) => (
                <div key={plantIndex} className="plant-card">
                  <img src={plant.image} alt={plant.name} className="plant-image" />
                  <h3>{plant.name}</h3>
                  <p>{plant.cost}</p>
                  <button
                    className={`add-to-cart-btn ${addedToCart[plant.name] ? 'added' : ''}`}
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.name]}
                  >
                    {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
