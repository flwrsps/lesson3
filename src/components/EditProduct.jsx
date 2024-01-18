import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditProduct = ({ editInput, saveProduct }) => {
  const [product, setProduct] = useState(editInput);
  function inputChange(e) {
    let newObj = { ...product };
    setProduct(newObj);
    newObj.image = e.target.value;
  }
  function inputChangeName(e) {
    let newObj = { ...product };
    newObj.name = e.target.value;
    setProduct(newObj);
  }
  function inputChangePrice(e) {
    let newObj = { ...product };
    newObj.price = e.target.value;
    setProduct(newObj);
  }
  function saveChange() {
    saveProduct(product);
  }
  return (
    <div>
      <div id="edit">
        <div className="container">
          <h1>CREATE PRODUCT</h1>
          <div className="edit">
            <input
              onChange={inputChange}
              value={product.image}
              type="text"
              placeholder="imageURL"
            />
            <input
              onChange={inputChangeName}
              value={product.name}
              type="text"
              placeholder="name food"
            />
            <input
              onChange={inputChangePrice}
              value={product.price}
              type="text"
              placeholder="price"
            />
            <Link to="/menu">
              <button onClick={saveChange}>save</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
