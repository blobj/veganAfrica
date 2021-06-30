import React, {useEffect, useState} from 'react';
import {pie, arc} from "d3";
import { makeStyles } from '@material-ui/core/styles';
import {Box} from "@material-ui/core";
import { fundsDistribution } from '../store/whitepaper';


const useStyles = makeStyles(() => ({
    box: {
        width: "100%",
        height: "auto"
    }
}))


const D3FundsPie = () => {
    const classes = useStyles();
    const [data, setData] = useState<any>([])

    const pieArc = arc()
          .innerRadius(80)
          .outerRadius(250)

    const fundPie = pie().value((data: any) => data.value)
    useEffect(() => {
        setData(fundsDistribution);
    }, [])

    return (
        <Box className={classes.box}>
            <svg viewBox="-250 -250 500 700">
                <g>
                    {fundPie(data).map((item: any)=> (
                        <path key={item.data['id']} fill={item.data['color']} d={pieArc(item)} />
                    ))}
                </g>
                <g transform={'translate(-250, 300)'}>
                <rect width="30" height="30" fill="#F1932D"/>
                <text fontSize="30" x="36" y="25">Acquisitions</text>
                </g>
                <g transform={'translate(10, 300)'}>
                <rect width="30" height="30" fill="#BA8DB4"/>
                <text fontSize="30" x="36" y="25">Social Impact</text>
                </g>
                <g transform={'translate(-250, 350)'}>
                    <rect width="30" height="30" fill="#882E72"/>
                    <text fontSize="30" x="36" y="25">Resources</text>
                </g>
                <g transform={'translate(10, 350)'}>
                    <rect width="30" height="30" fill="#1965B0"/>
                    <text fontSize="30" x="36" y="25">Operations</text>
                </g>
                <g transform={'translate(-250, 400)'}>
                    <rect width="30" height="30" fill="#7BAFDE"/>
                    <text fontSize="30" x="36" y="25">Marketing</text>
                </g>
                <g transform={'translate(10, 400)'}>
                    <rect width="30" height="30" fill="##4EB265"/>
                    <text fontSize="30" x="36" y="25">Legal</text>
                </g>
            </svg>
        </Box>
    )
}

export default D3FundsPie