import EmployeeForm from "../components/EmployeeForm";

function AddEmployee({ employees, setEmployees }) {
  const handleAddEmployee = (employeeData) => {
    const newEmployee = {
      id: Date.now(),
      ...employeeData,
    };

    setEmployees((currentEmployees) => [
      ...currentEmployees,
      newEmployee,
    ]);

    alert("Employee added successfully!");
  };

  return (
    <div>
      <h1>Add Employee</h1>

      <EmployeeForm onAddEmployee={handleAddEmployee} />
    </div>
  );
}

export default AddEmployee;