import React from "react"
import { graphql } from "gatsby"

const Main = ({ data }) => (
  <div>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div dangerouslySetInnerHTML={{ __html: node.html }} />
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
