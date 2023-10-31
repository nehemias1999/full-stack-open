
import PersonItem from './PersonItem'

const Persons = ({ isSearchLabelEmpty, personsList, searchList }) => {
    return (
        <ul>
            {
               (isSearchLabelEmpty) ?
               (
                    personsList.map(person =>
                        <PersonItem key={person.id} name={person.name} number={person.number}/>
                    )
               ) : (
                    searchList.map(person =>
                        <PersonItem key={person.id} name={person.name} number={person.number}/>
                    )
               ) 
            }
        </ul>
    )
}

export default Persons