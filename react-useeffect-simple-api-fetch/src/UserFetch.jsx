import { useEffect, useState } from "react";

function UserFetch() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when the component first loads
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
        setLoading(false);
      });
  }, []); // empty array → run once on component mount

 if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {user.map(u => (
          <li key={u.id}>
            <p>
                <h4>{u.name}</h4>
                <h6>{u.email}</h6>   
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserFetch;
