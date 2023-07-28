import styles from "./page.module.css";
import { User, UsersList } from "./components/UsersList";

export default async function Home() {
  const users: User[] = await getUsersData();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Next Site</h1>

        <p>
          Hello users! This is a site created on Next for creating and
          destroying a list of users!
        </p>

        <br />

        {users ? <UsersList users={users} /> : "Loading..."}
      </div>
    </main>
  );
}

async function getUsersData() {
  const res = await fetch("http://localhost:3000/api/user");
  return res.json();
}
