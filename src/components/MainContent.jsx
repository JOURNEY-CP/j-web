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
    clearTagInput=()=>{
        document.getElementById('tagInput').value="";
    }
    searchButtonClick=()=>{
        this.addToAllowedTags(this.state.tag);
        this.setState({tag:""});
        this.clearTagInput();
    }

    handleChange(event) {
        this.setState({tag: event.target.value});
    }
    handleKeyDown=(event)=>{
        if(event.key==='Enter'){
            this.addToAllowedTags(this.state.tag);
            this.setState({tag:""});
            this.clearTagInput();
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
        if(tag==='')return;
        let i,flag=false;
        for(i=0;i<tag.length;i++){
            if(('a'<=tag[i]&&tag[i]<='z')||('A'<=tag[i]&&tag[i]<='Z')){
                flag=true;
                break;
            }
        }
        if(flag===false)return;
        const {allowedTags}=this.state;
        this.setState({allowedTags:[...allowedTags,tag]})
    }

    render(){
        return (
        <div className="main-content">
            <div className="input-link-main">
                <input 
                    id="tagInput"
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
                    <div key={tag} className="show-tag">#{tag}</div>
                ))
            }
            </div>
            <div className="all-links">
               {links.map(link=>{
                    if(this.showLink(link.tags)){
                        return <SingleLink key={link.url} url={link.url} name={link.name}/>
                    }
                    return <div key={link.url}/>
               })}
            </div> 
        </div>
        );
    }
}

export default MainContent;
