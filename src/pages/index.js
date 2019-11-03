import React from "react"
import Post from '../components/Post/Post'
import MainLayout from '../layouts/MainLayout'
export default () => (
    <MainLayout column="col-12 col-md-8 col-lg-6">
        <Post title="This is our first post" content="We are writing something to display our content"></Post>
        <Post title="This is our second post" content="We are writing something to display our content"></Post>
        <Post title="This is our third post" content="We are writing something to display our content"></Post>
        <Post title="This is our fourth post" content="We are writing something to display our content"></Post>
    </MainLayout>
)

