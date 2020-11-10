import React,{ Component } from 'react';
import Items from './Items'
import {
    withRouter
  } from 'react-router';


class DisplayCharacter extends Component {

    state = {
        job: {},
        items: [],
        equippedItems: [],
        itemSubTypes: [],
        atk: 0,
        def: 0,
        hp: 0,
        message: '',
    }

    componentDidMount() {
        fetch(`http://localhost:3000/characters/${this.props.character.id}`)
        .then(res => res.json())
        .then(character => this.setState({
            job: character.job,
            items: character.items
        }))
    }


    handleItemClick = (item ,equipped) => {
        if(equipped){
            this.handleUnequip(item)

        } else {
            this.handleEquip(item)
        }
    }

    handleEquip = (item) => {
        
        const items = [...this.state.equippedItems]
        const item_subtypes = [...this.state.itemSubTypes]
        
        if(item_subtypes.includes(item.sub_type)) {
            if(items.includes(item)) {
                this.setState({message: `Can't equip ${item.name}`})

            } else {
                const indexsubtype = (element) => element.sub_type === item.sub_type
                const otherItem = items.find(indexsubtype)
                console.log(otherItem)
                this.setState({message: `Unequip ${otherItem.name} to equip ${item.name}`})
            }
        } else {
            
            this.setState({
                equippedItems: [...items, item],
                itemSubTypes: [...item_subtypes, item.sub_type],
                hp: this.state.hp + item.hp,
                atk: this.state.atk + item.atk,
                def: this.state.def + item.def,
                message: `${item.name} has been equipped`
            })
        }
    }

    handleUnequip = (item) => {
        const items = [...this.state.equippedItems].filter(equippedItem => equippedItem.id !== item.id)
        const item_subtypes = [...this.state.itemSubTypes].filter(sub => sub !== item.sub_type)
        
        if(this.state.equippedItems.includes(item)) {
            
            this.setState({
                equippedItems: items,
                itemSubTypes: item_subtypes,
                hp: this.state.hp - item.hp,
                atk: this.state.atk - item.atk,
                def: this.state.def - item.def,
                message: `Unequipped ${item.name}`
            })
        } else {
            this.setState({message: `${item.name} is not equipped`})
        }
    }

    handleDelete = (character) => {
        fetch(`http://localhost:3000/characters/${character.id}`, {
            method: "DELETE",
        }).then(this.props.handleDeleteClick(character))
    }


    
    
    render(){

        const handleItemsRender  = (array) => {
            
            var newArray = [];
            var lookupObject  = {};
            for(var i in array) {
                lookupObject[array[i]['id']] = array[i];
            }
            for(i in lookupObject) {
                newArray.push(lookupObject[i]);
            }
            if (array === undefined || array.length === 0) {
                return(
                    <h5>You do not have any items in this category</h5>
                )
            } else {
                
                return(
                    newArray.map(item => <Items subtypes={this.state.itemSubTypes} equippedarr={this.state.equippedItems} arr={this.state.equippedItems} item={item} handleItemClick={this.handleItemClick} key={item.id} />)
                )
            }
        }

        const character = this.props.character
        const job = this.state.job
        const items = this.state.items
        const characterSelect = {
            character: {
                id: character.id,
                name: character.name,
                exp: character.exp,
                atk: character.atk,
                def: character.def,
                hp: character.hp,
                level: character.level
            },
            job: {
                name: job.name,
                img: job.img,
            },
            items: this.state.equippedItems,
            hp: character.hp + job.hp + this.state.hp,
            atk: character.atk + job.atk + this.state.atk,
            def: character.def + job.def + this.state.def
        }
        const weapons = [...items].filter(item => item.item_type === "Weapon")
        const armor = [...items].filter(item => item.item_type === "Armor")
        return (
            <div className='character-view'>
                <div className="info">
                    <img className="img" src={this.state.job.img} alt={this.state.job.name}/>
                    <h3> Name: {character.name}</h3>
                    <div>Stats:</div>
                    <div>HP: {characterSelect.hp}</div>
                    <div>Atk: {characterSelect.atk}</div>
                    <div>Def: {characterSelect.def}</div>
                    <div className="select">
                        <button onClick={() => this.props.return()}>Go Back</button>
                        <br></br>
                        <button onClick={() => this.props.handleSelect(characterSelect)}>Select Character</button>
                    </div>
                </div>
                <div className="items">
                    <div className="weapons">
                        <h3>Weapons</h3>
                        {
                        handleItemsRender(weapons)
                        }
                    </div>
                    <div className="armor">
                        <h3>Armor</h3>
                        {
                        handleItemsRender(armor)
                        }

                    </div>
                    <div className='equip-message'>
                    <h4>{this.state.message}</h4>
                    </div>
                    

                </div>
                <div  className="delete-character">
                    <div onClick={() => this.handleDelete(character)} className="delete-button">Delete Character</div>
                </div>
                
            </div>
        )
    }
}

export default withRouter(DisplayCharacter)