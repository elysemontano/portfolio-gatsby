import React from 'react'
import {createTheme, ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from '@material-ui/core/CssBaseline'
import HeroSection from "../components/HeroSection"
import Header from "../components/Header"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const darkTheme = createTheme({
  palette: {
    type: "light",
  },
});

const IndexPage = () => {
  return(
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </ThemeProvider>
  )
}

export default IndexPage
