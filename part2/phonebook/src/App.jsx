import { useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filteredName, setFilteredName] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilteredName(event.target.value.toLowerCase());
    let filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(filteredName)
    );
    setFilteredPersons(filtered);
    setIsFiltered(filtered.length > 0);
  };

  const addName = (event) => {
    event.preventDefault();
    const newPerson = {
      id: persons.length + 1,
      name: newName,
      phone: newPhone,
    };

    const checkIfExists = (prevPersons) => {
      let found = prevPersons.some((person) => person.name === newPerson.name);

      if (found) {
        alert(`${newName} is already added to phonebook`);
        return prevPersons;
      } else {
        return [...prevPersons, newPerson];
      }
    };

    setPersons(checkIfExists);
    setNewName("");
    setNewPhone("");
  };

  const personsToShow = isFiltered ? filteredPersons : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <hr></hr>
      <Filter handleFilterChange={handleFilterChange}/>
      <hr></hr>
      <PersonForm
        addName={addName}
        handleNameChange={handleNameChange}
        newName={newName}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      <hr></hr>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
