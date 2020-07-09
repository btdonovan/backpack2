import React from 'react'

function FillOut(props){
    return (
        <form>
            <label for = "name" >Name: </label>
            <input id = "name" name = "name"  onChange={(e) =>props.handleChange("name",e)} required/>
            <label for = "weight" >Weight: </label>
            <input type="number" id = "weight" name = "weight" min = "5" max = "50"  onChange={(e) =>props.handleChange("weight",e)} required/>
            <label for = "days">Days: </label>
            <select name="days" id="days"  onChange={(e) =>props.handleChange("days",e)} required>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <input type = "button" onClick = {props.handleSubmit} value = "Submit"></input>
        </form>
    )
}

export default FillOut;