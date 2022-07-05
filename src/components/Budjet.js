import React, { useContext, useState } from "react";
import { AppContenxt } from "../context/AppContext";

const Budjet = () => {
  const { badget } = useContext(AppContenxt);
  const [showEdit, setShowEdit] = useState(false);
  const [newBadgetValue, setNewBadgetValue] = useState("");
  const context = useContext(AppContenxt);

  const showBadget = () => {
    console.log(newBadgetValue);
    setShowEdit(!showEdit);

    if (showEdit === true && newBadgetValue !== "") {
      console.log("its working");
      context.editedBadget(newBadgetValue);
    }
  };

  return (
    <div className="alert alert-secondary">
      {!showEdit && (
        <div>
          {" "}
          <span>Buget ${badget}</span>
          <button className="btn btn-primary" onClick={showBadget}>
            edit
          </button>
        </div>
      )}
      {showEdit && (
        <div>
          {" "}
          <input
            type="number"
            id="number"
            onChange={(val) => setNewBadgetValue(val.target.value)}
          />
          <button className="btn btn-primary" onClick={showBadget}>
            Save
          </button>{" "}
        </div>
      )}
    </div>
  );
};

export default Budjet;
