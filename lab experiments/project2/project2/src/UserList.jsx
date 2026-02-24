import UserCard from "./UserCard";

const UserList = () => {
  const users = [
    { id: 1, name: "Gowtham", email: "Gowtham@gmail.com" },
    { id: 2, name: "Anita", email: "anita@gmail.com" }
  ];

  return (
    <>
      {users.map(user => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
        />
      ))}
    </>
  );
};

export default UserList;