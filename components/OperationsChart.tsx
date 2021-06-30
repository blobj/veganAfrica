import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    box: {
        "& text": {
            fill: "#48644c",
        },
        "& rect": {
            fill: "#c5e1a5"
        },
        "& g": {
            "& text:first-of-type": {
                fontSize: "25px"
            },
            "& text": {
                fontSize: "20px"
            }
        },
        "& line": {
            stroke: "#48644c",
            strokeWidth: "5",
            fill: "#48644c"
        }
    }
}))

const ListIcon = (props: any) => {
    const {x, y} = props
    return (
        <>
        <circle cx={x} cy={y} r="4" fill="#48644c" />
        </>
    )
}


const OperationsChart = () => {
    const classes = useStyles();
    return (
        <>
            <svg viewBox="0 0 650 900" className={classes.box}>
                <g>
                 <rect x="10" y="20" rx="20" ry="20" width="300" height="500"></rect>
                 <text x="60" y="60">SUSTAINABILITY</text>
                 <line x1="10" y1="80" x2="307" y2="80" />
                 <ListIcon x="30" y="120" />
                 <text x="45" y="125">Sustainability produced</text>
                 <text x="45" y="145">homeware products</text>
                </g>
                <g>
                    <rect x="340" y="20" rx="20" ry="20" width="300" height="500" />
                    <text x="415" y="60">EDUCATION</text>
                    <ListIcon x="360" y="120" />
                    <text x="375" y="125">Plant-based youth programs</text>
                </g>
            </svg>
        </>
    )
}

export default OperationsChart