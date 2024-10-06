import { users } from "../../data/users";

export function dispalyUser({ users }) {
  return (
    <div>
      {users.map((users) => (
        <p>{users.name.title}</p>
      ))}
    </div>
  );
}
