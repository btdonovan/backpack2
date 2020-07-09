import React from 'react'

function Backpack(props){
    return (
        <div>
        <ul>
            Available Items
            {props.items.map(item => <li>{item.name} <button onClick = {props.addItem(item)}>Add</button></li>)}
        </ul>
        <ul>
            Your Backpack
            {props.backpack.map(item => <li>{item}</li>)}
        </ul>
        </div>

    )
}

export default Backpack;