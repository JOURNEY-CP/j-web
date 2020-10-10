import React from 'react';
import '../style.css'

class TopBar extends React.Component {
  render(){
    return (
      <div className="top-bar-main">
        <div className="top-bar-name">JOURNEY</div>
        <div className="top-bar-caption">A light weight browser for us</div>
      </div>
    );
  }
}

export default TopBar;
