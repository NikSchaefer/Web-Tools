import React from 'react'
import { NavLink } from 'react-router-dom'
function Options(props: { arr: any }): any {
    let out = []
    for (let i = 0; i < props.arr.length; i++) {
        out.push(<NavLink className='home-option' to={props.arr[i][1]}>{props.arr[i][0]}</NavLink>)
    }
    return out
}
export default function Home(props: { config: any }):any {
    return [
        <h1>Choose Your Stack</h1>,
        <div className='home-option-div'>
            <Options arr={props.config} />
            <NavLink to='/about' className='home-about'>Contribute to the list</NavLink>
        </div>
    ]
}
