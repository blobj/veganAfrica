import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2'


const DeforestationChart = () => {
    const [chartData, setChartData] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["June 2, 2021",	"Phase 2",	"Phase 3",	"Phase 4",	"Phase 5",	"Phase 6",	"Phase 7",	"Phase 8",	"Phase 9",	"Phase 10",	"Phase 11",	"Phase 12",	"Phase 13",	"Phase 14",	"Phase 15",	"Phase 16",	"Phase 17"],
            datasets: [
              {
                  label: "Presale",
                  fill: true,
                  data: [0.050,	0.05,	0.05,	0.05,	0.05,	0.05,	0.05,	0.05,	0.05,	0.05,	0.05,	0.05,	0.05,	0.05,	0.05,	0.05,	0.05],

                    borderColor: "#F1932D",
                    backgroundColor: [
                      "#F7CB45"

                    ]
              },
              {
                  label: "Liquidity",
                  fill: true,
                  data: [0.0025,	0.0072,	0.0107,	0.0138,	0.0167,	0.0193,	0.0218,	0.0242,	0.0265,	0.0287,	0.0308,	0.0329,	0.0349,	0.0369,	0.0388,	0.0407,	0.0425],
                  borderColor: "#4EB265",
                    backgroundColor: [
                      "#90C987"
                    ]
              },
              {
                  label: "Community",
                  fill: true,
                  data: [0.005,	0.014,	0.021,	0.028,	0.033,	0.039,	0.044,	0.048,	0.053,	0.057,	0.062,	0.066,	0.070,	0.074,	0.078,	0.081,	0.085],

                  borderColor: "#EE6677",
                  backgroundColor: [
                    "#FFAABB"
                  ]
              },
              {
                  label: "Team",
                  fill: true,
                  data: [0.0013,	0.0026,	0.0040,	0.0053,	0.0066,	0.0079,	0.0093,	0.0106,	0.0119,	0.0132,	0.0146,	0.0159,	0.0172,	0.0185,	0.0199,	0.0212,	0.0225],
                  borderColor: "#6195CF",
                backgroundColor: [
                  "#7BAFDE"
                ]


              },
              {
                  label: "Public Sale",
                  fill: true,
                  data: [0.000,	0.093,	0.164,	0.227,	0.284,	0.337,	0.387,	0.434,	0.480,	0.524,	0.567,	0.608,	0.648,	0.687,	0.726,	0.763,	0.800],
                  borderColor: "#882E72",
                  backgroundColor: [
                    "#9D7DB2"

                  ]

              },

            ]
        })
    }, [])
    return (
        <>
        <Line
        type="Step"
        height={250}
        data = {chartData}
        options={{
          indexAxis: 'x',
            scales: {
                x: {
                    display: true,
                    stacked: true,
                    title: {
                        display: false,
                        text: 'Population',
                        color: "#000",
                        font: {
                            weight: 700,
                            size: 13
                        }
                    }
                },
                y: {
                    display: true,
                    stacked: true,
                    title: {
                        display: true,
                        text: 'VAFs Unlocked in Trillions',
                        color: "#000",
                        font: {
                            weight: 700,
                            size: 13
                        }
                    },
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }}/>
        </>
    )
}

export default DeforestationChart;
