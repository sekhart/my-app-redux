import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchStudents } from '../actions/studentsActions'
import { Student } from '../components/Student'


const StudentsPage = ({ dispatch, students, loading, hasErrors }) => {
    useEffect(() => {
        dispatch(fetchStudents())
    }, [dispatch])

    const renderStudents = () => {
        if (loading) return <p>Loading Students ...</p>
        if (hasErrors) return <p>Unable to display Students.</p>
        return students.map(student => <Student key={student.id} student={student}></Student>)

    }

    return (
        <section>
            <h1>Students</h1>
            {renderStudents()}
        </section>
    )
}

const mapStateToProps = state => ({
    loading: state.students.loading,
    students: state.students.students,
    hasErrors: state.students.hasErrors,

})

export default connect(mapStateToProps)(StudentsPage)