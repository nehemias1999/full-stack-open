
import PersonItem from './PersonItem'

const Persons = ({ isSearchLabelEmpty, personsList, searchList, removePerson }) => {
    return (
        <ul>
            {
               (isSearchLabelEmpty) ?
               (
                    personsList.map(person =>
                        <PersonItem key={person.id} name={person.name} 
                                    number={person.number} removePerson={() => removePerson(person.id)}/>
                    )
               ) : (
                    searchList.map(person =>
                        <PersonItem key={person.id} name={person.name} 
                        number={person.number} removePerson={() => removePerson(person.id)}/>
                    )
               ) 
            }
        </ul>
    )
}

export default Persons