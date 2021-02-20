import React from 'react';
import data from './data';
import List from './List';



class App extends React.Component {

  state = {people: data}


  onClickButton = () => {
  this.setState({people: []})
}

  render(){
    
    return (
      <section className="container">
        <h3>{this.state.people.length} birthdays today</h3>
        <List people={this.state.people}/>
        <button onClick={ this.onClickButton }>Cleear List</button>
      </section>
    )
  }
  
}

export default App;
