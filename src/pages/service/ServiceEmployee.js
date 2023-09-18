const getEmployees = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  return employees;
};

const addEmployee = (employeeData) => {
  const employees = getEmployees();
  employees.push(employeeData);
  localStorage.setItem("employees", JSON.stringify(employees));
};

export { getEmployees, addEmployee };
