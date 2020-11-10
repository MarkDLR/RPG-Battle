import React from 'react';
import CharacterCard from '../Components/CharacterCard'
import CharacterForm from '../CharacterComponents/CharacterForm'


const Characters = (props) => {

  return (
  <div>
  <h3>Choose your character</h3>
    <div className='character-container'>
      
      {
      props.characters.map(character => <CharacterCard character={character} job={character.job} handleCharacterClick={props.handleCharacterClick} key={character.id} />)
      }
      
      <CharacterForm handleSubmit={props.handleSubmit} />
      
    </div>
    
  </div>
  )
}

export default Characters;