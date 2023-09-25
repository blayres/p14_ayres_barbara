import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "../src/pages/EmployeeList/EmployeeList";

const root = ReactDOM.createRoot(document.getElementById("root"));

const RootApp = () => {
  const [newEmployee, setNewEmployee] = useState(null);

  const handleNewEmployee = (employeeData) => {
    setNewEmployee(employeeData);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App onEmployeeCreate={handleNewEmployee} />}
        />
        <Route
          path="employeeList"
          element={<EmployeeList newEmployee={newEmployee} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

root.render(<RootApp />);