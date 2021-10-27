import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'

const socialItems = [
    { icon: GitHubIcon, url: 'https://github.com/elysemontano'},
    { icon: LinkedInIcon, url: 'https://www.linkedin.com/in/elysemontano/'}
]

export default function({style}) {
    return (
        <Grid container >
            {socialItems.map((item, id) => (
                <Grid item key={id}>
                    <Link href={item.url} target="_blank">
                        <IconButton style={style}>
                            <item.icon />
                        </IconButton>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}
