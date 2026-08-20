import { useParams, useNavigate } from "react-router-dom";

function EmployeeDetails({ employees }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const employee = employees.find(
    (employee) => employee.id === Number(id)
  );

  if (!employee) {
    return (
      <div>
        <h1>Employee Not Found</h1>
        <button onClick={() => navigate("/employees")}>
          Back to Employees
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Employee Details</h1>

      <div>
        <p>
          <strong>Employee ID:</strong> {employee.employeeId}
        </p>

        <p>
          <strong>Name:</strong> {employee.name}
        </p>

        <p>
          <strong>Email:</strong> {employee.email}
        </p>

        <p>
          <strong>Phone:</strong> {employee.phone}
        </p>

        <p>
          <strong>Department:</strong> {employee.department}
        </p>

        <p>
          <strong>Designation:</strong> {employee.designation}
        </p>

        <p>
          <strong>Status:</strong> {employee.status}
        </p>
      </div>

      <button onClick={() => navigate("/employees")}>
        Back to Employees
      </button>
    </div>
  );
}

export default EmployeeDetails;