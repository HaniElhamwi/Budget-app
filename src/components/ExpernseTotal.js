import React, { useContext } from "react";
import { AppContenxt } from "../context/AppContext";

const ExpernseTotal = () => {
  const context = useContext(AppContenxt);

  let value = 0;
  for (let index of context.expenses) {
    value = index.cost + value;
    console.log(index.cost);
  }
  return (
    <div className="alert alert-primary">
      <span>Spent so far : ${value}</span>
    </div>
  );
};

export default ExpernseTotal;
