import React from 'react';
import './Issue.css';

function Issue(props) {
    return (
        <>
        <div key={props.index}>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <a href={props.url}>Link</a>
        </div>
        <br></br>
        </>
    )
}

export default Issue