import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    aboutSection: {
        height: "100%",
        background: "#ede7f6",
        backgroundSize: "cover",
        backgroundPosition: "center",
        scrollBehavior: "smooth",
        scrollPadding: "90px"
    },
    content: {
        height: "100%",
        justifyContent: "center",
        textAlign: "left",
        color: "#616161"
    },
    container: {
        height: "100%",
        paddingTop: "5vh",
        paddingBottom: "10vh",
    },

}))

export default function About() {
    const styles = useStyles()
    return (
        <Paper className={styles.aboutSection} id="about">
        <Container className={styles.container} maxWidth="md">
            <Grid container className={styles.content} alignItems="center">
                <Grid item xs={10} md={12}> 
                <Typography component="h1" variant="h2" style={{textAlign:'center'}} gutterBottom>About</Typography>
                <Typography gutterBottom>
                    I am a software developer with a passion for writing software and web applications, with readable code for efficient collaboration and a user friendly experience.  With a six year background in live sound engineering, I am no stranger to troubleshooting, thinking outside the box, and working creatively and collaboratively to solve problems and produce a high quality standard.  I am always looking to expand myself, further build my skills and bring the latest and most up to date approaches to any project.
                </Typography>
                <Typography>
                    My journey into coding started last year when I decided to continue my education beyond Media Communications by joining several developer training websites.  Shortly thereafter I enrolled in LEARN Academy and began strengthening my skills as a developer utilizing the most up to date and commonly used languages, frameworks and other developer tools.
                </Typography>
                </Grid>
            </Grid>
            </Container>
        </Paper>
    )
}
