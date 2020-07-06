import React from "react"
import { graphql } from "gatsby"
import "./index.module.css"

const Main = ({ data }) => (
  <div>
    {data.allMarkdownRemark.edges.map(({ node }, index) => (
      <div dangerouslySetInnerHTML={{ __html: node.html }} key={index} />
    ))}
  </div>
)

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          html
        }
      }
    }
  }
`

export default Main
