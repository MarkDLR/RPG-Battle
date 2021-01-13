import React from 'react';





const SellButton = (props) => {
  
  return(
    <div>
    {
    props.equipped ?  null : <button>Sell Item</button>
    }
    </div>
  )
}

export default SellButton;