const Persons = ({personsToShow}) => {
    console.log(personsToShow);
    return personsToShow.map((person) => (<p key={person.id}>{person.name} - {person.phone}</p>))
}

export default Persons