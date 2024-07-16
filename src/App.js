import Employees from "./components/Employees";
import "./App.css";

function App() {
  const showEmployees = false;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <Employees />
          <Employees />
          <Employees />
          <Employees />
        </>
      ) : (
        <p>You can not see the employees</p>
      )}
    </div>
  );
}

export default App;
