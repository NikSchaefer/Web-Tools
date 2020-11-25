import React from 'react'
function LegendLinks(props) {
    let out = []
    console.log(typeof props.array)
    for (let i = 0; i < props.array.length; i++) {
        out.push(<p className='legend-column'>{props.array[i]}</p>)
    }
    return out;
}
function Legend(props) {
    return (
        <div className='legend-div'>
            <LegendLinks array={props.meta.columns} />
        </div>
    )
}
function OptionRow(props) {
    return (
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
            <Legend meta={props.config.meta} />
            <Options columns={props.config.meta.columns} array={props.config.content} />
        </div>
    )
}