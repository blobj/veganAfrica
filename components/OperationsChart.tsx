import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    box: {
        "& text": {
            fill: "#48644c",
        },
        "& rect": {
            fill: "#c5e1a5",
            rx: "20",
            ry: "20"
        },
        "& g": {
            "& text:nth-of-type(1)": {
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
            <svg viewBox="0 0 650 1200" className={classes.box}>
                <g>
                 <rect x="10" y="20"  width="300" height="475"></rect>
                 <text x="60" y="60">SUSTAINABILITY</text>
                 <line x1="10" y1="80" x2="310" y2="80" />
                 <ListIcon x="30" y="120" />
                 <text x="45" y="125">Sustainability produced</text>
                 <text x="45" y="145">homeware products</text>
                 <ListIcon x="30" y="170" />
                 <text x="45" y="175">Sustainable packaging</text>
                 <text x="45" y="195">solutions</text>
                 <ListIcon x="30" y="220" />
                 <text x="45" y="225">Environmental restoration</text>
                 <text x="45" y="245">projects</text>
                 <ListIcon x="30" y="270" />
                 <text x="45" y="275">Vegan luxury clothing using</text>
                 <text x="45" y="295">cactus or pineapple leaves</text>
                 <text x="45" y="315">based "leather" alternatives</text>
                 <ListIcon x="30" y="340" />
                 <text x="45" y="345">Recycling initiatives</text>
                 <ListIcon x="30" y="370" />
                 <text x="45" y="375">Memorial forests</text>
                 <text x="45" y="395">encouraging cremation</text>
                 <text x="45" y="415">& neutralization of bodies,</text>
                 <text x="45" y="435">and preservation of forest</text>
                 <text x="45" y="455">land</text>
                </g>
                <g>
                    <rect x="340" y="20" width="300" height="345" />
                    <text x="415" y="60">EDUCATION</text>
                    <line x1="340" y1="80" x2="640" y2="80" />
                    <ListIcon x="360" y="120" />
                    <text x="375" y="125">Plant-based youth programs</text>
                    <ListIcon x="360" y="155" />
                    <text x="375" y="160">Gardening initiatives in</text>
                    <text x="375" y="180">schools</text>
                    <ListIcon x="360" y="210" />
                    <text x="375" y="215">Plant-based creative content</text>
                    <text x="375" y="235">commissioned by vegan</text>
                    <text x="375" y="255">artists</text>
                    <ListIcon x="360" y="285" />
                    <text x="375" y="290">Youth literacy programs for</text>
                    <text x="375" y="310">sustainability and clean</text>
                    <text x="375" y="330">energy</text>
                </g>
                <g>
                    <rect x="10" y="550" width="300" height="600" />
                    <text x="70" y="610">AGRICULTURE</text>
                    <line x1="10" y1="630" x2="310" y2="630" />
                    <ListIcon x="30" y="670" />
                    <text x="45" y="675">Growing veganic food to</text>
                    <text x="45" y="695">regenerate soil and the</text>
                    <text x="45" y="715">environment</text>
                    <ListIcon x="30" y="745" />
                    <text x="45" y="750">Veganic community gardens,</text>
                    <text x="45" y="770">farms, and nurseries</text>
                    <ListIcon x="30" y="800" />
                    <text x="45" y="805">Food forests</text>
                    <ListIcon x="30" y="835" />
                    <text x="45" y="840">Sustainable materials</text>
                </g>
            </svg>
        </>
    )
}

export default OperationsChart