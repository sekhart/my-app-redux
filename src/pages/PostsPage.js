import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postsActions'
import { Post } from '../components/Post'

const PostsPage = ({ dispatch, posts, loading, hasErrors }) => {
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const renderPosts = () => {
        if (loading) return <p>Loading Posts ...</p>
        if (hasErrors) return <p>Unable to display Posts.</p>
        return posts.map(post => <Post key={post.id} post={post}></Post>)

    }

    return (
        <section>
            <h1>Posts</h1>
            {renderPosts()}
        </section>
    )
}

const mapStateToProps = state => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,

})


export default connect(mapStateToProps)(PostsPage)