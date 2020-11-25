import React from 'react'
import { NavLink } from 'react-router-dom'
const width = '600px'
function Legend(props) {
    function LegendLinks(props) {
        let out = []
        for (let i = 0; i < props.array.length; i++) {
            out.push(<p>{props.array[i]}</p>)
        }
        return out;
    }
    if (props.meta.columns.length > 2) {
        return <div className='legend-div' style={{ maxWidth: width }}>
            <LegendLinks array={props.meta.columns} />
        </div>
    }
    return (
        <div className='legend-div'>
            <LegendLinks array={props.meta.columns} />
        </div>
    )
}
function OptionRow(props) {
    if ('free' in props.array[props.iter]) {
        return (
            <div className='option-div' style={{ maxWidth: width }}>
                <a href={props.array[props.iter].link} className='option-href'
                    style={{ width: '25%' }}
                    onClick={function (e) { e.preventDefault(); window.open(props.array[props.iter].link) }}>
                    <img src={props.array[props.iter].img} alt={props.array[props.iter].name} className='option-img' />
                    {props.array[props.iter].name}
                </a>
                <p className='option-type'>{props.array[props.iter].type}</p>
                <img src={props.array[props.iter].free} className='option-free-img' alt='' />
                <p className='option-type'>{props.array[props.iter].freeLimit}</p>    
            </div>
        )
    }
    else {
        return (
            <div className='option-div'>
                <a href={props.array[props.iter].link} className='option-href'
                    target="_blank" rel='noreferrer'>
                    <img src={props.array[props.iter].img} alt={props.array[props.iter].name} className='option-img' />
                    {props.array[props.iter].name}
                </a>
                <p>{props.array[props.iter].type}</p>
            </div>
        )
    }
}
function Options(props) {
    let out = []
    for (let i = 0; i < props.array.length; i++) {
        out.push(<OptionRow iter={i} array={props.array} />)
    }
    return out
}
export default function Page(props) {
    return (
        <div className='page-div'>
            <h1>{props.config.meta.product}</h1>
            <Legend meta={props.config.meta} />
            <Options columns={props.config.meta.columns} array={props.config.content} />
            Don't see certain tools? <NavLink to='/about'>Contribute to the list</NavLink>
        </div>
    )
}