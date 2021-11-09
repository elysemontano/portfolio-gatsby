import React from 'react'
import {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkIcon from '@material-ui/icons/Link';
import Grow from '@material-ui/core/Grow'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() => ({
    projectsSection: {
        height: "100%",
        background: "linear-gradient(358deg, #668b9f, #e9f0f3)",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    content: {
        height: "100%",
        justifyContent: "center",
        textAlign: "center", 
        color: "#616161",
    },
    container: {
        height: "100%",
        paddingTop: "8vh",
        paddingBottom: "10vh",
    },
    flex: {
        display: "flex",
    },
    projectBlock: {
        background: "#54707f",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        margin: "2vh",
    },
    card: {
        background: "#54707f",
        color: "#e9f0f3",
        boxShadow: "none",
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    button: {
        height: 60,
        width: 200,
        background: "#54707f",
        color: "#e9f0f3",
        borderRadius: "25px",
        border: "2px solid #54707f",
        marginTop: "2vh"
    },
    media: {
        height: 200,
        width: "100%",
    },
    description: {
        height: 200,
        width: "100%",
        position: 'relative',
        overflow: "hidden",
        pointerEvents: "none",
    },
    hover: {
        position: 'absolute',
        top: .01, 
        left: '50%', 
        transform: 'translateX(-50%)',
        width: "101%",
        height: 200,
        backgroundColor: "rgba(84,112,126,0.9)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    icon: {
        display: "flex",
        justifyContent: "center",
        pointerEvents: "auto",
    }
}))

function ProjectCard({data}) {
    const styles = useStyles()
    const [activeImage, setActiveImage]=useState(-1)
    const [checked] = useState(true);

    const showDescription = (index)=>{
        setActiveImage(index);
   }
   
   const hideDescription=()=>{
          setActiveImage(-1)
   }

    return (   
    <div className={styles.flex}>
        <Grid container style={{justifyContent: "space-evenly"}}>
        
        {data.map((item, index) => {
            return (
                <Grid item xs={9} md={3} style={{display: "flex", justifyContent: "center"}} key={index}>
            <Grow in={checked} style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}> 
                <div 
                    onMouseEnter={()=>showDescription(index)} 
                    onFocus={()=>showDescription(index)}
                    onMouseLeave={()=>hideDescription(-1)} 
                    onBlur={()=>hideDescription(-1)}
                    size="small" color="secondary" aria-label="add" 
                    className={styles.projectBlock}>
                    
                        <Card className={styles.card} >
                            <CardContent className={styles.cardContent}>
                                <Typography variant="h5" style={{paddingBottom: "20px"}}>{item.name}</Typography>
                                    {activeImage === index ? 
                                        <div className={styles.description}>
                                            <CardMedia image={item.imageURL} className={styles.media}/>
                                            <div className={styles.hover}>
                                                <Typography variant="body1">{item.description}</Typography>
                                                <div className={styles.icon}>
                                                {item.links.map((link, index) => {
                                                    return (                             
                                                            <Link href={link.url} target="_blank" key={index}>
                                                                <IconButton style={{ color: "#e9f0f3" }}>
                                                                    <link.icon />
                                                                </IconButton>
                                                            </Link>           
                                                    )
                                                })}
                                                </div>
                                            </div>
                                        </div> 
                                    : <CardMedia image={item.imageURL} className={styles.media}/>
                                    }
                            </CardContent>
                        </Card>
                    
                </div>
            </Grow>
        </Grid>
            )
        })}
        </Grid>
    </div>  
    )
}


export default function Projects() {
    const styles = useStyles()
    const [show, setShow] = useState(false);

    const handleChange = () => {
        setShow(prev => !prev)
    }

    return (
        <Paper className={styles.projectsSection} id="projects">
            <Container className={styles.container}>
                <Grid container className={styles.content}>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h2" style={{textAlign:'center', paddingBottom: '4vh'}}>Projects</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ProjectCard data={featuredProjects}/>
                    </Grid>
                        {show && 
                            <Grid item xs={12}>
                                <ProjectCard data={moreProjects}/>
                                <Button className={styles.button} onClick={handleChange}>Hide Extra Projects</Button>
                            </Grid>}
                        {!show &&
                            <Button className={styles.button} onClick={handleChange}>Show All Projects</Button>
                        }           
                </Grid>
            </Container>
        </Paper>
    )
}

const featuredProjects = [
    {
        name: "Team Organizer",
        description: "Built with React in Rails to organize team using multiple search functions",
        imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLV6Gocf4voghgSFsve3IzkGJmZXrr-949SqWfXie5W_QGxtvuBDTfgEPH37DmFoegA4OaEoKQ7U1JnyDGPlT_uwkLuZ6MhRF2_9kZNOHE-hjE7wQLxLPuPueFP3nb7f0mMdKp3H3CZy22VHi07NFYTV=w1024-h768-no?authuser=0",
        links: [
            {icon: GitHubIcon, url: "https://github.com/elysemontano/team-organizer"},
            {icon: LinkIcon, url: "https://chasing-out-foxes-organizer.herokuapp.com/"}
        ]
    },
    {
        name: "Reunion App",
        description: "Event organizer built in React in Rails",
        imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLUiVeuRADYimXRrH0LcdQRlETZH9QIfx-fAHmlStQqj7NBjb2OFeBRkv7RJ2hWwvPNIInOnda37-V4Du9UWGY2TXbMHMblzmfsxoZ2WrUjMWPyTbPH_C4YKXCEGepHZyu0ZlR4c3cjU-SzoND_tNsfH=w1024-h768-no?authuser=0",
        links: [
            {icon: GitHubIcon, url: "https://github.com/reunion-cap/reunion-app"},
            {icon: LinkIcon, url: "https://safe-brook-46727.herokuapp.com/"}
        ]
    },
    {
        name: "Chasing Out Foxes Website",
        description: "Website for local Christian Band using bootstrap studio",
        imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLUunb4RZ8QRYiSyeBdKQlOe5QJaHEn_i72bfRkwc-D-T6I3RmUMq9QgltXDJWQbQuWZ2MnUcwIJ9j1gQlg5eVC_BqLLJmhguw4_rkxYygJH4otvvnbLpMC-pgFRn-qUKrbPGXSbi8rIIMVSIXNp3Nlv=w1024-h768-no?authuser=0",
        links: [
            {icon: LinkIcon, url: "https://chasingoutfoxes.com/",}
        ]
    },
    {
        name: "Mortgage Calculator",
        description: "Mobile app to calculate monthly mortgage payments",
        imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLW32BFvxPjKwCFpCoKkyHy1zLZF8Xu1VkvFyfcScP4z1DjRI00AcY-mH7SHu69Gzvk-WT6j1p71ozGZQ0VR3NPVAgJyKmY4cOa4AaAJUcaGi7EpAbh4xfSDtdcY-yEMWAIXFpEVZAfXm7tNKUZIygtH=w1024-h768-no?authuser=0",
        links: [
            {icon: GitHubIcon, url: "https://github.com/elysemontano/mortgage_calculator"},
        ]
    }
]
const moreProjects = [
    {
        name: "Measurement Converter",
        description: "Measurement Converter built with PHP, HTML and CSS",
        imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLU5zS_G87q-xJhq6uJepXgTojwI5lkW1Rdz7TsIZIfcthM5X34HHovveBeracKvM01Qq7yvy_tnPl1Vjnz8SlI3LRBSc_ioEIynCrzUdGvT9Dw8u8bF9LbSa1_9vPvKNJcVdxXfZCVicfe28Bp0aCSN=w1024-h768-no?authuser=0",
        links: [
            {icon: GitHubIcon, url: "https://github.com/elysemontano/converter_app"},
        ]
    },
    {
        name: "Apartment App",
        description: "Apartment finder built with React in Rails",
        imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLXBfA55FEChjv5obvt8HIEJ6QXJnK_30oFh_ETnLKjOB-g5p_W-5e5Cvtl5aHUrFHIIS92hXHIH5rgJDc1k4tuDtCLrEDTPycDDsWQtLo5Oslo_NnSfKggadO0Zo4r-GivzR7Qf_BWDXX5Qa5MEoyYv=w1024-h768-no?authuser=0",
        links: [
            {icon: GitHubIcon, url: "https://github.com/elysemontano/apartment-app-elysemontano",}
        ]
    },
    {
        name: "Tic Tac Toe",
        description: "Tic Tac Toe game built with React",
        imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLWrXGYP_yNOmqh_i8_Q65x7LeEbNMw5mnuhfy7yIkfWf6MjOhaWvIS803G2nK4g0JdwRQU8FsfdwNC0bmvWG_NTaQ-DGNzNgH2cUU9rqRzCvQjxUi-zqiY27uei9DBnnRMBuKtZNbX89G8tGxIO6Ftf=w1024-h768-no?authuser=0",
        links: [
            {icon: GitHubIcon, url: "https://github.com/learn-academy-2021-alpha/tic-tac-toe-tic-tac-toe-allen-elyse"},
        ]
    }, 
    {
        name: "Pig Latin Translater",
        description: "Translate any phrase into pig latin, built with React",
        imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLUgKCnmMJYNFS7MVOlMqjQcjefHltWLT-dr-qcFQK3QivhIcktKS-7Fyp1L2n14be45U5nZv54oVJYeEw2zH446cSs-0BdkTR1xAyk8FVIGJbpK9UEpsCZnbxfDMRqgiA_wcI1_Izu043CoDDlDYF6E=w1024-h768-no?authuser=00",
        links: [
            {icon: GitHubIcon, url: "https://github.com/learn-academy-2021-alpha/pig-latin-elyse-lex"},
        ]
    },  
]
