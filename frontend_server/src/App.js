import React from "react";
import "./App.css";
import FillOut from './fillout';
import Backpack from './backpack';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBackpack : [],
      name:[],
      weight:[],
      days:[],
      availableItems : [],
      fillout: true
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  async componentDidMount(){
    fetch('http://localhost:3001/items')
    .then (result =>  result.json())
    .then (data => this.setState({availableItems:data}))
  }

  handleChange(name,e){
    console.log("we got here")
    this.setState({[name] : e.target.value});
  }

  handleSubmit(){
    this.setState({fillout:false})
  }

  addItem(item){
    // this.setState(state => ({currentBackpack : [...state.currentBackpack , "item"]}))
    this.setState({
      currentBackpack: this.state.currentBackpack.concat(item)
    })
  }

  render() {
    if(this.state.fillout){
      return (
        <div className="App">
          <h1>Backpack</h1>
          <FillOut handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>        
        </div>
      );      
    }
    else{
      return(
        <div>
          {/* Backpack but false */}
          <Backpack items = {this.state.availableItems} backpack = {this.state.currentBackpack} addItem = {this.addItem}/>
        </div>
      )
    }
  }
}
export default App;
