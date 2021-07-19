import React from 'react';
import {Paper, Box, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Link from 'next/link';
import Head from 'next/head';
import DeforestationChart from '../components/DeforestationChart';
import PopulationPredictions from '../components/PopulationPredictions';
import TokenPie from '../components/TokenPie';
import {SimpleDialog} from '../components/Dialog';
import OperationPie from '../components/OperationPie';
import TokenReleaseStep from '../components/TokenReleaseStep';
import styles from '../styles/whitepaper.module.css'

const Reference  = ({url,label} ) => {
    return (
      <>
      &nbsp;(
      <span style={{color:"#88a283",
      textDecoration: "underline"}}>
       <a
          href={url}
        >
          {label}
        </a>
      </span>)
      </>
    )
}


const useStyles = makeStyles(theme => ({
    firstPaper: {
        width: "90%",
        maxWidth: "750px",
        margin: "1.5rem auto",
        padding: "5rem",
        [theme.breakpoints.down('xs')] : {
            width: "100%",
            padding: "2rem"
        }
    },
    paper: {
        width: "90%",
        maxWidth: "750px",
        margin: "1.5rem auto",
        padding: "5rem",
        [theme.breakpoints.down('xs')] : {
            width: "100%",
            padding: "2rem"
        }
    },

    section: {
        '& h3' : {
            fontFamily: "JosefinSansBold",
            color: "#88a283",
            textAlign: "center",
            marginTop: '2rem',
        },
        '& p': {
            fontFamily: "JosefinSansLight",
            fontSize: "1rem",
            fontWeight: "500"
        },

        '& h2': {
            textAlign: "center"
        }
    },

    footer: {
        position: "relative",
        top: "4rem",
        display: "flex",
        justifyContent: "flex-end",
        fontFamily: "JosefinSansBold",
        [theme.breakpoints.down('xs')] : {
            top: "2rem"
        }
    },

    span: {
        color: "#88a283",
        textDecoration: "underline"
    },

    dt: {
        '& p': {
            marginBottom: "0.4rem"
        }
    },

    dd: {
        '& p' : {
            margin: "0 0.4rem"
        }
    },

    caption: {
        fontFamily: "JosefinSansBold",
        color: "#88a283",
        textAlign: "center"
    },

    link: {
        textDecoration: "underline",
        cursor: "pointer",
        fontSize: "0.9rem",
        color: "#88a283"
    },

    topImage: {
        width: "97%",
        height: "auto"
    },

    imageDimensions: {
            width: "95%",
            height: "auto"
    },

    logo: {
        width: "80px",
        height: "80px",
        cursor: "pointer"
    },
    footlogo:{
      width:"50%",
      margin: "0 0 0 25%",
    },
    button:{
          border: "1px solid #88a384",
      }

}))


const WhitePaper = () => {

    const classes = useStyles();
    const emails = ['username@gmail.com', 'user02@gmail.com'];
    let page = 1;
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
      };
    return (
        <>
        <Head>
         <title>White Paper | Vegan AF</title>
         <meta charSet="utf-8" />
         <link rel="shortcut icon" href="/images/veganLogo.ico" sizes="144x144"/>
         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <section className={classes.section}>
            <Paper className={classes.firstPaper}>
                <Box  display="flex" justifyContent="center">
                <img alt="whitepaper" className={classes.topImage} src="/images/vaf-cover.svg" />
                </Box>
            </Paper>


            <Paper className={classes.paper}>
                <h3>EXECUTIVE SUMMARY</h3>
                <p>
                The Vegan Africa Fund empowers community-driven ventures supporting a plant-based and regenerative Africa. Vegan AF enables global futurists to uplift Africa through the VAF impact token. There are many thousands of African-based eco-entrepreneurs, and a growing consumer interest in quality vegan products. However, existing ventures lack capital, and have competition from globally imported vegan products. Vegan AF pools capital to support the pan-African plant-based network and scale ventures, providing expansion opportunities. In exchange for capital support, Vegan AF holds equity in partnered ventures which work to have a measurable impact. As partnered operations grow, the Vegan AF network grows. The network is powered by VAF, a financial security that represents holding a stake in Vegan AF, and a stake in the plant-based future of Africa. Our mission is to make plant-based options plentiful, delicious, locally produced, and regenerative, while making the plant-based evolution accessible to the fastest-growing continent on Earth.
                 </p>
                <h3>TOKEN ECONOMICS SUMMARY</h3>
                <p>
                VAF is the Vegan Africa Fund’s impact token. Stewards of the network invest in VAF, enabling Vegan AF to strategically acquire, hold, assist, and form companies aligned with our mission. Vegan AF enables regenerative actors in the Vegan AF network to be stakeholders through the Community Development Fund. As the Vegan AF network expands, VAFs can be redeemed for products, services, experiences and vegan food from partnered operations. After the first phases of operations, early investors will be able to import plant-based products from Africa to countries around the world using VAFs. The ventures we partner with accept VAFs, and are encouraged to buy back equity in their companies and engage with the broader Vegan AF network with VAFs. VAF usage can be tied to regenerative operations, number of plant-based meals and consumers, number of vegans in Africa, and the Vegan Africa Fund’s share in the growing value of the African vegan economy.
                </p>
                <Box display="flex" justifyContent="center">
                <img alt="whitepaper" className={classes.imageDimensions} src="/images/whitepaper_2.png" />
                </Box>
                <h4 className={classes.footer}>{page++ }</h4>
            </Paper>


            <Paper className={classes.paper}>
                <h3>INTRODUCTION</h3>
                                <p>Complete ecological breakdown is the greatest threat to humanity, and destructive industrialization practices are rapidly expanding in Africa at a time when the earth is calling for us to adapt  <span className={classes.span}><a href="https://www.dropbox.com/sh/yd8l2v0u4jqptp3/AACpraYjOYWpTxAFv5H-2vrKa/1%20Global%20Assessment%20Summary%20for%20Policymakers?dl=0&preview=Summary+for+Policymakers+IPBES+Global+Assessment.pdf&subfolder_nav_tracking=1">(Diaz, Setelle, Brondizio, et al.)</a></span>. Rainforests in Congo and throughout Africa are being slashed for industrial and agricultural expansion. Animal agriculture is largely responsible for the rapid depletion of resources that could otherwise be used to end world hunger
                    <span className={classes.span}><a href="https://www.cifor.org/publications/pdf_files/OccPapers/OP-144.pdf">(Tchatchou et. al)</a></span>.
                </p>
                  <Box display="flex" justifyContent="center">
                     <DeforestationChart />
                  </Box>
                  <Box textAlign="center">
                    <h4 className={classes.span}><a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/65505/6316-drivers-deforestation-report.pdf">Causes of Deforestation in the Congo Rainforest</a></h4>
                  </Box>
                <h4 className={classes.footer}>{page++}</h4>
              </Paper>

              <Paper className={classes.paper}>
              <h3>INTRODUCTION</h3>
              <p>
                The greatest positive impact will come from massive societal shifts towards regeneration. Adopting a plant-based diet is the most impactful action an individual can take to fight climate
                change <span className={classes.span}><a href="https://www.ipcc.ch/site/assets/uploads/sites/2/2019/06/SR15_Full_Report_High_Res.pdf">(IPCC)</a></span>. Veganism
                promotes wellness for the planet and the individual,
                and a focus on veganism in Africa is critical during this growth
                period. The population of Africa is projected to nearly quadruple
                from 1.2 billion people today to over 4 billion in the next
                century <span className={classes.span}><a href="https://www.worldbank.org/en/region/afr/overview">(World Bank)</a></span>.
                That's a lot more people to feed; in fact, Africa is the fastest-growing continent. How food production increases to meet growing needs must be rooted in regeneration instead of destruction, and especially through food forests to regenerate the earth and local value-added production.
              </p>

              <Box display="flex" justifyContent="center">
                <PopulationPredictions />
              </Box>
                  <Box textAlign="center">
                  <h4 className={classes.span}><a href="https://ourworldindata.org/future-population-growth">Current Population Vs. Projected Population By Continent</a></h4>
                  </Box>
                  <h4 className={classes.footer}>{page++}</h4>
              </Paper>


              <Paper className={classes.paper}>
                <h3>INTRODUCTION</h3>
                <p>
                On a global scale, Africa is a net-importer in the food sector; aside from pan-African food-trade, the continent imported over $35 billion of food in 2019
                <Reference
                  url={"https://wits.worldbank.org/CountryProfile/en/Country/SSF/Year/LTST/TradeFlow/Import/Partner/by-country/Product/16-24_FoodProd"}
                  label={"World Bank"}
                />
                . There’s been a food trade deficit in Africa since the mid 1970s
                <Reference
                  url={"http://www.fao.org/fileadmin/templates/est/PUBLICATIONS/Books/AFRICA_STUDY_BOOK_REVISED_low_res.pdf"}
                  label={"FAO"}
                />
                . Trade data analysis shows African land has more than enough resources to feed everyone on the continent and export surplus to the rest of the world; however, there are constraints in place preventing the resources from being developed
                <Reference
                  url={"https://www.tralac.org/documents/publications/trade-data-analysis/962-africa-food-trade-overview-september-2017/file.html"}
                  label={"Tralac"}
                />
                . There is currently a lack of capital to mobilize efforts to cultivate and process these resources.
                </p>

                <p>
                Africa is the most profitable region in the world for investors. Through the past 2 decades, Africa has had one of the highest rates of return on inflows of Foreign Direct Investment
                <Reference
                  url={"https://www.un.org/africarenewal/web-features/investing-africa-sound-business-and-sustainable-corporate-strategy"}
                  label={"UN"}
                />
                . Despite potential for returns, FDI to Africa fell by 16% in 2020. FDI must significantly increase to reach Sustainable Development Goals; the United Nations shows for SDGs to be reached, an additional $400 billion per year until 2030 of impact investing is needed
                <Reference
                  url={"https://unctad.org/system/files/official-document/wir2021_en.pdf"}
                  label={"UN"}
                />
                <Reference
                  url={"https://www.iisd.org/system/files/publications/impact-tokens.pdf"}
                  label={"IISD"}
                />.
                </p>
                <p>
                The Vegan Africa Fund enables the future where Africa becomes a net-exporter of plant-based food products and vegan luxury items and leader in regenerative systems. Vegan AF grows wealth on the continent, especially through local value-added processing and strategic resource management
                <Reference
                  url={"https://www.tralac.org/documents/publications/trade-data-analysis/962-africa-food-trade-overview-september-2017/file.html"}
                  label={"Tralac"}
                />
                . Through regenerative processes, outputs can increase while measurable impacts like number of plant-based individuals, the Vegan AF network usage, and carbon sequestration can be optimized. Vegan AF supports businesses adding value to plant-based resources close to where the resources are grown, and selling these on both a local and international scale. Vegan AF is filling the gap between impact investing in Africa and plant-based impact investing, supporting the growing vegan network and a plant-based economy in Africa.
                </p>
                <h4 className={classes.footer}>{page++}</h4>
              </Paper>

            <Paper className={classes.paper}>
              <h3>OPERATIONS STRATEGY</h3>
              <p>
              As the vegan economy grows in Africa, Vegan AF aims to be at the forefront. Vegan AF is fundraising to support the plant-based evolution. Funds raised will go towards the following activities: Strategic Acquisitions, Social Impact Initiatives, Development of Shared Resources, Operations, Marketing and Legal. Vegan AF will acquire equity in the ventures we invest in, making up the Vegan AF portfolio.
              </p>
              <Box display="flex" justifyContent="center">
                 <OperationPie />
              </Box>
              <h4 className={classes.caption}>Vegan AF Funds Distribution</h4>

              <p>
              The Partnerships and Strategic Acquisitions Fund consists of 75% of the Vegan Africa Fund. The fund supports high-growth-potential operations which are regenerative and either plant-based in nature or founded by plant-based entrepreneurs. This includes ventures such as vegan protein and packaged food production, plant-based restaurants, organic and veganic agriculture, reforestation and food forests, production of plant-based leather and materials alternatives, renewable energy, sustainable clothing, and innovative technologies. Through each phase, Vegan AF seeks to acquire equity in a growing number of ventures to diversify our portfolio, encouraging ventures to buy back equity as they grow and profit. Equity buyback funds will go back into the Vegan AF funds pool to support further investments in Vegan AF ventures.
              </p>

              <h4 className={classes.footer}>{page++}</h4>
            </Paper>

            <Paper className={classes.paper}>
              <h3>OPERATIONS STRATEGY</h3>
              <p>
              The Social Impact Fund consists of 10% of the Vegan Africa Fund, as we are committed to increasing our social impact during every phase of our operations. Projects that we support for social impact include vegan meal distribution programs, animal advocacy and sanctuary initiatives, environmental restoration, research programs, ocean and beach clean-ups, and tree-planting initiatives.
              </p>
              <p>
              The Resources Fund is 5% of the Vegan Africa Fund, and supports the development of shared resources for the Vegan AF network. The first of these resources includes technical resources such as the VAF wallet and point-of-sale system to enable the ventures we partner with to support VAF payments. Just as the VAF is a tokenized share of the Vegan AF network, if desired, we will help create tokenized shares for each venture we partner with, and by phase 5 of the Vegan Africa Fund operations, we will create an index of sustainable assets in Africa that represents the Vegan AF portfolio of aligned, sustainable companies.
              </p>
              <p>
              The Vegan AF Operations budget is 5% of the total fund. Operations include overhead costs for web and digital services, subscription services, contract work, blockchain development services, and salaries for Vegan AF team members, where the team shall expand to fit the budget as the network grows and as fundraising rounds are successful. The marketing budget is 2.5% of the total fund. This includes advertising for the Vegan Africa Fund to enhance the Vegan AF visibility and grow the investor network, sponsoring vegan sports teams or events like VegFest, and outsourcing marketing expertise to help grow the Vegan AF network. The remaining 2.5% of the fund is reserved for Legal fees, to make sure our operations are compliant, that we have all appropriate permits, and to form and file deeds with partnered parties.
              </p>
              <h4 className={classes.footer}>{page++}</h4>
            </Paper>








              <Paper className={classes.paper}>
                  <h3>TOKEN ECONOMICS</h3>
                  <p>
                  VAF is the capped supply impact token of the Vegan AF network. VAFs are created during the network’s genesis transaction, at a fixed amount of 1 trillion VAF. Following the network’s inception, there are no mining activities associated with the Vegan AF network, which keeps the energy usage low. Vegan AF is committed to operating carbon net-negative, which is why we chose to use the energy efficient Fantom Opera blockchain, one of the most eco-friendly networks that exists
                  <Reference
                    url={"https://twitter.com/FantomFDN/status/1395089021144023043?s=20"}
                    label={"Fantom"}
                  />.
                  </p>
                  <p>Vegan AF invests in plant-based and regenerative African companies, supported by the stewardship network. The global network of impact investors holding VAFs provides critical expansion and start-up capital to aligned ventures across Africa. In exchange for capital from Vegan AF, the ventures we partner with agree to accept VAFs as currency in their operations. As the network grows, the available locations where VAF holders can redeem VAFs grows.
                  </p>
                  <p>
                  Vegan AF partners agree to accept VAFs from their customers once the VAF Wallet or appropriate integrations are developed. VAFs can be traded with participants in the Vegan AF network, where products offered may be food products, vegan leather and other materials, sustainably-produced products and services, and more. For companies Vegan AF supports, a portion of equity buy-backs will be encouraged in VAF. Vegan AF will incentivize engagement in veganism through VAF distribution at educational events, through digital platforms, and to businesses or individuals we partner with as part of the Community Development Fund.  This model will increase the VAF network usage, allowing the Vegan AF network to grow.
                  </p>
                  <p>
                  When Vegan AF receives a return on investments, or when VAFs are sold, funds cycle into the Vegan AF funds pool. Vegan AF shall grow its market cap through investor funding and through value creation in the plant-based goods and services markets. This strategy allows us to build a circular renewable economy instead of relying solely on VAF sales to support our efforts.
                  </p>



                  <h4 className={classes.footer}>{page++}</h4>
            </Paper>

            <Paper className={classes.paper}>
                <h3>TOKEN DISTRIBUTION</h3>
                <Box display="flex" justifyContent="center">
                   <TokenPie />
                </Box>
                <dl>
                    <dt className={classes.dt}>
                        <p>Seed sale:</p>
                    </dt>
                    <dd className={classes.dd}>
                        <Box display="flex">
                            <p>-</p>
                            <p>VAFs sold to strategic early partners before public sale on exchanges. These are sold at a discount, and cannot be liquidated until phase 3 of operations. 5% of total supply</p>
                        </Box>
                    </dd>
                    <dt className={classes.dt}>
                        <p>Public sale:</p>
                    </dt>
                    <dd className={classes.dd}>
                        <Box display="flex">
                            <p>-</p>
                            <p>Public sale VAFs are unlocked in phases and sold to raise funds for Vegan AF to scale and expand fund operations, 80% of total supply</p>
                        </Box>
                    </dd>
                    <dt className={classes.dt}>
                        <p>Community Development Fund (CDF): </p>
                    </dt>
                    <dd className={classes.dd}>
                        <Box display="flex">
                            <p>-</p>
                            <p>For every 10 VAFs purchased, 1 VAF will unlock in the CDF</p>
                        </Box>
                    </dd>
                    <dd className={classes.dd}>
                        <Box display="flex">
                            <p>-</p>
                            <p>VAFs distributed to help the Vegan AF network grow, 8.5% of total supply</p>
                        </Box>
                    </dd>
                    <dt className={classes.dt}>
                        <p>Liquidity pool:</p>
                    </dt>
                    <dd className={classes.dd}>
                        <Box display="flex">
                            <p>-</p>
                            <p>A portion of VAFs are reserved to sell if there is a higher demand than available tokens during the current phase, 4.25% of total supply</p>
                        </Box>
                    </dd>
                    <dt className={classes.dt}>
                        <p>Development team:</p>
                    </dt>
                    <dd className={classes.dd}>
                        <Box display="flex">
                            <p>-</p>
                            <p>A portion of VAF tokens is unlocked every quarter and distributed to the Vegan AF development team, 2.25% of total VAF supply</p>
                        </Box>
                    </dd>

                </dl>
                <h4 className={classes.footer}>{page++}</h4>
          </Paper>



            <Paper className={classes.paper}>
                <h3>ROADMAP & TOKEN RELEASE SCHEDULE</h3>
                <p>
The token release schedule involves minting 1 trillion VAF tokens during the network’s genesis transaction. These will be divided into 5 separate holding wallets respective to the 5 functions: seed sale, public sale, liquidity, development team, and community development fund. VAFs will be unlocked given the below schedule, where at the time of unlocking they are sold (seed sale, public sale and liquidity) or allocated to the team or community.
                </p>
                <Box display="flex" justifyContent="center">
                   <TokenReleaseStep />
                </Box>
<h4 className={classes.caption}>VAF 4-Year Token Unlocking Schedule</h4>
                <h4 className={classes.footer}>{page++}</h4>
          </Paper>



            <Paper className={classes.paper}>

            <h3>INVEST IN VEGAN AF</h3><p>
Investing in the VAF token is supporting the vegan future in Africa. As Vegan AF expands, we seek to work with aligned investors and partners who can co-create a healthy, abundant, compassionate, equitable vegan future in Africa. Click the below button to get involved today.
</p><br/>
    <Button variant="contained" className={styles.button} onClick={handleClickOpen}>
        Get In Touch
    </Button>
    <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    <img alt="vegan" className={classes.footlogo} src="/images/veganTextLogo.png" />


        </Paper>




        </section>
        </>
    )
}

export default WhitePaper
