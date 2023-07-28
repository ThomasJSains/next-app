export const CreateButton = () => {
  return (
    <form>
      <p>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name"></input>
      </p>
      <p>
        <button>Create New User</button>
      </p>
    </form>
  );
};
