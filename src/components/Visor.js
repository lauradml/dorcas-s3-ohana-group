import React from 'react';
import Card from './Card';

class Visor extends React.Component {
  render(){
    return (
      <Card  job={this.props.job}/>
    );
  }
}

export default Visor ;
