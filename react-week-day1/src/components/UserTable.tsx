import { User } from "../data/data";

type UserProps = {
  user: User;
};

export default function UserTable({ user }: UserProps) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.isActive ? "Yes" : "No"}</td>
    </tr>
  );
}
