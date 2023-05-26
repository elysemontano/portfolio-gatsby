import React from 'react'
import {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkIcon from '@material-ui/icons/Link';
import Grow from '@material-ui/core/Grow'
import Button from '@material-ui/core/Button'
import Image from "../components/Image"

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
        height: "100%",
        width: "90%",
    },
    description: {
        height: "100%",
        width: "90%",
        position: 'relative',
        overflow: "hidden",
        pointerEvents: "none",
    },
    hover: {
        position: 'absolute',
        top: .01, 
        left: '50%', 
        transform: 'translateX(-50%)',
        width: "100%",
        height: "100%",
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
                                            <Image fileName={item.imageURL} className={styles.media} style={{ width: "90%", height: "100%"}}/>
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
                                    : <Image fileName={item.imageURL} className={styles.media} style={{ width: "90%", height: "100%"}}/>

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
        imageURL: "worshipteam.png",
        links: [
            {icon: GitHubIcon, url: "https://github.com/elysemontano/team-organizer"},
            {icon: LinkIcon, url: "https://chasing-out-foxes-organizer.herokuapp.com/"}
        ]
    },
    {
        name: "Apartment App",
        description: "Apartment finder built with React in Rails",
        imageURL: "apartmentapp.png",
        links: [
            {icon: GitHubIcon, url: "https://github.com/elysemontano/apartment-app-functional"},
            // {icon: LinkIcon, url: "https://safe-brook-46727.herokuapp.com/"},
        ]
    },
    {
        name: "Reunion App",
        description: "Event organizer built in React in Rails",
        imageURL: "reunion.png",
        links: [
            {icon: GitHubIcon, url: "https://github.com/reunion-cap/reunion-app"},
            // {icon: LinkIcon, url: "https://safe-brook-46727.herokuapp.com/"}
        ]
    },
    {
        name: "Mortgage Calculator",
        description: "Mobile app to calculate monthly mortgage payments",
        imageURL: "mortgagecalculator.png",
        links: [
            {icon: GitHubIcon, url: "https://github.com/elysemontano/mortgage_calculator"},
        ]
    }
]
const moreProjects = [
    {
        name: "Chasing Out Foxes Website",
        description: "Website for local Christian Band using bootstrap studio",
        imageURL: "chasingoutfoxes.png",
        links: [
            {icon: LinkIcon, url: "https://chasingoutfoxes.com/",}
        ]
    },
    {
        name: "Measurement Converter",
        description: "Measurement Converter built with PHP, HTML and CSS",
        imageURL: "measurementconverter.png",
        links: [
            {icon: GitHubIcon, url: "https://github.com/elysemontano/converter_app"},
        ]
    },
    {
        name: "Tic Tac Toe",
        description: "Tic Tac Toe game built with React",
        imageURL: "tictactoe.png",
        links: [
            {icon: GitHubIcon, url: "https://github.com/learn-academy-2021-alpha/tic-tac-toe-tic-tac-toe-allen-elyse"},
        ]
    }, 
    {
        name: "Pig Latin Translater",
        description: "Translate any phrase into pig latin, built with React",
        imageURL: "piglatin.png",
        links: [
            {icon: GitHubIcon, url: "https://github.com/learn-academy-2021-alpha/pig-latin-elyse-lex"},
        ]
    },  
]
