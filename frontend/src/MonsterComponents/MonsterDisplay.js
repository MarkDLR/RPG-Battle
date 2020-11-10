import React from 'react'
import MonsterChoice from '../MonsterComponents/MonsterChoice'
import ChosenMonster from './ChosenMonster'

class MonsterDisplay extends React.Component {

    state = {
        monster: {}
    }

    handleButton = (arr) => {
        const randomMonster = Math.floor(Math.random() * arr.length)
        this.setState({
            monster: arr[randomMonster],
        })
        this.props.renderMonster(arr[randomMonster])

    }


    render(){
        
        return (
            <div id='Monster-choose'>
                {
                    this.props.monster ? <ChosenMonster monster={this.state.monster} /> : <MonsterChoice  handleButton={this.handleButton}/>
                }
                
            
            </div>
        )
    }
}
export default MonsterDisplay;