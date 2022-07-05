import React, { useContext, useState } from "react";
import { AppContenxt } from "../context/AppContext";

const AddExpenseForm = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const context = useContext(AppContenxt);
  console.log(context);

  const constInputHandler = (value) => {
    setCost(value);
    console.log(value);
  };
  const nameInputHandler = (value) => {
    setName(value);
  };

  const formHanlder = (event) => {
    event.preventDefault();

    const expense = {
      id: new Date(),
      name: name,
      cost: parseInt(cost),
    };

    context.addExpense(expense);
  };

  return (
    <form onSubmit={formHanlder}>
      <div className="row">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => {
              nameInputHandler(e.target.value);
            }}
          ></input>
        </div>
        <div className="col-sm">
          <label for="cost"> cost</label>
          <input
            required="requied"
            type="text"
            className="form-control"
            id="cost"
            onChange={(e) => {
              constInputHandler(e.target.value);
            }}
          ></input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
