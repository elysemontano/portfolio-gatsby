import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {useState} from 'react'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() => ({
    contactSection: {
        height: "100%",
        background: "#e9f0f3",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    content: {
        height: "100%",
        justifyContent: "center",
        textAlign: "center",
        color: "#658491",
    },
    container: {
        height: "100%",
        paddingTop: "8vh",
        paddingBottom: "5vh",
    },
    card: {
        background: "#e9f0f3",
        margin: 20,
        padding: 30
    },
    input: {
        background: "#e9f0f3",
    },
    button: {
        background: "#8896a2",
        border: "2px solid #658491",
        color: "#e9f0f3",
        marginTop: 10,
    }
}))

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: "#658491",
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: "#54707f", //changed border color
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: "#658491",
        },
        '&:hover fieldset': {
          borderColor: "#658491",
        },
        '&.Mui-focused fieldset': {
          borderColor: '#54707f', //changed border color
        },
      },
    },
  })(TextField);

const Contact = () => {
    const styles = useStyles()
    return (
        <Paper className={styles.contactSection} id="contact">
            <Container className={styles.container} maxWidth="md">
                <Card className={styles.card}>
                    <CardContent>
                        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="contact" />
                            <Grid container className={styles.content} spacing={2}>
                                <Grid item xs={10}>
                                    <Typography component="h1" variant="h2" style={{textAlign:'center', paddingBottom: "15px"}}>Contact Me</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <CssTextField 
                                        label="First Name" 
                                        placeholder="Enter First Name" 
                                        variant="outlined" 
                                        className={styles.input} 
                                        fullWidth 
                                        required/>
                                </Grid>
                                <Grid item xs={5}>
                                    <CssTextField 
                                        label="Last Name" 
                                        placeholder="Enter Last Name" 
                                        variant="outlined" 
                                        className={styles.input} 
                                        fullWidth 
                                        required/>
                                </Grid>
                                <Grid item xs={10}>
                                    <CssTextField 
                                        type="email" 
                                        label="Email" 
                                        placeholder="Enter Email" 
                                        variant="outlined" 
                                        className={styles.input} 
                                        fullWidth 
                                        required/>
                                </Grid>
                                <Grid item xs={10}> 
                                    <CssTextField 
                                        label="Message" 
                                        multiline rows={4} 
                                        placeholder="Enter Message" 
                                        variant="outlined" 
                                        className={styles.input} 
                                        fullWidth 
                                        required/>
                                </Grid>
                                <Grid item xs={10}>
                                    <Button type="submit" className={styles.button} fullWidth>Submit</Button>
                                </Grid>
                            </Grid>          
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </Paper>
    )
}

export default Contact
