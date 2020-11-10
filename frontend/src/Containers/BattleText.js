import React from 'react'
import BattleButton from '../Components/BattleButton'


class BattleText extends React.Component {
    state = {
        cHealth: 0,
        mHealth: 0,
        message: '',
        cMessage: ''
    }

    componentDidMount(){
        this.setState({
            cHealth: this.props.character.hp,
            mHealth: this.props.monster.hp
        })
    }

    startBattle = () => { // damage character deals
        document.getElementById('character-hit').style.color = null
        let img = document.getElementById(this.props.character.character.name)
        img.classList.remove('nudge')

        let mDamage = 0 
        let atk = this.props.monster.def - this.props.character.atk
        let critAtk = this.props.monster.def - (this.props.character.atk*2)
        let crit = Math.random()
            
            if(crit < 0.8) { // conditional for checking for crit
                if(atk >= 0) { //conditional for checking/changing the damage to monster
                    mDamage = 0
                } else {
                mDamage = atk
                }
            } else { // character does crit
                
                if(critAtk >= 0) { // if monster def is higher than crit attack
                    mDamage = 0
                } else { // if critAtk is higher that def
                    mDamage = critAtk
                }
            }
        this.damageToMonster(mDamage)
            
        
    }

    damageToMonster = (mDamage) => {
        
        const character = this.props.character.character.name
        const monster = this.props.monster
        const mCurrentHealth = this.state.mHealth + mDamage
        if(mDamage >= 0){ // conditional to display damage to monster
            this.setState({
                message:`${character} did no damage to ${monster.name}`
            })
        } else {
            this.setState({
                mHealth: mCurrentHealth,
                message: `${character} dealt ${mDamage} to ${monster.name}`
            }) 
            document.getElementById('Monster-choose').style.color = 'red'
            let img = document.getElementById(monster.difficulty) // monster nudge here
            img.classList.add('nudge')
        }
        setTimeout(() => {
                this.mAlive()
            }, 1000)
    }

    mAlive = () => { // function to check monster health

        if(this.state.mHealth > 0){   
            this.characterDamagefn()        
        } 
    }


    characterDamagefn = () => { //damaage monster deals
        document.getElementById('Monster-choose').style.color = null  //removes monster color
        let img = document.getElementById(this.props.monster.difficulty)
        img.classList.remove('nudge') // removes monster nudge
        
            let cDamage = 0
        const atk = this.props.character.def - this.props.monster.atk
        const critAtk = this.props.character.def - (this.props.monster.atk*2)
        
        // console.log(critAtk)

        if(this.state.mHealth > 0){
           let crit = Math.random()
            if(crit < 0.8) {
                if(atk >= 0) {
                    cDamage = 0
                } else {
                cDamage = atk
                }
            } else { 
                // console.log("Crit")
                if(critAtk >= 0 ){
                    cDamage = 0
                } else {
                cDamage = critAtk
                }
            }
            
        }
        setTimeout(() => {
            this.damagetoCharacter(cDamage)
        },1500)
    }


    damagetoCharacter = (cDamage) => {
        const cCurrentHealth = this.state.cHealth + cDamage
        this.setState({cHealth: cCurrentHealth})
        this.alive(cDamage)
    }
    
    alive = (cDamage) => {
        const character = this.props.character.character.name
        const monster = this.props.monster.name
        const health = this.state.cHealth

        if(health > 0){ // condition to check for character health
            if(cDamage >= 0){  // damage conditions for character
                this.setState({message: `${monster} dealt no damage to ${character}`})
               
            } else {
                
                document.getElementById('character-hit').style.color = 'red' // character color change
                let img = document.getElementById(character) 
                img.classList.add('nudge')  // Character nudge
                this.setState({message: `${monster} dealt ${cDamage} to ${character}` }) 
            }

            this.delaybattle() // comment out to remove loop
            
        } else {
            document.getElementById('character-hit').style.color = 'red'
            let img = document.getElementById(character)
            img.classList.add('nudge')
            this.setState({message: `${character} defeated, monster dealt ${cDamage} to character`})
        }

    }
    
    delaybattle = () => { // looping function
        setTimeout(() => { 
            this.startBattle()
        }, 2000)
    }

    handleMItems = (item) => { // Loot item functions go to BattleField component
        
        this.setState({message: `click to loot ${item.name}`})
        this.props.handlewin(item)
    }

    endbattle = () => {
        this.setState({message: "you defeated the monster"})
    }


    render(){
        const monster = this.props.monster
        const stats = this.props.character
        const character = this.props.character.character
        const job = this.props.character.job
        const items = this.props.character.items



        return (
            <div className='battle-text'>
                <h4>{character.name}</h4>
                <h3>{this.state.cHealth}</h3>
                {/* <h5>{this.state.cMessage}</h5>   if you want to change the way the texts displays */} 
                
                <BattleButton reset={this.props.reset} battle={this.startBattle} items={monster.items} handleMItems={this.handleMItems} mHP={this.state.mHealth} cHP={this.state.cHealth} />

                <h4>{monster.name}</h4>
                <h3>{this.state.mHealth}</h3>

                <div>
                    <h5>{this.state.message}</h5>
                </div>
            </div>
        )
    }
}
export default BattleText;