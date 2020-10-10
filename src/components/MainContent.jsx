import React from 'react';
import '../style.css';
import SingleLink from './SingleLink';
import links from '../data/links.json';

class MainContent extends React.Component {

    constructor(props){
        super(props);
        this.state={
            tag:"",
            allowedTags:[],
        }
        this.handleChange = this.handleChange.bind(this);
    }
    searchButtonClick=()=>{
        this.addToAllowedTags(this.state.tag)
    }

    handleChange(event) {
        this.setState({tag: event.target.value});
    }
    handleKeyDown=(event)=>{
        if(event.key==='Enter'){
            this.addToAllowedTags(this.state.tag);
            this.setState({tag:""});
        }
    }

    showLink=tags=>{
        const {allowedTags}=this.state;
        let i,j,flag;
        if(allowedTags.length===0)
            return true;
        for(i=0;i<allowedTags.length;i++){
            flag=false;
            for(j=0;j<tags.length;j++){
                if(allowedTags[i]===tags[j]){
                    flag=true;
                    break;
                }
            }
            if(flag===false){
                return false;
            }
        }
        return true;
    }

    addToAllowedTags=tag=>{
        const {allowedTags}=this.state;
        this.setState({allowedTags:[...allowedTags,tag]})
    }

    render(){
        return (
        <div className="main-content">
            <div className="input-link-main">
                <input 
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange} 
                    className="input-link"
                    onKeyDown={this.handleKeyDown}
                />
                <button
                    type="button"
                    name="search"
                    onClick={this.searchButtonClick}
                    className="link-search-button"
                >
                S
                </button>
            </div>
            <div className="show-tags">
            {
                this.state.allowedTags.map(tag=>(
                    <div className="show-tag">#{tag}</div>
                ))
            }
            </div>
            <div className="all-links">
               {links.map(link=>{
                    if(this.showLink(link.tags)){
                        return <SingleLink url={link.url} name={link.name}/>
                    }
                    return <div/>
               })}
            </div> 
        </div>
        );
    }
}

export default MainContent;
