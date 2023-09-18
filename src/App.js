import React, { useState } from "react";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employeeData) => {
    setEmployees([...employees, employeeData]);
    console.log("Employee added:", employeeData);
  };

  return (
    <div className="App">
      <CreateEmployee onEmployeeCreate={addEmployee} />
    </div>
  );
}

export default App;
