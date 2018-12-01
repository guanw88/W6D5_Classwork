import React from 'react';
import TabsHeader from './tabsheader'

class Tabs extends React.Component {
  constructor (props) {
    super(props);
    this.state = {idx: 0};
    this.props = props;
    this.showTab = this.showTab.bind(this);
  }
  
  showTab(e) {
    let tabName = e.target.innerText;
    if (tabName === "one") {
      this.setState({idx: 0});
    } else if (tabName === "two") {
      this.setState({idx: 1});
    } else if (tabName === "three") {
      this.setState({idx: 2});
    }
  }
  
  render () {
    return (
      <div>
        <ul>
          {this.props.array.map( (el, idx) => <TabsHeader clickFunc={ this.showTab } title={el.title} key1={idx}/>)}
          {this.props.array.map(el => <p> {el.content} </p>)}
        </ul>
      </div>
    )
  }
  
}

export default Tabs;