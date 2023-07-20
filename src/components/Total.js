import React, { useContext } from "react";
import TotalContext from "../store/total-context";

export default function Total() {
  const total = useContext(TotalContext);
  return (
    <div className="customDiv">
      <h3>Total Component</h3>
      <hr />
      <h2>Total:{total} </h2>
    </div>
  );
}
