import React from 'react';


class MonsterChoice extends React.Component {

    state = {
        easy: [],
        medium: [],
        hard:[],
        monster: {}
    }

    componentDidMount() {
        fetch('http://localhost:3000/monsters')
        .then(res => res.json())
        .then(monsters => monsters.map(monster => {
            if(monster.difficulty === "Easy"){
                this.setState({
                    easy: [...this.state.easy, monster]
                })
            } else if(monster.difficulty === "Medium"){
                this.setState({
                    medium: [...this.state.medium, monster]
                })
            } else {
                this.setState({
                    hard: [...this.state.hard, monster]
                })
            }
        }))
    }

    handleSelectButton = (arr) => {
        this.props.handleButton(arr)
    }

    render(){
        
        return (
            <div className='Monster'>
                <div><h3>Monster Difficulty:</h3></div>
                <div className="difficulty" onClick={() => this.handleSelectButton(this.state.easy)}><h3>Easy</h3></div>
                <div className="difficulty" onClick={() => this.handleSelectButton(this.state.medium)}><h3>Medium</h3></div>
                <div className="difficulty" onClick={() => this.handleSelectButton(this.state.hard)}><h3>Hard</h3></div>
            </div>
        )
    }
}
export default MonsterChoice;