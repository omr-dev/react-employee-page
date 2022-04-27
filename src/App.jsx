import "./App.scss";
import employees from "./data/employees.json";

function App() {
  return (
    <div className="App">
      <h1>Employees</h1>
      {employees.map((employee)=>{
       return <li>{employee.firstName+" "+employee.lastName}</li>;
      })}
    </div>
  );
}

export default App;
