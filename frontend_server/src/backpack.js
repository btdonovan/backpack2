import React from 'react'

function Backpack(props){
    console.log(props.backpack)
    let combinedWeight = 0
    for (var i = 0; i < props.backpack.length; i++) {
        combinedWeight += props.backpack[i].item_weight
    }
    return (
        <div>
        <ul>
            Available Items
            {props.items.map((item, index) => <li key={index}>{item.name} <button onClick = {(e) => props.addItem(item)}>Add</button></li>)}
        </ul>
        <ul>
            Your Backpack
            {'Combined Weight: '}{combinedWeight}
            {props.backpack.map((item, index) => <li key={index}>{item.name} - {item.item_weight}</li>)}
        </ul>
        </div>

    )
}

export default Backpack;