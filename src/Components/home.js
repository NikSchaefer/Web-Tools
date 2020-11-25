import React from 'react'
import { NavLink } from 'react-router-dom'
function Options(props) {

    let out = []
    for (let i = 0; i < props.arr.length; i++) {
        out.push(<NavLink className='home-option' to={props.arr[i][1]}>{props.arr[i][0]}</NavLink>)
    }
    return out
}
export default function Home(props) {

    return (
        <div className='home'>
            <h1>Lorem Ipsum</h1>
            <div className='home-option-div'>
                <Options arr={props.config} />
            </div>
            <p className='home-about'>About this Project</p>
        </div>
    )
}