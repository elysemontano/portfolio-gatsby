import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Social from '../components/Social'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

const navigationLinks = [
    {name: "About", href: "#about" },
    {name: "Skills", href: "#skills" },
    {name: "Projects", href: "#projects" },
    {name: "Resume", href: "" },
];

const useStyles = makeStyles((theme) => ({
    footerSection: {
        height: "100%",
        background: "#72828d",
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    content: {
        height: "100%",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        color: "#e9f0f3",
        display: "flex",
        flexDirection: "column"
    },
    container: {
        height: "100%",
        paddingTop: "8vh",
        paddingBottom: "5vh",
    },
    link: {
        marginRight: 20,
        color: "#e9f0f3",
    },
}))

export default function Footer() {
    const styles = useStyles()
    return (
        <Paper className={styles.footerSection}>
            <Container className={styles.container}>
                <Grid container className={styles.content}>
                    <Grid item>
                        {navigationLinks.map((item, id) => (
                            <Link
                                className={styles.link}
                                variant="button"
                                underlne="none"
                                key={id}
                                href={item.href}>
                            {item.name}
                            </Link>
                        ))}
                    </Grid>
                    <Grid item>
                        <Social style={{color: "#e9f0f3"}}/>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}
