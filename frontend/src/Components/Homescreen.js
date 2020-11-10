import React,{ Component } from 'react';
import Characters from '../Containers/Characters'
import DisplayCharacter from './DisplayCharacter'
import BattleField from './BattleField'
import {
    withRouter
  } from 'react-router'

class Homescreen extends Component {

    state={
        viewCharacter: false,
        characters: [],
        characterView:{},
        characterViewJob: {},
        characterViewItems:[],
        selectedCharacter: {},
        characterSelected: false
    }

    componentDidMount(){
        this.getData()
        if(localStorage.getItem('selectedCharacter')){
            this.setState({
                selectedCharacter: JSON.parse(localStorage.getItem('selectedCharacter')),
                characterSelected: true
        })
        }
    }

    getData = () => {
        fetch(`http://localhost:3000/characters`,{ //change back to /characters if this doesn't
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Auth-key': localStorage.getItem('auth_key')
            }
        })
        .then(res => res.json())
        .then(characters => {
            this.setState({
                characters: characters
            })
        })
    }

    handleCharacterClick = (character) => {
        this.setState({
            viewCharacter: true,
            characterView: character,
            characterViewItems: character.items,
            characterViewJob: character.job,
        })
    }

    handleChSelect = (selectedCharacter) => {
        localStorage.setItem('selectedCharacter', JSON.stringify(selectedCharacter))
        this.setState({
            selectedCharacter,
            characterSelected: true,
            viewCharacter: false,
            characterView:{},
            characterViewJob: {},
            characterViewItems:[]
        })
    }

    handleReturn = () => {
        this.setState({ 
            viewCharacter: false,
            characterView:{},
            characterViewJob: {},
            characterViewItems:[]
        })
    }

    handleGoBack = (character) => {
        localStorage.removeItem('selectedCharacter')
        this.setState({
            selectedCharacter: {},
            characterSelected: false,
            viewCharacter: true,
            characterView: character,
            characterViewItems: character.items,
            characterViewJob: character.job,
        })
    }

    handleDelete = (character) => {
        const newarray = [...this.state.characters].filter(c => c.id !== character.id)
        this.setState({
            characters: newarray
        })
        this.handleReturn()

    }

    handleNewCharacter = (character) => {
        const addCharacter = [...this.state.characters, character]
        
        this.setState({
            characters: addCharacter
        })
    }
    
    render(){
        const renderHomescreen = () => {
            if(this.state.viewCharacter === false && this.state.characterSelected === true ) {
              return(
                <BattleField character={this.state.selectedCharacter} handleGoBack={this.handleGoBack} />
              )
            } else if( this.state.viewCharacter === true) {
                return(
                    <DisplayCharacter handleDeleteClick={this.handleDelete} handleSelect={this.handleChSelect} character={this.state.characterView} return={this.handleReturn} job={this.state.characterViewJob} items={this.state.characterViewItems}/>
                )
            } else {
                return(
                    <Characters  handleSubmit={this.handleNewCharacter}characters={this.state.characters} handleCharacterClick={this.handleCharacterClick}/>
                )
            }

        }
        
        return (
            <div className='homescreen'>
                
                {
                    renderHomescreen()
                }
            </div>
        )
    }
}

export default withRouter(Homescreen)