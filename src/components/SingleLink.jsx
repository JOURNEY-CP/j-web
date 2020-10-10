import React from 'react';

const SingleLink =(props)=> {
    return (
        <a href={props.url} className="single-link-main">{props.name}</a>
    );
}

export default SingleLink;
