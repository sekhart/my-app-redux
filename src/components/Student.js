import React from 'react'
// import { Link } from 'react-router-dom'

export const Student = ({ student }) => (
    <article className="post-excerpt">
        <h2>{student.name}</h2>
        <p>{student.username}</p>
        <p>{student.email}</p>
        <p>{student.address.city}</p>
        <p>{student.phone}</p>
        <p>{student.website}</p>
    </article>
)