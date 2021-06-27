import React from 'react'
import './Avatar.css';
import 'tachyons';
export default function Avatarlist(props) {
    console.log('33333333', props);
    return (
        <div className="avatarstyle ma4 bg-light-purple dib pa4">
            <img src= {props.img} alt="Avatar" />
            <h3 className="tc" style={{color:'white'}}>{props.name} {props.namelast} </h3>
            {/* <h3 className="tc">{props.namelast}</h3> */}
            <p className="tc" style={{color:'white'}}>{props.email}</p> 
        </div>
    )
}
