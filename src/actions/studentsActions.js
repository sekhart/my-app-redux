// Create Redux action types
export const GET_STUDENTS = 'GET STUDENTS'
export const GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS'
export const GET_STUDENTS_FAILURE = 'GET_STUDENTS_FAILURE'

export const getStudents = () => ({
    type: GET_STUDENTS,
})


export const getStudentsSuccess = students => ({
    type: GET_STUDENTS_SUCCESS,
    payload: students,
})


export const getStudentsFailure = () => ({
    type: GET_STUDENTS_FAILURE,
})


export function fetchStudents() {
    return async dispatch => {
        dispatch(getStudents())

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()

            dispatch(getStudentsSuccess(data))

        } catch (error) {
            dispatch(getStudentsFailure())
        }
    }
}