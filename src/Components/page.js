import React from 'react'
import free from '../Images/Free/check.svg'
import notFree from '../Images/Free/low.svg'
function Legend(props) {
    function LegendLinks(props) {
        let out = []
        for (let i = 0; i < props.array.length; i++) {
            out.push(<p>{props.array[i]}</p>)
        }
        return out;
    }
    if (props.meta.columns.length > 2) {
        return <div className='legend-div' style={{ maxWidth: '600px' }}>
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
    function Image(props) {
        if (props.prop.free) {
            return <img src={free} className='option-img' alt='' />
        }
        else {
            return <img src={notFree} className='option-img' alt='' />
        }
    }
    let out = []
    if ('free' in props.array[props.iter]) {
        out.push(
            <div className='option-div' style={{ maxWidth: '600px' }}>
                <a href={props.array[props.iter].link} className='option-href'
                    style={{ width: '30%' }}
                    onClick={function (e) { e.preventDefault(); window.open(props.array[props.iter].link) }}>
                    <img src={props.array[props.iter].img} alt={props.array[props.iter].name} className='option-img' />
                    {props.array[props.iter].name}
                </a>
                <p className='option-type'>{props.array[props.iter].type}</p>
                <Image prop={props.array[props.iter]} />
                <p className='option-type'>{props.array[props.iter].freeLimit}</p>    
            </div>
        )
    }
    else {
        out.push(
            <div className='option-div'>
                <a href={props.array[props.iter].link} className='option-href'
                    onClick={function (e) { e.preventDefault(); window.open(props.array[props.iter].link) }}>
                    <img src={props.array[props.iter].img} alt={props.array[props.iter].name} className='option-img' />
                    {props.array[props.iter].name}
                </a>
                <p className='option-type'>{props.array[props.iter].type}</p>
            </div>
        )
    }

    return out
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
        </div>
    )
}