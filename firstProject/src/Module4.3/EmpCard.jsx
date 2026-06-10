import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard";

function EmpCard() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Priya",
      age: 24,
      city: "Bengaluru",
      role: "Frontend Developer",
      isOnline: true,
    },
    {
      id: 2,
      name: "Rahul",
      age: 27,
      city: "Hyderabad",
      role: "Backend Developer",
      isOnline: false,
    },
    {
      id: 3,
      name: "Sneha",
      age: 23,
      city: "Chennai",
      role: "UI/UX Designer",
      isOnline: true,
    },
  ]);

  const toggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, isOnline: !user.isOnline }
          : user
      )
    );
  };

  return (
    <div style={styles.container}>
      {users.map((user) => (
        <EmployeeCard
          key={user.id}
          name={user.name}
          age={user.age}
          city={user.city}
          role={user.role}
          isOnline={user.isOnline}
          toggle={() => toggleStatus(user.id)}
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "40px",
  },
};

export default EmpCard;