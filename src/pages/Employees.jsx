import { useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import SearchBar from "../components/SearchBar";

function Employees({ employees, setEmployees, loading, error }) {
  const [searchText, setSearchText] = useState("");
  const [department, setDepartment] = useState("All");

  const handleDelete = (employeeId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmed) {
      return;
    }

    setEmployees((currentEmployees) =>
      currentEmployees.filter((employee) => employee.id !== employeeId)
    );
  };

  const departments = [
    "All",
    ...new Set(employees.map((employee) => employee.department)),
  ];

  const filteredEmployees = employees.filter((employee) => {
    const matchesName = employee.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesDepartment =
      department === "All" || employee.department === department;

    return matchesName && matchesDepartment;
  });

  if (loading) {
    return <h2>Loading employees...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Employees</h1>

      <p>Total Employees: {employees.length}</p>

      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
      />

      <select
        value={department}
        onChange={(event) => setDepartment(event.target.value)}
      >
        {departments.map((item) => (
          <option key={item} value={item}>
            {item === "All" ? "All Departments" : item}
          </option>
        ))}
      </select>

      {filteredEmployees.length === 0 ? (
        <p>No Employees Found</p>
      ) : (
        <div className="employee-grid">
          {filteredEmployees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Employees;