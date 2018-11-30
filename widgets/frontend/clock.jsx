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
  
  displayMinutes(){
    let minutes = this.state.time.getMinutes();
    if (minutes < 10) {
      return "0" + minutes;
    }  else {
      return minutes;
    }
  }
  
  displaySeconds(){
    let seconds = this.state.time.getSeconds();
    if (seconds < 10) {
      return "0" + seconds;
    }  else {
      return seconds;
    }
  }
  
  render() {
    return (
      <div>
        <h1>Clock</h1>
        <div className="clock-container">
          <div className="time-container">
            <h2>Time: </h2>
            <h2>{this.state.time.getHours()}:{this.displayMinutes()}:{this.displaySeconds()}</h2>
          </div>
          
          <div className="date-container">
            <h2>Date: </h2>
            <h2>{this.displayDayOfWeek()}, {this.displayMonth()} {this.state.time.getDate()}, {this.state.time.getFullYear()}</h2>
          </div>
          
        </div>
      </div>
    ) 
  }
}

export default Clock;