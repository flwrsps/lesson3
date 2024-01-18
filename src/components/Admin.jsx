import React, { useEffect, useState } from "react";

const Admin = ({ appProduct }) => {

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function chackProduct() {
    let newProduct = {
      image: image,
      name: name,
      price: price,
      id: Date.now(),
    };
    if (!image || !name || !price) {
      alert("lfbjndska");
      return;
    }
    appProduct(newProduct);
  }

//   useEffect(() => {
//     appProduct();
//   }, []);

  return (
    <div id="admin">
      <div className="container">
        <h1>CREATE PRODUCT</h1>
        <div className="admin">
          <input
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="imageURL"
          />
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="name food"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="price"
          />
          <button onClick={() => chackProduct()}>create</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
