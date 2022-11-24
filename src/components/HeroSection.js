import React from 'react'
import {useState} from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Slide from '@material-ui/core/Slide'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles((theme) => ({
    heroSection: {
        height: "90vh",
        background: "linear-gradient(358deg, #c4b7cf, #4d365c)",
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    content: {
        height: "100%",
        justifyContent: "center",
        textAlign: "center",
        color: "#e9f0f3",
    },
    container: {
        height: "100%",
    },
    profilePic: {
        width: "18%",
        borderRadius: "100%",
        border: "solid white 3px"
    }
}))

export default function HeroSection() {
    const styles = useStyles()
    const [checked] = useState(true);

    return (
            <Paper className={styles.heroSection}>
                <Container className={styles.container} maxWidth="md">
                    <Grid className={styles.content} container alignItems="center">
                        <Grid item>
                            <Fade in={checked} timeout={2000}>
                                <div>
                                    <Slide direction="left" in={checked} timeout={800}>
                                            <Typography 
                                                component="h1" 
                                                variant="h2">
                                                Elyse Montano
                                            </Typography>
                                    </Slide>
                                </div>
                            </Fade>
                            <Fade in={checked} timeout={2000}>
                                <div>
                                    <Slide direction="right" in={checked} timeout={800}>                                
                                        <Typography variant="h5">Full Stack Developer and Instructor</Typography>
                                    </Slide>
                                </div>
                            </Fade>
                            <Fade in={checked} timeout={2000}>
                                <div>                               
                                    <Slide direction="up" in={checked} timeout={700}>                                                           
                                        <Box my={5}>
                                        <StaticImage 
                                                src="../images/elyse-profile-pic.png" 
                                                alt="Elyse Montano"
                                                className={styles.profilePic} />
                                        </Box>
                                    </Slide>
                                </div>
                            </Fade>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
    )
}
