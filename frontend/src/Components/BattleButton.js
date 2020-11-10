import React, {useState} from 'react';


const handleButtonRender = (reset, mHP, cHP, items, looteditem, battle, isDisabled, setDis) => {
    

    if(mHP > 0){
        if(cHP <=0) {
            return(
                
                <div class="lost" onClick={() => reset()}>
                    <div><img id="lost" src={`https://vickifitch.com/wp-content/uploads/2016/10/Defeated-Knight-by-unknown-originator.jpg`} alt="defeated"/></div>
                    <div><h4>you lost</h4></div>
                </div>


            )

        }
        return(
        <button onClick={() => (battle(), setDis(true))} disabled={isDisabled}>Attack</button>//ç
        )
    } else {
        
        return(
        <div className="win" onClick={() => items(looteditem)} >
            <div><img id="win" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8tTodSKbKmlkO-QI21KkRZrpvMzGPZtxu4w&usqp=CAU`} alt="win"/></div>
            <div><h4>You won a {looteditem.name}</h4> </div>
            <div><h4>Click the chest to loot.</h4></div>
            
        </div>
        )
    }

}

const BattleButton = (props) => {
    const randomItem = Math.floor(Math.random() * props.items.length)
    const item = props.items[randomItem]
    const [isDisabled, setDis] = useState(false)
  return (
    
    <div className="battle-button">
        
        {
            
            handleButtonRender(props.reset, props.mHP, props.cHP, props.handleMItems, item, props.battle, isDisabled, setDis)
            
        }
    </div>
  )
}

export default BattleButton;