import React, { useContext, useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContenxt } from "../context/AppContext";
import "./main.css";

const ExpenseList = () => {
  const { expenses } = useContext(AppContenxt);
  const [onSearch, setOnSearch] = useState([]);

  useEffect(() => {
    setOnSearch(expenses);
  }, [expenses]);

  const searchHandler = (value) => {
    const filter = expenses.filter((item) => {
      return item.name.includes(value);
    });
    setOnSearch(filter);
  };

  // const searchedValue

  return (
    <div>
      <input
        type="search"
        placeholder="type to search..."
        className="searchInput"
        onChange={(value) => searchHandler(value.target.value)}
      />
      <ul className="list-group">
        {onSearch.map((expense) => (
          <ExpenseItem
            id={expense.id}
            cost={expense.cost}
            name={expense.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
