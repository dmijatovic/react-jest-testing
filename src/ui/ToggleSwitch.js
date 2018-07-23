import React from 'react';

import './ToggleSwitch.scss';

class ToggleSwitch extends React.Component{
  
  state={
    on: true
  }

  componentDidMount(){
    //set initial switch state
    if (this.props.initVal === this.props.labelOFF){
      this.setState({
        on: false 
      });
    }
  }

  toggleState = () =>{
    // communicate toggle decission
    // note oposite logic due to async nature 
    // of setState function 
    if (this.state.on){
      this.props.onToggleState(this.props.labelOFF);
    }else{
      this.props.onToggleState(this.props.labelON);
    }
    // update local state
    this.setState({
      on: !this.state.on
    });
  }

  render(){
    let toggleClass=["toggle-on", "arrow-left"];
    //debugger
    if (this.state.on){
      toggleClass=["toggle-on", "arrow-left"];
    }else{
      toggleClass=["toggle-off", "arrow-right"];
    }
    return (
      <div className={"toggle-switch " + this.props.className}
        onClick={this.toggleState}>
        <label className="toggle-label">
          {this.props.labelON}
        </label>
        <div className={'toggle-area '  + toggleClass[0]}>
          <div className={"toggle-indicator " + toggleClass[1]}></div>
        </div>
        <label className="toggle-label">{this.props.labelOFF}
        </label>
      </div>
    )
  }
}

export default ToggleSwitch;