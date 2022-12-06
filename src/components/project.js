import React from 'react';

function Project(props) {
    return (
        <div className={'indProj'}>
            {props.title}
            <a href={props.url}><img className={'projPic'} src={props.img} alt={props.alt} width = "450" height= "250"/></a>
            <div>{props.summary}</div>
        </div>
    )
}

export default Project