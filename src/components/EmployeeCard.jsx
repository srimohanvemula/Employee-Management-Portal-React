import { useNavigate } from "react-router-dom";

function EmployeeCard({ employee, onDelete }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/employees/${employee.id}`);
  };

  return (
    <div className="employee-card">
      <div className="employee-card-header">
        <h3>{employee.name}</h3>

        <span
          className={
            employee.status === "Active"
              ? "status-badge active"
              : "status-badge inactive"
          }
        >
          {employee.status}
        </span>
      </div>

      <p>
        <strong>Employee ID:</strong> {employee.employeeId}
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

      <div className="employee-card-actions">
        <button onClick={handleViewDetails}>
          View Details
        </button>

        <button
          onClick={() => onDelete(employee.id)}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;