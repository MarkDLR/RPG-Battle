import React from 'react'

class CharacterCard extends React.Component{
    
    state = {
        job: {}
    }

    componentDidMount() {
        fetch(`http://localhost:3000/jobs/${this.props.character.job_id}`)
        .then(res => res.json())
        .then(job => this.setState({
            job
        }))
    }
    
    render(){
        const character = this.props.character
       const job = this.state.job

        return (
        <div className='character' onClick={() => this.props.handleCharacterClick(character)}>
            
            <img src={job.img} alt={job.name} />
            <div className='top'>
                <div>Character: </div>
                <div>{character.name}</div>
                <div>Job: {job.name}</div>
                <div>Level: {character.level}</div>
                <div>Exp: {character.exp}</div>
                <div>Gold: {character.gold + job.gold } </div>
            </div>
            
        </div>
        )
    }
}
export default CharacterCard