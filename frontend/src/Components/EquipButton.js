import React from 'react';





const EquipButton = (props) => {
  
  return(
    <div>
    {
    props.equipped ?  <button onClick={() => (props.handleEquip())}>Unequip Item</button>: <button onClick={() => (props.handleEquip())}>Equip Item</button>
    }
    </div>
  )
}

export default EquipButton;