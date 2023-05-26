import React from 'react'
import { useState, useEffect } from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Social from "./Social"
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SwipableDrawer from '@material-ui/core/SwipeableDrawer'
import Divider from '@material-ui/core/Divider'
import ChevronIcon from '@material-ui/icons/ChevronRight'


const navigationLinks = [
    {name: "About", href: "#about" },
    {name: "Skills", href: "#skills" },
    {name: "Projects", href: "#projects" },
    {name: "Contact", href: "#contact" },
];

const useStyles = makeStyles((theme) => ({
    link: {
        marginRight: 20,
        color: "#e9f0f3",
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
    paper: {
        background: "#6c6c6c",
        color: "white"
    }
}))

function Navigation({style}) {
    const styles = useStyles()
    return (
        <div>
            {navigationLinks.map((item, id) => (
                <Link
                    className={styles.link}
                    style={style}
                    variant="button"
                    underline="none"
                    key={id}
                    href={item.href}
                    >
                    {item.name}
                </Link>
            ))}
        </div>
    )
}

export default function Header() {
    const styles = useStyles()
    const [navBackground, setNavBackground] = useState("appBarSolid")
    const [open, setOpen] = useState(false)
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
        <AppBar className={styles[navRef.current]} position="sticky" >               
            <Toolbar style={{display:"flex", justifyContent: "space-between"}}>
                <div style={{width: "270px", display: "flex"}}>
                    <Typography style={{ color: "#658491", fontSize: "1.2rem" }}><Link style={{color: "inherit"}}href="/ElyseMontano-Portfolio-Resume.pdf">Elyse Montano</Link></Typography>
                </div>
                <Hidden smDown>
                    <Social style={{color: "#757575"}}/>
                </Hidden>
                <Hidden smDown>
                    <Navigation style={{color: "#424242"}}/>
                </Hidden>
                <Hidden mdUp>
                <div onClick={() => setOpen(true)}>                    
                    <IconButton style={{color: "#757575"}}>
                        <MenuIcon />
                    </IconButton>
                </div>
                    </Hidden>
            </Toolbar>
            <SwipableDrawer classes={{ paper: styles.paper}} anchor="right" open={open} onOpen={()=> setOpen(true)} onClose={()=> setOpen(false)}>
                <div onClick={()=> setOpen(false)}>
                    <IconButton>
                        <ChevronIcon style={{color: "white" }}/>
                    </IconButton>
                </div>
                <Divider/>
                <Navigation style={{color: "#e9f0f3", display:"flex", flexDirection: "column", padding: "10px", paddingLeft: "20px"}}/>
            </SwipableDrawer>
        </AppBar>
    )
}
