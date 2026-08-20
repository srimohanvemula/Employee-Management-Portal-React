const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchEmployees = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch employee data");
  }

  return response.json();
};