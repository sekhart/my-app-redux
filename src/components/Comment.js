import React from 'react'
// import { Link } from 'react-router-dom'

export const Comment = ({ comment }) => (
    <article className="post-excerpt">
        <h2>{comment.email}</h2>
        <h2>{comment.name}</h2>
        <p>{comment.body.substring(0, 200)}</p>
    </article>
)