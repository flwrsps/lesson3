import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Order from "./components/Order";
import Admin from "./components/Admin";
import { useState } from "react";
import EditProduct from "./components/EditProduct";

function App() {
  const [orders, setOrders] = useState([]);
  const [data, setData] = useState([]);
  const [editInput, setEditInput] = useState({});
  // const [order, setOrder] = useState([]);

  function appProduct(newProduct) {
    let data = JSON.parse(localStorage.getItem("product")) || [];
    data.push(newProduct);
    localStorage.setItem("product", JSON.stringify(data));
  }

  function readProduct() {
    let data = JSON.parse(localStorage.getItem("product")) || [];
    setData(data);
  }
  function readOrderProduct() {
    let orders = JSON.parse(localStorage.getItem("product_order")) || [];
    setOrders(orders);
  }

  function deleteProduct(id) {
    let data = JSON.parse(localStorage.getItem("product")) || [];
    let deleteItem = data.filter((el) => el.id !== id);
    localStorage.setItem("product", JSON.stringify(deleteItem));
    readProduct();
  }

  function orderProduct(id) {
    let order = JSON.parse(localStorage.getItem("product_order")) || [];
    setOrders(orders);
    let data = JSON.parse(localStorage.getItem("product")) || [];

    if (orders.some((item) => item.id === id)) {
      alert("error!!!");
    } else {
      let finded = data.find((el) => el.id === id);
      orders.push(finded);
      localStorage.setItem("product_order", JSON.stringify(finded));
    }
    readProduct();
  }

  function editProduct(index) {
    setEditInput(data[index]);
  }

  function saveProduct(newProduct) {
    let data = JSON.parse(localStorage.getItem("product")) || [];
    let newData = data.map((el) => {
      if (newProduct.id === el.id) {
        return newProduct;
      }
      return el;
    });
    localStorage.setItem("product", JSON.stringify(newData));
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/menu"
          element={
            <Menu
              data={data}
              readProduct={readProduct}
              deleteProduct={deleteProduct}
              orderProduct={orderProduct}
              editProduct={editProduct}
            />
          }
        />
        <Route
          path="/orders"
          element={<Order readOrderProduct={readOrderProduct} order={orders} />}
        />
        <Route path="/admin" element={<Admin appProduct={appProduct} />} />
        <Route
          path="/edit/:id"
          element={
            <EditProduct editInput={editInput} saveProduct={saveProduct} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
