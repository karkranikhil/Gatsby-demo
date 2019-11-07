import React from "react"
import {graphql} from 'gatsby'
import Post from '../components/Post/Post'
import MainLayout from '../layouts/MainLayout'
export default ({data}) =>{
    console.log(data)
    return  (
        <MainLayout column="col-12 col-md-8 col-lg-6">
            {data.allMarkdownRemark.nodes.map((node)=>(
                 <Post 
                 key={node.id}
                 title={node.frontmatter.title}
                 content={node.excerpt}
                 readMore={node.fields.slug}
                 image={node.frontmatter.image}></Post>
            ))}
        </MainLayout>
    )
}
export const query = graphql`
{
    allMarkdownRemark {
      nodes {
        excerpt
        html
        id
        frontmatter {
          date
          keywords
          title
          image
        }
        fields{
            slug
        }
      }
    }
  }
  
`

