import React, {Component} from 'react';

import './add-panel.css'

class AppPanel extends Component {

  state = {
    label: '',
    important: false,
    id: 1
  }

  // onAdded = evt =>{
  //   console.log(`${evt.target.value}`)
  // }

  render () {

    const {todoData, onAdded} = this.props;

    return  (
      <div className="d-flex add-panel">
        <input className = "form-control add-input" onChange = {this.onAdded} placeholder="type to add"/>
        <button className = "btn btn-primary active" onClick = {() => onAdded('d')} >Add</button>
      </div>
    )
  }

}

export default AppPanel;