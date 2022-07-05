import React, { useContext } from "react";
import { AppContenxt } from "../context/AppContext";

const Reamining = () => {
  const context = useContext(AppContenxt);
  let expenses = context.expenses;
  let value = 0;
  for (let index of expenses) {
    value = +index.cost + value;
    console.log(index.cost);
  }
  const remainingValue = context.badget - value;

  const aletType = value > context.badget ? "alert-danger" : "alert-success";
  return (
    <div className={`alert ${aletType}`}>
      <span>Remaining : ${remainingValue}</span>
    </div>
  );
};

export default Reamining;
