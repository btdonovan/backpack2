import React from 'react'

function Backpack(props){
    console.log(props.backpack)
    return (
        <div>
        <ul>
            Available Items
            {props.items.map((item, index) => <li key={index}>{item.name} <button onClick = {(e) => props.addItem(item)}>Add</button></li>)}
        </ul>
        <ul>
            Your Backpack
            {props.backpack.map((item, index) => <li key={index}>{item.name} - {item.item_weight}</li>)}
        </ul>
        </div>

    )
}

export default Backpack;