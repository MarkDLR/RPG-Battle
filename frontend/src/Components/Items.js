import React, {useState} from 'react';
import EquipButton from './EquipButton'


// const Items = (props) => {
class Items extends React.Component {

  state = {
    equipped: false
  }


  handleEquip = () => {
    
    if(!this.props.equippedarr.includes(this.props.item)){
      
      if(!this.props.subtypes.includes(this.props.item.sub_type)){
        this.props.handleItemClick(this.props.item, this.state.equipped)  //handles equipbutton
        return(this.setState({  
          equipped: !this.state.equipped
        }))
      } else {
        this.props.handleItemClick(this.props.item, this.state.equipped) // handles equipbutton for same subtype
      }

    } else {

      this.props.handleItemClick(this.props.item, this.state.equipped) // handles unequipButton
      return(this.setState({
        equipped: !this.state.equipped
      }))  
    }
    
  }
  
  render(){
    
    return (
      <div className="item">
        <div>{this.props.item.name}</div>
        <EquipButton handleEquip={this.handleEquip} equipped={this.state.equipped}/>
        
      </div>
    )

  }
}
export default Items;