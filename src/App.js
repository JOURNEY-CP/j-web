import React from 'react';
import TopBar from './components/TopBar'
import MainContent from './components/MainContent'
import './style.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      src:"https://journey-cp.github.io"
    }
  }
  render(){
    return (
      <div className="app-main">
        <TopBar/>
        <MainContent/>
      </div>
    );
  }
}

export default App;
