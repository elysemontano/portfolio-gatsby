import React from 'react'
import Image from "../components/Image"
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'


const useStyles = makeStyles((theme) => ({
    skillsSection: {
        height: "100%",
        background: "#668b9f",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingBottom: "50px"
    },
    content: {
        height: "100%",
        justifyContent: "center",
        textAlign: "center",
        color: "#e9f0f3"
    },
    container: {
        height: "100%",
        paddingTop: "8vh",
        paddingBottom: "5vh",
    },
    skillContainer: {
        background: "#e9f0f3",
        color: "#658491",
        display: "flex",
        flexDirection: "column",
        wrap: "nowrap"
    },
    skillBlock: {
        background: "#e9f0f3",
        color: "#658491",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: 120,
        boxShadow: "none !important"
    },
    media: {
        height: 50,
        width: 50,
    },
    flex: {
        display: "flex",
        justifyContent: "center"
    }
}))

function SkillCard({data}) {
    const styles = useStyles()

    return (
        <div className={styles.flex}> 
        <Grid container style={{justifyContent: "space-evenly"}}>
        {data.map((item, index) => {
            return (
                    <Grid item xs={4} md={2} style={{display: "flex", justifyContent: "center"}} key={index}>
                        <Card className={styles.skillBlock}>
                            <CardContent>
                                <Image fileName={item.imageURL} className={styles.media} style={{ width: "50px", height: "50px" }}/>
                                <Typography>{item.name}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>        
            )
        })}
        </Grid>
      </div> 
    )
}

const Skills = () => {
    const styles = useStyles()
    return (
            <Paper className={styles.skillsSection} id="skills">
                <Container className={styles.container} maxWidth="md">
                    <Grid container className={styles.content} alignItems="center" spacing={2}>
                        <Grid item xs={12}> 
                            <Typography component="h1" variant="h2" style={{textAlign:'center'}}>Skills</Typography>
                        </Grid>
                        
                        <Grid item xs={10} md={12}>
                            <Paper className={styles.skillContainer}>
                                <Typography variant="h5">Languages</Typography>
                                <SkillCard data={languages}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={10} md={6}>
                            <Paper className={styles.skillContainer}>
                                <Typography variant="h5">Frameworks</Typography>
                                <SkillCard data={frameworks}/>
                            </Paper>
                        </Grid>
                        <Grid item xs={10} md={6}>
                            <Paper className={styles.skillContainer}>
                                <Typography variant="h5">Other</Typography>
                                <SkillCard data={other}/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
            
    )
}


export default Skills

const languages = [
    {name: "CSS", imageURL: "CSS Icon.png" },
    {name: "Javascript", imageURL: "JS Icon.png" },
    {name: "HTML", imageURL: "HTML Icon.png" },
    {name: "Ruby", imageURL: "Ruby Icon.png" },
    {name: "PHP", imageURL: "php logo.png" },
    {name: "SQL", imageURL: "sql Icon.png" },
];

const frameworks = [
    {name: "React", imageURL: "React Icon.png" },
    {name: "Rails", imageURL: "rails Icon.png"},
]

const other = [
    {name: "Jest", imageURL: "Jest Icon.png"},
    {name: "Postgres", imageURL: "postgres Icon.png"},
    {name: "Git", imageURL: "git Icon.png"},
]
