import React, { Component } from 'react';
import classnames from "classnames";
import './App.scss';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {time: new Date(), rangeValue: 0};
  }

  componentDidMount(){
    setInterval(()=>this.setState({time: new Date()}), 1000);
  }

  setRange = (e) =>{
    console.log(e)
    this.setState({rangeValue: e.target.value});
  }

  isNight = () =>{
    let hour = this.state.time.getHours();
    
    if(this.state.rangeValue){
      let isAm = hour >=0 && hour < 12;
      console.log(isAm, this.state.rangeValue)
      if(isAm && this.state.rangeValue <=50){
        return true;
      }else if(!isAm && (this.state.rangeValue >=50)){
        return true;
      }
      return false;
    }
    return (hour < 6 || hour > 18);
  }

  render() {
    let divisions = [0,1,2,3,4,5,6,7,8,9,10,11];
    let now = this.state.time;
    let hour = now.getHours() 
    if(hour> 12){
      hour = hour - 12;
    }
    
    let leftPosition = this.state.rangeValue || (hour * (100/12)) + (  (100/720)*now.getMinutes());
    let isNight = this.isNight();
    return (
      <div className={classnames("container", {"night": isNight, "day": !isNight})}>
        <div className="background">
          <div className="cloud cloud-1">{this.state.time.toLocaleTimeString()}</div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
          
          <div className={classnames({"moon": isNight, "sun": !isNight})} style={{left: `${leftPosition}%`}}>
            <div className="crater1"></div>
            <div className="crater2"></div>
            <div className="crater3"></div>
          </div>
          
          <div className="timeline">{divisions.map(hour=> <span className="hour">{hour}</span>)}</div>
          {/* <div className="star star1-animation"></div>
          <div className="star star2-animation"></div>
          <div className="star star3-animation"></div> */}
        </div>
        <div className="main-content">
        <input type="range" className="range" onChange={this.setRange} step={(100/720)} value={leftPosition} min={0} max={100}/>
          <span className="intro">Hi hi, I'm <span>Velbharathi❤️</span>.<span className="blinking-cursor">_</span></span>
          </div>
      </div>
    );
  }
}

export default App;
