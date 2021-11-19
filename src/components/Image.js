import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"



const Image = ({ fileName, style }) => {
const { allFile } = useStaticQuery(graphql`
query ImageQuery{
    allFile {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
              fluid {
                originalName
              }
            }
          }
        }
      }
  }
`)


    return (
        <div>
          {allFile.edges.map((item, index) => {
             if(fileName === item.node.childImageSharp.fluid.originalName) {
                return (
                <div key={index}>
                    <GatsbyImage image={item.node.childImageSharp.gatsbyImageData} alt="" style={style}/>
                 </div>
                 )
             }
           })}
        </div>
      )
    }


export default Image