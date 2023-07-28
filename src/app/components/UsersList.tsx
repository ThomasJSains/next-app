import { DestroyButton } from "./DestroyButton";
import styles from "../page.module.css";
import { CreateButton } from "./CreateButton";

export type User = { name: string; id: number };

export const UsersList = ({ users }: { users: User[] }) => {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles["table-cell"]}>
              <p>Username</p>
            </th>
            <th className={styles["table-cell"]}>Destroy?</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td className={styles["table-cell"]}>
                  <p>{user.name}</p>
                </td>
                <td className={styles["table-cell"]}>
                  <DestroyButton id={user.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CreateButton />
    </>
  );
};
