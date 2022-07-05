import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContenxt } from "../context/AppContext";

const ExpenseItem = (props) => {
  const context = useContext(AppContenxt);

  const deleteItem = () => {
    context.deletItem(props.name);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="  badge-primary  badge-pill  mr-3">${props.cost}</span>
      </div>
      <TiDelete size="1.5em" onClick={deleteItem}></TiDelete>
    </li>
  );
};

export default ExpenseItem;
