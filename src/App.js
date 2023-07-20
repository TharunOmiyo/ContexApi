import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Total from "./components/Total";
import TotalContext from "./store/total-context";

function App() {
  const products = [
    { pName: "Apple", price: 20 },
    { pName: "Banana", price: 3 },
    { pName: "Orange", price: 10 },
    { pName: "Grapes", price: 8 },
  ];
  const [cart, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  let handleProdChange = (e) => {
    let pName = e.target.options[e.target.selectedIndex].text;
    let price = e.target.value;
    let tCart = [...cart];
    let obj = { pName, price };
    let tPrice = parseInt(price);
    tPrice = total + tPrice;
    tCart.push(obj);

    setProducts(tCart);
    setTotal(tPrice);
  };
  return (
    <div className="App">
      <div className="customDiv">
        <h2>Product Component</h2>
        <hr></hr>
        <select onChange={handleProdChange}>
          <option>Select</option>
          {products.map((item, index) => {
            return (
              <option
                value={item.price}
                key={index}
              >{`${item.pName}-$${item.price}`}</option>
            );
          })}
        </select>
      </div>
      <Cart cart={cart} />
      <TotalContext.Provider value={total}>
        <Total />
      </TotalContext.Provider>
    </div>
  );
}

export default App;
