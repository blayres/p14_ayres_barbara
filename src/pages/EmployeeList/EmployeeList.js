import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./EmployeeList.css";
import { getEmployees } from "../service/ServiceEmployee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

function EmployeeList({ newEmployee }) {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState(null);
  const [orderDirection, setOrderDirection] = useState("asc");
  const [totalEmployees, setTotalEmployees] = useState(0);

  useEffect(() => {
    const employeeList = getEmployees();
    if (newEmployee) {
      employeeList.push(newEmployee);
    }
    setEmployees(employeeList);
    setTotalEmployees(employeeList.length);
  }, [newEmployee]);
  console.log(newEmployee);

  const columns = [
    { key: "firstName", name: "First Name" },
    { key: "lastName", name: "Last Name" },
    { key: "dateOfBirth", name: "Date of Birth" },
    { key: "startDate", name: "Start Date" },
    { key: "department", name: "Department" },
    { key: "street", name: "Street" },
    { key: "city", name: "City" },
    { key: "state", name: "State" },
    { key: "zipCode", name: "Zip Code" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSort = (key) => {
    if (orderBy === key) {
      setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
    } else {
      setOrderBy(key);
      setOrderDirection("asc");
    }
  };

  function formatDate(dateString) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const sortedEmployees = filteredEmployees.sort((a, b) => {
    if (orderBy) {
      const aValue = a[orderBy];
      const bValue = b[orderBy];
      if (orderDirection === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
      }
    } else {
      return 0;
    }
  });

  const displayedEmployees = sortedEmployees.slice(startIndex, endIndex);

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <div className="firstLine">
        <div>
          Show{" "}
          <select
            aria-label="Show how many lines appear per page"
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>{" "}
          entries
        </div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} onClick={() => handleSort(column.key)}>
                {column.name}{" "}
                {orderBy === column.key && (
                  <span>
                    {orderDirection === "asc" ? (
                      <FontAwesomeIcon icon={faSortUp} />
                    ) : (
                      <FontAwesomeIcon icon={faSortDown} />
                    )}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedEmployees.map((employee, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>
                  {column.key === "department"
                    ? employee.department || ""
                    : column.key === "dateOfBirth" || column.key === "startDate"
                    ? formatDate(employee[column.key])
                    : column.key === "street"
                    ? employee.address.street
                    : column.key === "city"
                    ? employee.address.city
                    : column.key === "state"
                    ? (employee.address.state &&
                        employee.address.state[0]?.label) ||
                      ""
                    : column.key === "zipCode"
                    ? employee.address.zipCode
                    : employee[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="showing-entries-and-pagination">
        <div className="showing-entries">
          Showing {startIndex + 1} to {Math.min(endIndex, totalEmployees)} of{" "}
          {totalEmployees} entries
        </div>
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>{currentPage}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={endIndex >= sortedEmployees.length}
          >
            Next
          </button>
        </div>
      </div>
      <div className="home">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default EmployeeList;
