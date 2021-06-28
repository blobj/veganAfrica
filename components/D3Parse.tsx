import React, {useEffect, useState} from 'react';
import {pie, arc} from "d3";
import { makeStyles } from '@material-ui/core/styles';
import { fundsDistribution } from '../store/whitepaper';


const useStyles = makeStyles(() => ({
    svg: {
        width: "95%",
        height: "600px",
        margin: "1rem auto",
        border: "2px solid #000"
    }
}))


const D3Parse = () => {
    const classes = useStyles();
    const [data, setData] = useState<any>([])
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const centerX = width / 2
    const centerY = height / 2
    const pieArc = arc()
          .innerRadius(40)
          .outerRadius(width * 0.1)

    const fundPie = pie().value(1)
    useEffect(() => {
        setData(fundsDistribution);
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }, [])

    return (
        <>
            <svg className={classes.svg}>
                <g transform={`translate(${centerX}, ${centerY})`}>
                    {fundPie(data).map((item: any)=> (
                        <path key={item.data['id']} fill={item.data['color']} d={pieArc(item)} />
                    ))}
                </g>
            </svg>
        </>
    )
}

export default D3Parse