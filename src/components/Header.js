import React from 'react'
import { useState, useEffect } from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Social from "./Social"
import Typography from '@material-ui/core/Typography'

const navigationLinks = [
    {name: "About", href: "#about" },
    {name: "Skills", href: "#skills" },
    {name: "Projects", href: "#projects" },
    {name: "Contact", href: "#contact" },
];

const useStyles = makeStyles((theme) => ({
    link: {
        marginRight: 20,
    },
    appBarTransparent: {
        backgroundColor: "rgba(255,255,255,0.6)",
    },
    appBarSolid: {
        backgroundColor: "#c5becb",
    },
    social: {
        marginRight: "auto"
    },
}))

export default function Header() {
    const styles = useStyles()
    const [navBackground, setNavBackground] = useState("appBarSolid")

    const navRef = React.useRef()
    navRef.current = navBackground

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 310
            if(show) {
                setNavBackground('appBarTransparent')
            } else {
                setNavBackground('appBarSolid')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <AppBar className={styles[navRef.current]} position="sticky">
            <Toolbar>
            <Typography style={{ color: "#658491" }}>Elyse Montano</Typography>
            <Social style={{color: "#757575"}}/>
                {navigationLinks.map((item, id) => (
                    <Link
                        className={styles.link}
                        style={{ color: "#424242" }}
                        variant="button"
                        underline="none"
                        key={id}
                        href={item.href}
                        >
                        {item.name}
                    </Link>
                ))}
            </Toolbar>
        </AppBar>
    )
}
