import React from "react";

class front extends React.Component {

  render(){
    return <div style={{}}>
            <button onclick={this.props.children}> Submit</button>
            </div>
        
  }
}
export default front;