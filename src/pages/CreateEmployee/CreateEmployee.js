import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-dropdown-select";
import Modal from "react-modal-babi";
import "../CreateEmployee/CreateEmployee.css";
import { addEmployee } from "../service/ServiceEmployee";

function CreateEmployee({ onEmployeeCreate }) {
  const [employeeData, setEmployeeData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: new Date(),
    startDate: new Date(),
    department: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const optionsDepartment = [
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
    { value: "engineering", label: "Engineering" },
    { value: "humanResources", label: "Human Resources" },
    { value: "legal", label: "Legal" },
  ];

  const states = [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
    },
    {
      name: "American Samoa",
      abbreviation: "AS",
    },
    {
      name: "Arizona",
      abbreviation: "AZ",
    },
    {
      name: "Arkansas",
      abbreviation: "AR",
    },
    {
      name: "California",
      abbreviation: "CA",
    },
    {
      name: "Colorado",
      abbreviation: "CO",
    },
    {
      name: "Connecticut",
      abbreviation: "CT",
    },
    {
      name: "Delaware",
      abbreviation: "DE",
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM",
    },
    {
      name: "Florida",
      abbreviation: "FL",
    },
    {
      name: "Georgia",
      abbreviation: "GA",
    },
    {
      name: "Guam",
      abbreviation: "GU",
    },
    {
      name: "Hawaii",
      abbreviation: "HI",
    },
    {
      name: "Idaho",
      abbreviation: "ID",
    },
    {
      name: "Illinois",
      abbreviation: "IL",
    },
    {
      name: "Indiana",
      abbreviation: "IN",
    },
    {
      name: "Iowa",
      abbreviation: "IA",
    },
    {
      name: "Kansas",
      abbreviation: "KS",
    },
    {
      name: "Kentucky",
      abbreviation: "KY",
    },
    {
      name: "Louisiana",
      abbreviation: "LA",
    },
    {
      name: "Maine",
      abbreviation: "ME",
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH",
    },
    {
      name: "Maryland",
      abbreviation: "MD",
    },
    {
      name: "Massachusetts",
      abbreviation: "MA",
    },
    {
      name: "Michigan",
      abbreviation: "MI",
    },
    {
      name: "Minnesota",
      abbreviation: "MN",
    },
    {
      name: "Mississippi",
      abbreviation: "MS",
    },
    {
      name: "Missouri",
      abbreviation: "MO",
    },
    {
      name: "Montana",
      abbreviation: "MT",
    },
    {
      name: "Nebraska",
      abbreviation: "NE",
    },
    {
      name: "Nevada",
      abbreviation: "NV",
    },
    {
      name: "New Hampshire",
      abbreviation: "NH",
    },
    {
      name: "New Jersey",
      abbreviation: "NJ",
    },
    {
      name: "New Mexico",
      abbreviation: "NM",
    },
    {
      name: "New York",
      abbreviation: "NY",
    },
    {
      name: "North Carolina",
      abbreviation: "NC",
    },
    {
      name: "North Dakota",
      abbreviation: "ND",
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP",
    },
    {
      name: "Ohio",
      abbreviation: "OH",
    },
    {
      name: "Oklahoma",
      abbreviation: "OK",
    },
    {
      name: "Oregon",
      abbreviation: "OR",
    },
    {
      name: "Palau",
      abbreviation: "PW",
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA",
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR",
    },
    {
      name: "Rhode Island",
      abbreviation: "RI",
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
    },
    {
      name: "South Dakota",
      abbreviation: "SD",
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
    },
    {
      name: "Texas",
      abbreviation: "TX",
    },
    {
      name: "Utah",
      abbreviation: "UT",
    },
    {
      name: "Vermont",
      abbreviation: "VT",
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI",
    },
    {
      name: "Virginia",
      abbreviation: "VA",
    },
    {
      name: "Washington",
      abbreviation: "WA",
    },
    {
      name: "West Virginia",
      abbreviation: "WV",
    },
    {
      name: "Wisconsin",
      abbreviation: "WI",
    },
    {
      name: "Wyoming",
      abbreviation: "WY",
    },
  ];

  const statesFormatted = [
    ...new Set(
      states.map((state) => {
        return { value: state.abbreviation, label: state.name };
      })
    ),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onEmployeeCreate(employeeData);

    addEmployee(employeeData);

    setEmployeeData({
      firstName: "",
      lastName: "",
      dateOfBirth: new Date(),
      startDate: new Date(),
      department: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
      },
    });

    setShowModal(true);
  };

  return (
    <div className="App">
      <div className="title">
        <h1>HRnet</h1>
        <Link className="link" to="employeeList">
          View Current Employees
        </Link>
      </div>

      <div className="container">
        <h2>Create Employee</h2>
        <form action="#" id="create-employee" onSubmit={handleSubmit}>
          <div className="input-address">
            <div className="text-date-input">
              <label htmlFor="first-name">First Name</label>
              <input
                required
                type="text"
                id="first-name"
                value={employeeData.firstName}
                onChange={(e) =>
                  setEmployeeData({
                    ...employeeData,
                    firstName: e.target.value,
                  })
                }
              />

              <label htmlFor="last-name">Last Name</label>
              <input
                required
                type="text"
                id="last-name"
                value={employeeData.lastName}
                onChange={(e) =>
                  setEmployeeData({
                    ...employeeData,
                    lastName: e.target.value,
                  })
                }
              />

              <label htmlFor="date-of-birth">Date of Birth</label>
              <DatePicker
                required
                selected={employeeData.dateOfBirth}
                onChange={(date) =>
                  setEmployeeData({
                    ...employeeData,
                    dateOfBirth: date,
                  })
                }
              />

              <label htmlFor="start-date">Start Date</label>
              <DatePicker
                required
                selected={employeeData.startDate}
                onChange={(date) =>
                  setEmployeeData({
                    ...employeeData,
                    startDate: date,
                  })
                }
              />

              <label htmlFor="department">Department</label>
              <Select
                required
                name="department"
                id="department"
                options={optionsDepartment}
                value={employeeData.department}
                onChange={(selected) =>
                  setEmployeeData({
                    ...employeeData,
                    department: selected[0]?.value || "",
                  })
                }
              />
            </div>
            <fieldset className="address">
              <legend>Address</legend>

              <label htmlFor="street">Street</label>
              <input
                required
                id="street"
                type="text"
                value={employeeData.address.street}
                onChange={(e) =>
                  setEmployeeData({
                    ...employeeData,
                    address: {
                      ...employeeData.address,
                      street: e.target.value,
                    },
                  })
                }
              />

              <label htmlFor="city">City</label>
              <input
                required
                id="city"
                type="text"
                value={employeeData.address.city}
                onChange={(e) =>
                  setEmployeeData({
                    ...employeeData,
                    address: {
                      ...employeeData.address,
                      city: e.target.value,
                    },
                  })
                }
              />

              <label htmlFor="state">State</label>
              <Select
                required
                name="state"
                id="state"
                options={statesFormatted}
                value={employeeData.address.state}
                onChange={(selected) =>
                  setEmployeeData({
                    ...employeeData,
                    address: {
                      ...employeeData.address,
                      state: selected,
                    },
                  })
                }
              />

              <label htmlFor="zip-code">Zip Code</label>
              <input
                required
                id="zip-code"
                type="number"
                value={employeeData.address.zipCode}
                onChange={(e) =>
                  setEmployeeData({
                    ...employeeData,
                    address: {
                      ...employeeData.address,
                      zipCode: e.target.value,
                    },
                  })
                }
              />
            </fieldset>
          </div>
          <div className="department_submit">
            <button type="submit" className="submit">
              Save
            </button>
          </div>

          {/* {isModalOpen && (
            <div className="modal-background">
              <div className="modal">
                <span className="close" onClick={() => setIsModalOpen(false)}>
                  &times;
                </span>
                <p>Employee Created!</p>
              </div>
            </div>
          )} */}

          {/* Use the Modal component */}

          <div>
            <Modal show={showModal} onClickCloseBtn={closeModal}>
              <h1>Success !</h1>
              <p>Employee Created</p>
            </Modal>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEmployee;
