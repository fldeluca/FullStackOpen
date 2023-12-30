const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addName}>
        <div>
          Name: <input onChange={props.handleNameChange} value={props.newName} />
        </div>
        <div>
          Number: <input onChange={props.handlePhoneChange} value={props.newPhone} />{" "}
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
