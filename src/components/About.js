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
                I am a web development instructor and software developer with experience writing and teaching full stack applications in Ruby on Rails and React, utilizing Javascript, HTML and CSS with an eagerness to continue learning new technologies and stacks. I have a passion to teach and write web applications utilizing efficient collaboration and industry best practices. With a background of six years in live sound engineering, I really enjoyed troubleshooting, thinking outside the box, and working creatively and collaboratively to solve problems and produce a high quality standard. I love that teaching and software development encompasses all of those things that I loved in live sound, using problem-solving, critical thinking, and creativity to bring the best to both projects and the classroom. 
                </Typography>
                <Typography>
                In college I was recognized as an outstanding student and have kept the same strong work ethic with me wherever I go, along with the desire and eagerness to learn. I have always grown from challenges and show determination to come to solutions. While working as a sound engineer, I implemented many new technologies that took patience and determination to troubleshoot and solve problems. I find that building applications also takes that same need for patience, determination and desire to learn, which I have used in the process of writing applications.
                </Typography>
                </Grid>
            </Grid>
            </Container>
        </Paper>
    )
}
