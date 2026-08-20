import DashboardCard from "../components/DashboardCard";

function Dashboard({ employees }) {
  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active"
  ).length;

  const inactiveEmployees = employees.filter(
    (employee) => employee.status === "Inactive"
  ).length;

  const departments = new Set(
    employees.map((employee) => employee.department)
  ).size;

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome to the Employee Management Portal.</p>

      <div className="dashboard-cards">
        <DashboardCard
          title="Total Employees"
          value={totalEmployees}
        />

        <DashboardCard
          title="Active Employees"
          value={activeEmployees}
        />

        <DashboardCard
          title="Inactive Employees"
          value={inactiveEmployees}
        />

        <DashboardCard
          title="Departments"
          value={departments}
        />
      </div>
    </div>
  );
}

export default Dashboard;