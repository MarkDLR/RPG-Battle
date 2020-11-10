import React from 'react';





class CharacterBattle extends React.Component {

    render(){

    const stats = this.props.character
    const character = this.props.character.character
    const job = this.props.character.job
    const items = this.props.character.items
    
    
        return (
            <div id="character-hit" className='battle-character'>
                <img  className="img" id={character.name} src={job.img} alt={job.name}/>
                <h3>{character.name}</h3>
                <div>Stats:</div>
                <div>HP: {stats.hp}</div>
                <div>Attack: {stats.atk}</div>
                <div>Defense: {stats.def}</div>
                <div><br></br></div>
                <div><button onClick={() => this.props.handleGoBack(character)}>Retreat</button></div>
                {/* <div><button onClick={() => clearTimeout(delaybattle)}>Retreat</button></div> */}
            </div>
        )
    }
}
export default CharacterBattle;