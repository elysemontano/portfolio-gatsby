import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
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
                                <CardMedia image={item.imageURL} className={styles.media}></CardMedia>
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
    {name: "CSS", imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLXflJBmQC32DU81iTxsEnOi0dgdjwZNNqjpk4RNbBOxZG4HSW076NIT9iSTGWYAV0YxOaFG1fiAJKCdDoH17r913fOXIcR0HUNdPs2-lgrrua8SuVohc9gbfWWDzVTh3EQsMYCrey5aq4KhX2dwjxzq=s162-no?authuser=0" },
    {name: "Javascript", imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLUtFnpP3lJvNjyf8m6Xzh2Xf2Z44Imu7Fea8l7Rj3KEK3nxhKOHmPcqHO3Y0WBu8iALGAQan2l9WX9WSUt6aNpRUIhjH5Iua4C2iMp_5smyUfoYV6Py6Uc7X6IkJy6Q738_Nm_fYceHoUFREQiO2tcI=w211-h239-no?authuser=0" },
    {name: "HTML", imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLVClNxciL3MyzG_SCPiepL6E4i-KF2DNKWjpR3AGnIbpjYt6Box5MT5IP1GIk-TJtAX9t8kwHBN5TVM-ZGO7EfK76DU4EMaAo4J9K--LkY-5tQMiBH9cNlt3nuyQO_HC3eEWeCqwkyj50Si7BxTA-x6=s225-no?authuser=0" },
    {name: "Ruby", imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLXIfwDEaCd7K-tOZYp13U51nI915a5xK0zLvfOKeifX1YAyfWcdTRXBYrBRSjmRThDYO6OTN5_yBWSYH0mdsCvgICF2mO2bUElebSy-jbb4vsoi2Km-DSZ7NRkE-WnZlktztfCxHarK1jT7zt-1xvFU=s225-no?authuser=0" },
    {name: "PHP", imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLWQmHZKlvghjFnYwz-Ft4RJps6TyH76d26ocWnK-c_Ks2utEWmbFV2X2ZAOnpyMuwdBm8tFZIVBHzM3lrKT66FDT0E9ZjDLJebCdYnSIqq_-P0J5SV-qrC_UwQMLLDN35UE9t5yyyt0PS4OF3-_kZNI=s225-no?authuser=0" },
    {name: "SQL", imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLXdTodEf_ZwDcPcvt_E-DYw19qwLOzYWxg9qFCovTkj4BRNbbzKuJMjSDbDw4dEi-qxXtByTbvvYWXXKRNzMaa25Bszo1i0q_tReNnEj2g7ikRAD3lBvDywNrpnffjoqAhDuxgd4PcGx5kz8Y1hVDTD=s261-no?authuser=0" },
];

const frameworks = [
    {name: "React", imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLWJj37liHiqCOuIO4NEy9THVL1V-X8yWordm710lyCNNU7SBnvo5BB3kNgN3Cku75lxLKXAXRWjt58BxJj24zFz5Y6PNokPulNLAF3T4S_nGRf2n3zbOJPxvTwmwNINS5-8hhbnYnBY3y1gE2oz0BKe=w211-h207-no?authuser=0" },
    {name: "Rails", imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLU5zlDSavP9iMPmTk4ag_FpCoWV1F-Jo--KAtkHdDQI44UR-1RjZ0u2HWr5dpzjVJg_PC5HvE2AmYzGziicsIW1Iho9_87p0symSO73jHU1-XHXQnIyG6kuKZUxye9QkFAAK1a5G2yr8IY4DPnKEq-d=w88-h90-no?authuser=0"},
]

const other = [
    {name: "Jest", imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLXcdRaweN4j8B19t4Pf9Ptek3dIFAMLikvxGjxAap4ZnQxHN6FIjSEDNOQPVOi16PN1fHEhRn4KJlmExQBrnGLqOvhco-WLemizJOfqEXha9rbm0vlUWNW8WithOeLQdlSR4QDKwUa7yoXGpLdOsKOO=s225-no?authuser=0"},
    {name: "Postgres", imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLVIm8AKE9t5zemIyguhYjg6G88OpYaVOgzrDoJky2BbLkmstYcdjEngxkRSKsSyJKDahPG5HYYgBSdUmVMW3naRcoLyXTAyB2rkIxdJ6HIEe36KuFqTL-KFkmxBSyCGN-cJ8eo7mRxszqmcUwmT_tTV=s225-no?authuser=0"},
    {name: "Git", imageURL: "https://lh3.googleusercontent.com/pw/AM-JKLVSSQi414xF6yuiVSwmlt1V4Ly8AZEplw7ZPeFUIIPDBltt0hZdm_ijGIR-NWxJW9LoIpG1COlfIOGFf3ZfdedANwPqj3j_-WnLWqbSmYsNPecV5rcXjLQygsSHpbklXeqKmgpgVXYebXZQxiks1khT=w633-h630-no?authuser=0"},
]