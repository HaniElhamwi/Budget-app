import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Budjet from "./components/Budjet";
import Reamining from "./components/Reamining";
import ExpernseTotal from "./components/ExpernseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">My Budjet planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budjet />
          </div>
          <div className="col-sm">
            <Reamining />
          </div>
          <div className="col-sm">
            <ExpernseTotal />
          </div>
        </div>
        <h3 className="mt-3"> Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
