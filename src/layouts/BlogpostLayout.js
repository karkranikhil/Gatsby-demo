import React from "react"
import {graphql} from 'gatsby'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
const BlogpostLayout =({data})=>{
    const post = data.markdownRemark;
    return (
        <div>
            <Header/>
            <div className="container pt-4">
                <div className="row justify-content-md-center">
                    <h1>{post.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{__html:post.html}}></div>
                </div>
               
            </div>
            <Footer/>
        </div>
    )
}
export default BlogpostLayout

export const query = graphql`
query($slug:String!){
    markdownRemark(fields:{slug:{eq:$slug}}){
        html
        frontmatter{
            title
        }
    }
}

`