import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE":
      const filtered = state.expenses.filter((el) => {
        return el.name !== action.payload;
      });
      return {
        ...state,
        expenses: [...filtered],
      };
    case "EDIT_BADGET":
      return {
        ...state,
        badget: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  badget: 2000,
  expenses: [],
};

export const AppContenxt = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addExpense = (data) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: data,
    });
  };

  const deletItem = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const editedBadget = (value) => {
    dispatch({
      type: "EDIT_BADGET",
      payload: value,
    });
  };
  return (
    <AppContenxt.Provider
      value={{
        badget: state.badget,
        expenses: state.expenses,
        addExpense: addExpense,
        deletItem: deletItem,
        editedBadget: editedBadget,
      }}
    >
      {props.children}
    </AppContenxt.Provider>
  );
};
