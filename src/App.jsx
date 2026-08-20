import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EmployeeDetails from "./pages/EmployeeDetails";
import About from "./pages/About";

import { fetchEmployees } from "./services/api";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const data = await fetchEmployees();

        const departments = ["IT", "HR", "Finance", "Sales"];

        const designations = [
          "Software Developer",
          "HR Executive",
          "Financial Analyst",
          "Sales Executive",
        ];

        const formattedEmployees = data.map((employee, index) => ({
          id: employee.id,
          employeeId: `EMP${String(employee.id).padStart(3, "0")}`,
          name: employee.name,
          email: employee.email,
          phone: employee.phone,
          department: departments[index % departments.length],
          designation: designations[index % designations.length],
          status: employee.id % 2 === 0 ? "Active" : "Inactive",
        }));

        setEmployees(formattedEmployees);
      } catch (error) {
        setError("Unable to load employee data.");
      } finally {
        setLoading(false);
      }
    };
    loadEmployees();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <main className="page-container">
        <Routes>
          <Route
            path="/"
            element={<Dashboard employees={employees} />}
          />
          <Route
            path="/employees"
            element={
              <Employees
                employees={employees}
                setEmployees={setEmployees}
                loading={loading}
                error={error}
              />
            }
          />

          <Route
            path="/add-employee"
            element={
              <AddEmployee
                employees={employees}
                setEmployees={setEmployees}
              />
            }
          />

          <Route
            path="/employees/:id"
            element={<EmployeeDetails employees={employees} />}
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;