import React from 'react';
import MonsterDisplay from '../MonsterComponents/MonsterDisplay'
import CharacterBattle from '../CharacterComponents/CharacterBattle'

import BattleText from '../Containers/BattleText'


class BattleField extends React.Component {
    
    state = {
        monsterSelected: false,
        selectedMonster: null
    }

    renderMonster = (monster) => {
        this.setState({
            monster: true,
            selectedMonster: monster
        })
    }

    reset = () => {
        let img = document.getElementById(this.props.character.character.name)
        img.classList.remove('nudge')
        document.getElementById('character-hit').style.color = null
        document.getElementById('Monster-choose').style.color = null
        this.setState({
            monster: false,
            selectedMonster: null
        })
    }

    handlewin = (item) => {

        const lootedItem = {
            character_id: this.props.character.character.id,
            item_id: item.id
        }
        
        fetch(`http://localhost:3000/character_items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify(lootedItem)
        }).then(res => res.json())
        .then(newItem => console.log(newItem))

        this.reset()
    }
    
    render(){
        return (
            <div className='battlefield'>
                <CharacterBattle character={this.props.character} handleGoBack={this.props.handleGoBack} />
                
                {
                    this.state.monster ? 
                    <BattleText reset={this.reset} handlewin={this.handlewin} character={this.props.character} monster={this.state.selectedMonster} /> 
                    : 
                    null
                }

                <MonsterDisplay monster={this.state.monster} renderMonster={this.renderMonster}/>
                
            
            </div>
        )
    }
}

export default BattleField;