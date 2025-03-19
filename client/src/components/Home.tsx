import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
// import { addUserData } from "../redux/slices/dataSlice"; // Import actions if needed

const Home: React.FC = () => {
  // Access the users from the state.data slice
  const users = useSelector((state: RootState) => state.data.users); // Access the users array from the "data" slice

  return (
    <div>
      <h1>Users List:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name} <br />
            <strong>Description:</strong> {user.description} <br />
            <strong>Date:</strong> {user.date} <br />
            <strong>Location:</strong> {user.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
