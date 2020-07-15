import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images? 
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state={
      weight: 0
    }
  }
  eyeColor=(color)=>{
   
    switch(color){
      case 'blue': return BlueBaby
      case 'sun' : return SunBaby
      case 'glowing': return GlowingBaby
      default: return normalBaby
    }
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  render() {
    const {name, hobby}=this.props.details
    console.log(this.props.details[0])
    return (
      <li className="hogbabies">
        <h1>Name {name}</h1>
        <h3>Weight: {this.state.weight}</h3>
    <h3>Hobby: {hobby}</h3>
        <h4>Eye Color: {this.props.eyeColor}</h4>
          
        <button name="+" onClick={this.changeWeight} >
          Increase Weight
        </button>
        <button name="-" onClick={this.changeWeight} >
          Decrease Weight
        </button>

        <div className="hb-wrap">
          <img src={this.eyeColor(this.props.eyeColor)} style={{height: '200px'}} alt="MasterBlasterJrJr" />
        </div>
        
      </li>
    )
  }
}
