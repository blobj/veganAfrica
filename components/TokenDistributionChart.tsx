import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    box: {
        backgroundColor: "#88a283",
        "& text": {
            fontSize: "20px"
        }
    }
}))

const Line = (props: any) => {
    const {x, y} = props
    return (
    <>
    <line x1="0" y1={y} x2={x} y2={y}
    stroke="black" strokeWidth="3" fill="rgb(121,0,121)"/>
    <circle cx={x} cy={y} r="5" />
    </>
)}


const TokenDistributionChart = () => {
    const classes = useStyles();
    return (
        <>
            <svg viewBox="-300 0 600 1300" className={classes.box}>
                <g>
                    <circle cx="0" cy="50" r="5" />
                    <line x1="0" y1="50" x2="0" y2="1250"
                    stroke="black" strokeWidth="3" fill="rgb(121,0,121)" />
                    <circle cx="0" cy="1250" r="5" />
                </g>
                <g>
                    <text x="10" y="100">Vegan AF Formation</text>
                    <Line x="200" y="110" />
                    <text x="75" y="135">Feb 2021</text>
                    <path d="M 200 80 A50,30 0 0,1 215,100 A60,60 0 0,1 240,50"
                    stroke="#48644c" strokeWidth="3" fill="none"/>
                </g>
                <g>
                    <text x="-180" y="160">Begin Accepting</text>
                    <text x="-160" y="185">Donations</text>
                    <Line x="-200" y="200" /> 
                    <text x="-155" y="230">Apr 2021</text>
                    <path d="M -40 170 A50,30 0 0,1 -30,190 A60,60 0 0, 1 -10,150"
                    stroke="#48644c" strokeWidth="3" fill="none"/> 
                </g>
                <g>
                    <text x="10" y="260">Token Presale Launch</text>
                    <Line x="200" y="280"/>
                    <path d="M 210 250 A50,30 0 0,1 225,270 A60,60 0 0,1 250,220"
                    stroke="#48644c" strokeWidth="3" fill="none"/>
                    <path />
                    <text x="70" y="305">June 2, 2021</text>
                </g>
                <g>
                    <text x="-190" y="340">Public sale unlocks</text>
                    <text x="-190" y="365">phase 1, expanding</text>
                    <text x="-150" y="390">partnerships</text>
                    <Line x="-200" y="400" />
                    <text x="-150" y="425">Q3 2021</text>
                </g>
                <g>
                    <text x="20" y="440">Public sale unlocks</text>
                    <text x="10" y="465">phase 2, spread Vegan</text>
                    <text x="10" y="490">Activities to 5 countries</text>
                    <Line x="200" y="500" />
                    <text x="70" y="525">Q4 2021</text>
                </g>
                <g>
                    <text x="-200" y="560">Public sale unlocks</text>
                    <text x="-200" y="585">phase 3, continue</text>
                    <text x="-200" y="610">expanding Vegan AF</text>
                    <text x="-200" y="635">through the continent</text>
                    <Line x="-200" y="650" />
                    <text x="-150" y="675">Q1 2022</text>
                </g>
                <g>
                    <text x="20" y="690">Public slae unlocks</text>
                    <text x="20" y="715">phase 4, platform</text>
                    <text x="20" y="740">integration for</text>
                    <text x="20" y="765">businesses to accept</text>
                    <text x="20" y="790">VAFs</text>
                    <Line x="200" y="800" />
                    <text x="70" y="825">Q2 2022</text>
                </g>
                <g>
                    <text x="-190" y="865">50% of all VAF</text>
                    <text x="-150" y="890">unlocked</text>
                    <Line x="-200" y="900" />
                    <text x="-150" y="925">Q3 2022</text>
                </g>
                <g>
                    <text x="20" y="990">75% of all VAF unlocked,</text>
                    <text x="20" y="1015">DAO begins to take over</text>
                    <text x="20" y="1040">key decision making</text>
                    <Line x="200" y="1050" />
                    <text x="70" y="1075">Q3 2023</text>
                </g>
                <g>
                    <text x="-190" y="1115">100% of public sale</text>
                    <text x="-190" y="1140">tokens unlocked</text>
                    <Line x="-200" y="1150" />
                    <text x="-150" y="1175">Q2 2025</text>
                </g>
            </svg>
        </>
    )
}

export default TokenDistributionChart