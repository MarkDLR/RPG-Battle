import React from 'react'

class ChosenMonster extends React.Component {



    render(){
        const monster = this.props.monster
        
        return (
            <div id="monster-hit" className='Monster-chosen'>
                <img  className="img" id={monster.difficulty} src={monster.img} alt={monster.name}/>
                <h3>{monster.name}</h3>
                <div>Stats:</div>
                <div>HP: {monster.hp}</div>
                <div>Atk: {monster.atk}</div>
                <div>Def: {monster.def}</div>
            
            </div>
        )
    }
}
export default ChosenMonster;