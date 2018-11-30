import React from "react";

class Clock extends React.Component {
  constructor (props){
    super(props);
    this.state = { time: new Date() };
    this.intervalId = null;
    this.tick = this.tick.bind(this);
  }
  
  tick() {
    this.setState({ time: new Date() });
  }
  
  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  
  displayDayOfWeek(){
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let num = this.state.time.getDay();
    return days[num];
  }
  
  displayMonth() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let num = this.state.time.getMonth();
    return monthNames[num];
  }
  
  render() {
    return (
      <div>
        <h1>Clock</h1>
        <h1>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</h1>
        <h1>{this.displayDayOfWeek()}, {this.displayMonth()} {this.state.time.getDate()}, {this.state.time.getFullYear()}</h1>
      </div>
    ) 
  }
}

export default Clock;